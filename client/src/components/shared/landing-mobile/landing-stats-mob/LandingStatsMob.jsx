import React from "react";
import axios from "axios";
import './LandingStatsMob.css';

class LandingStatsMob extends React.Component {
  state = { stats: [] };

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

  renderStats() {
    const { stats } = this.state;

    return (
      <div className="stats-container-mob">
        {stats.map(stat => (
          <div className="la-single-stat-mob">
            <div className="stat-value-mob">{stat.value}</div>
            <div className="stat-name-mob">{stat.name}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div class="stats-body-mob">
        <div class="statsHeader-mob">
          <h1 style={{ marginTop: "4rem", fontSize: '2em' }}>SUCCESS</h1>
          <div className="stats-line-mob"></div>
          <h1>Since 2008</h1> 
          <h1>You have cared</h1> 
          <h1>We did the math</h1>
          <br />
         
          <div className="stats-container-mob">
            
              {this.renderStats()}
            
          </div>
        </div>
      </div>
    );
  }
}

export default LandingStatsMob;
