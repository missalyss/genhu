import React from "react";
import axios from "axios";
import Stat from "./AdminStatMob";
import StatForm from "./AdminStatFormMob";
import { AdminTitle } from "../../Styles";
import "./AdminStatsMob.css";
import { Link } from 'react-router-dom';

class StatsMob extends React.Component {
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
      <div className="stat-row-mob">
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
      <div className="sa-container-mob">
        <AdminTitle className="emp-page-heading-mob">Stats Page</AdminTitle>
        <div className="button-cont-sa-mob">
        <div className='employee-buttons-mob'>
          <button className="add-button-mob" onClick={this.toggle}>
            Add New Stat
          </button>
        <Link to='/admin'>
          <button className="back-button-mob" onClick={this.toggle} >
            Back
          </button>
         </Link>
        </div>
         </div>
        {this.state.toggleForm ? (
          <div className='center-mob'> <StatForm addStat={this.addStat} /> </div>
        ) : (
          <div></div>
        )}
        {this.renderStats()}
        {/* </AdminTitle> */}
      </div>
    );
  }
}

export default StatsMob;


