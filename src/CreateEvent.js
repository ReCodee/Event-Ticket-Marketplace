import React from 'react'
import './CreateEvent.css'
import { useState } from 'react';
import { ContactlessRounded } from '@material-ui/icons';

const CreateEvent = () =>{

    const [eventRegistration, seteventRegistration] = useState(
        {
            eventName: "",
            venue: "", 
            photo: null,
            timings: "",
            desc:""
        }
    );
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        seteventRegistration({ ...eventRegistration, [name]:value})
    }

    const [events, setEvents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {...eventRegistration, id : new Date().getTime().toString()}
        // setEvents(events => [...events, newEvent]);
        events.push(newEvent);
        console.log(events);
        seteventRegistration({eventName: "",
        venue: "", 
        photo: null,
        timings: "",
        desc:""})
        // window.location.reload();
    }
    
    const handlePhoto = () => {
        if (eventRegistration.photo){
            return eventRegistration.photo;
        }
    }

  return (
      <div>
    <div className='CreateEvent'> 
        <form action = "" onSubmit={handleSubmit}>
            <div className='inp'>
                <lable htmlFor ="username">Event Name</lable>
                <input type = "text" autoComplete = "off"
                placeholder='Name'
                onChange={handleInput}
                 name = "eventName" id = "eventName"></input>
            </div>
            <div className='inp'>
                <lable htmlFor ="username" >Venue</lable>
                <input type = "text" autoComplete = "off"
                placeholder="Venue"
                onChange={handleInput}
                name = "venue" id = "venue"></input>
            </div>
            <div className='inp'>
                <lable htmlFor ="username" >Event Photo/Banner</lable>
                <input type = "file"
                onChange={(event) => {
                    if (event.target.files && event.target.files[0]){
                    console.log(event.target.files[0]);
                    seteventRegistration({...eventRegistration, photo: URL.createObjectURL(event.target.files[0])});
                    }
                  }}
                name = "photo" id = "photo"></input>
            </div>
            
            <img src={handlePhoto()} height = {eventRegistration.photo?100:0}/>
            
            <div className='inp'>
                <lable htmlFor ="username" >Timings</lable>
                <input type = "text" autoComplete = "off"
                placeholder='Timings'
                onChange={handleInput}
                name = "timings" id = "timings"></input>
            </div>
            <div className='inp'>
                <lable htmlFor ="username" >Description</lable>
                <input type = "text" autoComplete = "off"
                placeholder='A short note'
                onChange={handleInput}
                name = "desc" id = "desc"></input>
            </div>

            <button className='btn' type = "submit">Create</button>
        </form>
        
    </div>
    <div className='outputContainer'>
            {
                events.map((currEvent) => {
                    return (
                        <div className='showDataStyle'>
                            <p>{currEvent.eventName}</p>
                            <p>{currEvent.venue}</p>
                            <p>{currEvent.photo}</p>
                            <p>{currEvent.timings}</p>
                            <p>{currEvent.desc}</p>
                        </div>
                    )
                } )
            }
        </div>
    </div>
  )
}

export default CreateEvent