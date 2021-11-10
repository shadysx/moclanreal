import React from 'react'
import { FetchMediaLinks  } from './InstagramFetch';

const AdminPanel = () => {
    return (
        <div>
           <h1>ADMIN PANEL </h1>

           <h4>Instagram update</h4>
           <button onClick={FetchMediaLinks}>FETCH</button>
        </div>
    )
}

export default AdminPanel
