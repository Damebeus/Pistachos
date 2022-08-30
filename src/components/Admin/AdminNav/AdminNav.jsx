import React from 'react'
import {Link} from 'react-router-dom'

function AdminNav() {
    

    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
        <button onClick={handleClick}>Logout</button>
        <Link to='/admin'>
            <label>
                Admin Home
            </label>
        </Link>
        <Link to='/admin/ordenes'>
            <label>
                Ordenes
            </label>
        </Link>
        <Link to='/admin/create'>
            <label>
                Create New Product
            </label>
        </Link>
    </div>
  )
}

export default AdminNav