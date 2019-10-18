import React from 'react';
import axios from 'axios';

class ShowOrphanages extends React.Component {
 state = { orphanage: {} }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/homes/${id}`)
    .then(res => {
      this.setState({ orphanage: res.data})
    })
  }
  render() {
    const { orphanage} = this.state;
    return(
      <div style={{padding: '5em'}}>
      <h1>SHOW ME</h1>SHOW
      <h1>{orphanage.name}</h1>
      <h1>{orphanage.director}</h1>
      <h1>{orphanage.sponsor}</h1>
  

      </div>
      )
    }
}


export default ShowOrphanages;