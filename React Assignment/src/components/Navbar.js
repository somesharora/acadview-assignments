import React from 'react'
import {Link} from 'react-router-dom'
const Navbar =()=>
{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link className="brand-logo" to='/'>React</Link>
                <ul className="right">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/info'>Info</Link></li>
                </ul>

            </div>
        </nav>
    )
}
export default Navbar