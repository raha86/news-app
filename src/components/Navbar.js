import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function () {
  return (
    <div className='navbar'>
        <div className="navElements">
            <h3 className="title">NewsDaily</h3>
            <div className="navMenus">
                <ul>
                    <li className="navMenu"><Link to="/">general</Link></li>
                    <li className="navMenu"><Link to="/business">business</Link></li>
                    <li className="navMenu"><Link to="/entertainment">entertainment</Link></li>
                    <li className="navMenu"><Link to="/health">health</Link></li>
                    <li className="navMenu"><Link to="/sports">sports</Link></li>
                    <li className="navMenu"><Link to="/technology">technology</Link></li>
                </ul>
            </div>
            <div className="search">
                <input className='searchBar' type="text" placeholder='Search here'/>
                <button className='searchBtn'>Search</button>
            </div>
        </div>
    </div>
  )
}
