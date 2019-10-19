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
    const { orphanage } = this.state;
    return(
      <>
      <div className='centers-top-cont'>
      {/* <h1>SHOW ME</h1> */}
      <div className='centers-img'>
        <div className='centers-dir'>
          <h1 className='dir-title'>{orphanage.name}</h1>
          <div className='centers-dir-flex'>
            <div className='centers-dir-col'>
              <h1>{orphanage.director}</h1>
              <p>Director</p>
            </div>
            <div className='centers-dir-col'>
              <h1>{orphanage.sponsor}</h1>
              <p>Sponsor</p>
            </div>
          </div>
        </div>
        </div>
        <div className='centers-map'>
          <h1>Map</h1>
        </div>
      </div>
      <div className='centers-stats-cont'>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{orphanage.sheltered_children} </div>
            <p className='homes-stat-title'>Sheltered Children</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{orphanage.sheltered_children}% </div>
            <p className='homes-stat-title'>Victims of Armed Conflict</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{orphanage.victims}% </div>
            <p className='homes-stat-title'>Orhpans</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{orphanage.volunteers}</div> 
            <p className='homes-stat-title'>Regular Volunteers</p>
          </div>
        </div>

      </div>
      </>
      )
    }
}


export default ShowOrphanages;