import React from 'react';
import axios from 'axios';
import Stat from './Stat';
import StatForm from './StatForm';

class Stats extends React.Component {
  state = { stats:[], toggleForm: false, editing: false }

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

  toggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing })
  }

  editStat = (id) => {
    axios.put(`api/stats/${id}`)
    .then( res => {
      const stats = this.state.stats.map(stat => {
        if (stat.id === id)
          return res.data;
          return stat;

      });
      this.setState({ stats, })
    })
  }

  renderStats() {

    const { stats } = this.state;

    return(

      <div>
      { stats.map( stat => 
        <Stat
        key={stat.id}
        {...stat}
        editStat={this.editStat}
        toggleEdit={this.toggleEdit}
        editing={this.state.editing}
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
        <button onClick={this.toggle}>Add New Stat</button>
        {this.state.toggleForm ? 
        <StatForm addStat={this.addStat} /> : <div>not toggled</div> }
        {this.renderStats()}
      </div>
      
    )
  }
}

export default Stats;