import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({ title, Icon }) {
    return (
        <div className='sidebarOptions'>
            <img
                className='sidebar_logo'
                src=""
                alt="logo">
            </img>
            <p>{title}</p>
        </div>
    )
}

export default SidebarOptions