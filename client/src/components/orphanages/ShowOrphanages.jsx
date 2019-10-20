import React from 'react';
import axios from 'axios';
import Footer from '../shared/Footer';


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
      <div className='cntr-content-home'>
        <div className='cntr-col-home'>

        <div>
          <h3>About {orphanage.name} </h3>
          <p> Just 45 minutes west of Cusco, the {orphanage.home} is snuggled against a hillside in the town of Izcuchaca. Founded by a Catholic nun decades ago, it is home to about 25 girls or have been orphaned or abandoned. In addition many children who attend elementary school in Izcuchaca live in the surrounding villages atop the mountains surrounding the home.  The nuns feed these children lunch (school lunch is not provided) as they leave school to return to their homes.  Some of them live a 1-2 hour hike away and have had nothing to eat all day. These children live in improverish peasant homes made of adobe and dirt floors.

The bishop of the local diocese donates approximately $300 USD monthly, and Generations Humanitarian pays the rest. The home is run by three nuns, who love and care for the children and are very frugal.
The {orphanage.home} has a basketball/volleyball court, two greenhouses, classrooms, a multipurpose room, kitchen, laundry area (done by hand), and dorms.
Beginning in 2017, we are launching an education fund for the full time residents of the home.  This includes private education, technical trade such as making pottery and ceramics, and university scholarships.</p>
          
        </div>
        <div>
          <h1>Image Coming Soon</h1>
        </div>
        </div>
      </div>
      <Footer />
      </>
      )
    }
}


export default ShowOrphanages;