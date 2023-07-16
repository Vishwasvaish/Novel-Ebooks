import React, { useState } from 'react'

const StateMangement = () => {

    let count = 10;

    const [likes, setLikes] = useState(0);

  return (
    <div>
        <div className='container'>
            <h1 className='text-center'>State Management</h1>
            <hr />
            <h2>Count : {count}</h2>
            <button className='btn btn-primary' onClick={() => { count++; console.log(count); }}>Add Count</button>
            <h2>Likes : {likes}</h2>
            <button className='btn btn-success' onClick={() => { setLikes(likes + 1) }}>Add Like</button>
        </div>
    </div>
  )
}

export default StateMangement;