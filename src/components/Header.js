import React from 'react'
import {Link} from 'react-router-dom'

export default function Header () {
    return (
    <div className="app-items">
        <h2>NiceToMeetMe</h2>
        <Link to="/">{`<Back to the Conference Room`}</Link>
    </div>
    )
}