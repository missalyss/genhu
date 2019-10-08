import React from 'react';


const Stats = () => {
  return(
    <div class='body'>
      <div class='statsHeader'><h1 style={{marginTop: '5rem'}}>SUCCESS </h1>
      <h1>Since 2008. You have cared. We did the math.</h1>
      </div>
      <div class="container">
        <div class="cell cell-1"><h1>1526</h1><h6>Children</h6></div>
        <div class="cell cell-2"><h1>17070</h1><h6>Meals Per Month</h6></div>
        <div class="cell cell-3"><h1>818,033</h1><h6>Meals To Date</h6></div>
        <div class="cell cell-4"><h1>18.05</h1><h6>Tons of Donations</h6></div>
        <div class="cell cell-5"><h1>90,136</h1><h6>Volunteer Hours</h6></div>
        <div class="cell cell-6"><h1>507</h1><h6> Expedition Participants</h6></div>
        <div class="cell cell-7"></div>
        <div class="cell cell-7"><h1>$2,175,883</h1><h6>Value of Volunteer Time</h6> </div>
        <div class="cell cell-7"></div>
      </div>
    </div>
  )
}

export default Stats;