import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>My Homepage</h1>  
        <p className='heading'>My First React App</p>
        <h3 style={{ color : 'blue', backgroundColor: 'yellow' }}>Inline CSS in JSX is written in form of object</h3>
        <input type="text" />
        <button className='btn btn-primary'>Nice</button>
    </div>
    
  )
}

export default Home;