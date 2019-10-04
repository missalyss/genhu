import React from 'react';
import StatImage from '../../assets/Images/stats_image.jpg';



const Stats = () => {
  return(
    <div>
      Stats Grid
      <img src={StatImage} className= 'stat-background-image' />
      <div class='statsGrid'>SUCCESS 
      <br/>
      Since 2008. You have cared. We did the math.
      <br/><br/>
      </div>
      <div class="container2">
        <div class="cell cell-1">1526 Children</div>
        <div class="cell cell-2">17070 Meals Per Month</div>
        <div class="cell cell-3">818,033 Meals To Date</div>
        <div class="cell cell-4">18.05 Tons of Donations</div>
        <div class="cell cell-5">90,136 Volunteer Hours</div>
        <div class="cell cell-6">507 Expedition Participants</div>
        <div class="cell cell-7">$2,175,883 Value of Volunteer Time</div>
      </div>
    </div>
  )
}

export default Stats;