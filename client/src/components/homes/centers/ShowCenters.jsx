import React from 'react';
import axios from 'axios';
import './ShowCenters.css';


class ShowCenters extends React.Component {
 state = { center: {} }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/homes/${id}`)
    .then(res => {
      this.setState({ center: res.data})
    })
  }
  render() {
    const { center } = this.state;
    return(
      <>
      <div className='centers-top-cont'>
      {/* <h1>SHOW ME</h1> */}
        <div className='centers-dir'>
          <h1 className='dir-title'>{center.name}</h1>
          <div className='centers-dir-flex'>
            <div className='centers-dir-col'>
              <h1>{center.director}</h1>
              <p>Director</p>
            </div>
            <div className='centers-dir-col'>
              <h1>{center.sponsor}</h1>
              <p>Sponsor</p>
            </div>
          </div>
        </div>
        <div className='centers-img'>
          <h1>Map</h1>
        </div>
      </div>
      <div className='centers-stats-cont'>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            {center.sheltered_children} 
            <p>Sheltered Children</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            {center.sheltered_children} 
            <p>Victims of Armed Conflict</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            {center.victims} 
            <p>Orhpans</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            {center.volunteers} 
            <p>Regular Volunteers</p>
          </div>
        </div>

      </div>
      </>
      )
    }
}


export default ShowCenters;