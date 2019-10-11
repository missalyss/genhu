import React from 'react';
import axios from 'axios';
import Stat from './Stat';
import StatForm from './StatForm';

class Stats extends React.Component {
  state = { stats:[], toggleForm: false }

  componentDidMount() {
    axios.get('/api/stats')
    .then( res => {
      this.setState({ stats: res.data, })
    })
    .catch( err => {
      console.log(err);
    })
  }

  addStat = (stat) => {
    axios.post('/api/stats', stat )
      .then( res => {
        const {stats} = this.state;
        this.setState({ stats: [...stats, res.data]})
      })  
  }

  toggle = () => {
    const { toggleForm } = this.state;
    this.setState({ toggleForm: !toggleForm})
  } 

  renderStats() {

    const { stats } = this.state;

    return(

      <div>
      { stats.map( stat => 
        <Stat
        key={stat.id}
        {...stat}
        // updateStat={updateStat}
        // deleteStat={deleteStat}
        />
        )
      }
      </div>
    )
  }

  render() {
    return (
      <div>
        <StatForm toggleForm = {this.toggle} toggleState={this.state.toggleForm} addStat={this.addStat}/>
        {this.renderStats()}
      </div>
      
    )
  }
}

export default Stats;