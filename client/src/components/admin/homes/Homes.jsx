import React from "react";
import axios from "axios";
import Orphanage from "./orphanages/Orphanage";
import Center from "./orphanages/Center";
import HomeForm from "./HomeForm";
import { AdminTitle, AdminSubTitle } from "../Styles";
import "../stats/AdminStats.css";

class Homes extends React.Component {
  state = { homes: [], orphanages: [], centers: [], toggleForm: false };

  componentDidMount() {
    axios
      .get("/api/homes")
      .then(res => {
        this.setState({ homes: res.data });
      })
    axios
      .get("/api/orphanages")
      .then(res => {
        this.setState({ orphanages: res.data });
      })
    axios
      .get("/api/centers")
      .then(res => {
        this.setState({ centers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addHome = home => {
    axios.post("/api/homes", home).then(res => {
      const { homes, centers, orphanages } = this.state;
      this.setState({ homes: [...homes, res.data], centers: [...centers, res.data], orphanages: [...orphanages, res.data] });
      window.location.href = '/homes'
    });
  };

  toggle = () => {
    const { toggleForm } = this.state;
    this.setState({ toggleForm: !toggleForm });
  };

  editHome = (id, home) => {
    axios.put(`api/homes/${id}`, { home }).then(res => {
      const homes = this.state.homes.map(home => {
        if (home.id === id) return res.data;
        return home;
      });
      this.setState({ homes });
      window.location.href = '/homes'
    });
  };

  deleteHome = id => {
    axios.delete(`/api/homes/${id}`).then(res => {
      const { homes, } = this.state;
      this.setState({ homes: homes.filter(h => h.id !== id) });
      window.location.href = '/homes'

    });
  };


  renderHomes() {
    const { homes } = this.state

    return (
      <div>
        {homes.map(home => {
          if (home.role === 'center') {
            this.setState({ centers: [...this.state.centers, home] })
            { this.renderCenters() }
          }

          if (home.role === 'orphanages') {

            this.setState({ orphanages: [...this.state.orphanages, home] })
            { this.renderOrphanages() }
          }
        }
        )}
      </div>
    )
  }

  renderOrphanages() {
    const { orphanages } = this.state;

    return (
      <div className='home-section-cont'>
        {orphanages.map(orphanage => (
          <Orphanage
            key={orphanage.id}
            {...orphanage}

            toggle={this.toggle}
            editHome={this.editHome}
            deleteHome={this.deleteHome}
            />
            ))}
      </div>
    );
  }
  renderCenters() {
    const { centers } = this.state;
    
    return (
      <div className='home-section-cont'>
        {centers.map(center => (
          <Center
          key={center.id}
          {...center}
          
            toggle={this.toggle}
            editHome={this.editHome}
            deleteHome={this.deleteHome}
            />
            ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <AdminTitle>Homes Page</AdminTitle>
        <div>
          <button className="add-button" onClick={this.toggle}>
            Add New Home
          </button>
        </div>
        {this.state.toggleForm ? (
          <div className='center'> <HomeForm addHome={this.addHome} toggle={this.toggle}/> </div>
        ) : (
            <div></div>
          )}
          <div>
          <div>
          <AdminSubTitle className='sa-title'>Orphanages</AdminSubTitle>
            {this.renderOrphanages()}
          </div>
          <div>
          <AdminSubTitle className='sa-title'>Centers</AdminSubTitle>
            {this.renderCenters()}
          </div>
          </div>
        {/* </AdminTitle> */}
      </div>
    );
  }
}

export default Homes;
