import React from 'react'

const EventHandling = () => {
  return (
    <div>
        <h1 className='display-4 fw-bold text-center'>Event Handling</h1>
        <hr/>
        <div className='container'>
            <button className='btn btn-primary' onClick={ () => { alert('button was clicked!!') } } >Click Event</button>

            <input className='form-control' onChange={(e) => { console.log(e.target.value) }} />
        </div>
    </div>
  )
}

export default EventHandling;