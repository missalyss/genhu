import React from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import Footer from '../../shared/Footer';
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

  componentDidUpdate() {
    this.componentDidMount()
  }

  renderCountUp = () => {
    if (this.state.center.victims) {
      return(
        <CountUp end={this.state.center.victims} />
      )
    }
  }
  
  render() {
    const { center } = this.state;
        return(
      <>
      <div className='centers-top-cont'>
      {/* <h1>SHOW ME</h1> */}
      <div className='centers-img'>
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
        </div>
        <div className='centers-map'>
          <h1>Map</h1>
        </div>
      </div>
      <div className='centers-stats-cont'>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{center.sheltered_children} </div>
            <p className='homes-stat-title'>Sheltered Children</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{center.sheltered_children}% </div>
            <p className='homes-stat-title'>Victims of Armed Conflict</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>
              { this.renderCountUp() }% </div>
            <p className='homes-stat-title'>Orhpans</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{center.volunteers}</div> 
            <p className='homes-stat-title'>Regular Volunteers</p>
          </div>
        </div>

      </div>
      <div className='cntr-content-home'>
        <div className='cntr-col'>
          <div>
            <h1>About {center.name} Drop-In Center</h1>
            <p>Coming Soon...</p>
            <h4>Stay Tuned!</h4>
          </div>
        </div>
        <div className='cntr-col'>
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


export default ShowCenters;