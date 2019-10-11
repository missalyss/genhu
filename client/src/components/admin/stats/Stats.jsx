import React from 'react';
import axios from 'axios';

class Stats extends React.Component {
  state = { stats:[] }

  componentDidMount() {
    axios.get('/api/')
  }

  render() {
    return (
      <div>Stats</div> 
      
    )
  }
}

export default Stats;