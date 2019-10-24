import React from "react";
import axios from "axios";
import Stat from "./Stat";
import StatForm from "./StatForm";
import { AdminTitle } from "../Styles";
import "./AdminStats.css";
import { Link } from 'react-router-dom';

class Stats extends React.Component {
  state = { stats: [], toggleForm: false };

  componentDidMount() {
    axios
      .get("/api/stats")
      .then(res => {
        this.setState({ stats: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addStat = stat => {
    axios.post("/api/stats", stat).then(res => {
      const { stats } = this.state;
      this.setState({ stats: [...stats, res.data] });
    });
  };

  toggle = () => {
    const { toggleForm } = this.state;
    this.setState({ toggleForm: !toggleForm });
  };

  editStat = (id, stat) => {
    axios.put(`api/stats/${id}`, { stat }).then(res => {
      const stats = this.state.stats.map(stat => {
        if (stat.id === id) return res.data;
        return stat;
      });
      this.setState({ stats });
    });
  };

  deleteStat = id => {
    axios.delete(`/api/stats/${id}`).then(res => {
      const { stats } = this.state;
      this.setState({ stats: stats.filter(s => s.id !== id) });
    });
  };

  renderStats() {
    const { stats } = this.state;

    return (
      <div className="stat-row">
        {stats.map(stat => (
          <Stat
            key={stat.id}
            {...stat}
            editStat={this.editStat}
            deleteStat={this.deleteStat}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="sa-container">
        <AdminTitle className="sa-title">Stats Page</AdminTitle>
        <div className="button-cont-sa">
          <button className="add-button" onClick={this.toggle}>
            Add New Stat
          </button>
          <Link to='/admin'>
          <button className="add-button" onClick={this.toggle} >
            Back
          </button>
          </Link>
        </div>
        {this.state.toggleForm ? (
          <div className='center'> <StatForm addStat={this.addStat} /> </div>
        ) : (
          <div></div>
        )}
        {this.renderStats()}
        {/* </AdminTitle> */}
      </div>
    );
  }
}

export default Stats;
