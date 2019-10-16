// import React, { Component } from 'react';
// import Footer from '../shared/Footer';

// class Calendar extends Component {
//   render() {
//     return (
//       <>
//       <h2>Coming Soon!</h2>
//       <Footer/>
//       </>
//     )
//   }
// }

// export default Calendar;

// import React, { useState, useEffect } from "react";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import { makeStyles } from "@material-ui/core/styles";
// import EventForm from "./events/EventForm";
// import Typography from "@material-ui/core/Typography";
// import { Paper } from "@material-ui/core";
// import EventShow from "./events/EventShow";
// import PaperModal from "./reusable/PaperModal";
// import useFlash from "../hooks/useFlash";
// import axios from "../utils/webRequests";
// import snakeCaseKeys from "snakecase-keys";


// const useStyles = makeStyles(theme => ({
  //   paper: {
    //     padding: "1rem",
    //   }, 
    //   calendar: {
      //     minHeight: "50rem",
      //   }
      // }));
      
      // const MyCalendar = props => {
        //   const classes = useStyles();
        //   const [Flash, newMessage] = useFlash();
        //   const localizer = momentLocalizer(moment);
        //   const [events, setEvents] = useState([]);
        //   const [start, setStart] = React.useState("");
        //   const [end, setEnd] = React.useState("");
        //   const [animals, setAnimals] = useState([]);
        //   const [eventTypes, setEventTypes] = useState([]);
        //   const [groups, setGroups] = useState({});
        //   const [users, setUsers] = useState([]);
        //   const [showEvent, setShowEvent] = useState({});
        //   const [showModalIsOpen, setShowModalIsOpen] = useState(false);
        //   const [formModalIsOpen, setFormModalIsOpen] = useState(false);
        
        //   // gets animals on initial render
        //   useEffect(() => {
          //     axios.get(`/api/animals`)
          //     .then((res) => setAnimals(res.data.data))
          //     .catch((err) => newMessage(`Could Not Get Animals: ${err.message}`));
          //   }, []);
          
          //   // gets users on initial render
          //   useEffect(() => {
            //     axios.get(`/api/users`)
            //     .then((res) => setUsers(res.data.data))
            //     .catch((err) => newMessage(`Could Not Get Users: ${err.message}`));
            //   }, []);
            
            //   // gets event types on initial render
            //   useEffect(() => {
              //     axios.get(`/api/event_types`)
              //       .then((res) => setEventTypes(res.data.data))
              //       .catch((err) => newMessage(`Could Not Get Event Types: ${err.message}`));
              //   }, []);
              
              //   // gets groups on initial render and formats them into an object
              //   // where we can easily grab information by their ids
              //   useEffect(() => {
                //     axios.get(`/api/groups`)
                //       .then((res) => {
                  //         setGroups(res.data.data.reduce((hash, group) => {
//           hash[group.attributes.id] = group.attributes;
//           return hash;
//         },{}))
//       })
//       .catch((err) => newMessage(`Could Not Get Groups: ${err.message}`));
//   }, []);

//   // gets all events
//   useEffect(() => {
  //     axios.get(`/api/events/`)
  //       .then((res) => {
    //         setEvents(res.data.data.map((event) => ({
      //           ...event.attributes,
      //           startAt: new Date(event.attributes.startAt),
      //           endAt: new Date(event.attributes.endAt),
      //         })));
      //       })
      //       .catch((err) => newMessage(err.message));
      //   }, []);
      
      //   const addEvent = (newEvent) => {
        //     return new Promise((resolve, reject) => {
          //       axios.post(`/api/events`, { event: snakeCaseKeys(newEvent) })
          //         .then((res) => {
            //           const eventData = res.data.data;
            //           setEvents([{
              //             ...eventData.attributes,
              //             startAt: new Date(eventData.attributes.startAt),
              //             endAt: new Date(eventData.attributes.endAt),
              //           }, ...events]);
              //           resolve(res);
              //         })
              //         .catch(reject);
              //     })
              //   };
              
              //   function updateEvent(updatedEvent) {
                //     return new Promise((resolve, reject) => {
                  //       axios.put(`/api/events/${updatedEvent.id}`, 
                  //       {event: snakeCaseKeys(updatedEvent)})
                  //       .then((res) => {
                    //         const eventData = res.data.data;
                    //         const eventParams = {
                      //           ...eventData.attributes,
                      //           ...eventData.relationships,
                      //           startAt: new Date(eventData.attributes.startAt),
                      //           endAt: new Date(eventData.attributes.endAt),
                      //         }
                      
                      //         const newEventsState = events.map((event) => {
                        //           if(event.id == updatedEvent.id) return eventParams
                        //           else return event;
                        //         });
                        
                        //         setShowEvent(eventParams);
                        //         setEvents(newEventsState);
                        //         resolve(res);
                        //       })
                        //       .catch(reject);
                        //     })
                        //   }
                        
                        //   function deleteEvent(deletedEvent) {
                          //     return new Promise((resolve, reject) => {
                            //       axios.delete(`/api/events/${deletedEvent.id}`)
                            //       .then((res) => {
                              //         setEvents(events.filter((event) => event.id !== deletedEvent.id ))
                              //         resolve(res);
                              //       })
                              //       .catch(reject);
                              //     })
                              //   }
                              
                              //   const handleSelect = ({ start, end }) => {
                                //     setStart(start);
                                //     setEnd(end);
//     setFormModalIsOpen(true);
//   };

//   return (
  //     <div>
  //       <Flash />
//       <PaperModal
//         open={formModalIsOpen}
//         setOpen={setFormModalIsOpen}>
//         <EventForm
//           isNew
//           addEvent={addEvent}
//           start={start}
//           end={end}
//           animals={animals}
//           users={users}
//           eventTypes={eventTypes}
//         />
//       </PaperModal>
//       <PaperModal
//         open={showModalIsOpen}
//         setOpen={setShowModalIsOpen}>
//         <EventShow
//           event={showEvent}
//           groups={groups}
//           updateEvent={updateEvent}
//           deleteEvent={deleteEvent}
//           animals={animals}
//           users={users}
//           eventTypes={eventTypes}
//         />
//       </PaperModal>
//       <Typography variant="h3" style={{ textAlign: "center" }}>
//         Calendar
//       </Typography>
//       <br />
//       <br />
//       <Paper className={classes.paper} >
//         <Calendar
//           className={classes.calendar}
//           selectable
//           localizer={localizer}
//           views={{ month: true, week: true, day: true}}
//           events={events}
//           startAccessor="startAt"
//           endAccessor="endAt"
//           titleAccessor="name"
//           defaultView="week"
//           showMultiDayTimes
//           onSelectSlot={handleSelect}
//           onSelectEvent={(event) => {
  //             setShowEvent(event);
  //             setShowModalIsOpen(true);
  //           }}
  //         />
  //       </Paper>
  //     </div>
  //   );
  // };
  
  
  import React, { useState, useEffect } from "react";
  import { Calendar, momentLocalizer } from 'react-big-calendar'
  import moment from 'moment'
  
  const localizer = momentLocalizer(moment)
  
  const MyCalendar = props => (
    <div>
    <Calendar
      localizer={localizer}
      // events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default MyCalendar;