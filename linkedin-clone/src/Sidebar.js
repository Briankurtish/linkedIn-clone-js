import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar' >
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <Avatar className = 'sidebar__avatar' />
        <h2>Brian Kurtish</h2>
        <h4>asaforbrian18@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">
            2,354
          </p>
        </div>
        <div className="sidebar__stat">
        <p>Views on Post</p>
          <p className="sidebar__statNumber">
            2,448
          </p>
        </div>
      </div>


      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar