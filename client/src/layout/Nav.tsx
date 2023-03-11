import React from 'react'
import { Link} from 'react-router-dom'
import '@/styles/nav.module.scss'
import {BiSearch} from "react-icons/bi"
export default function Nav() {
  return (
    <nav >
    <ul>

        <li>
            <Link to='/'>
                Home
            </Link>
        </li>
        <li>
           <div className="in">
               <input type="text"  />
               <BiSearch />
           </div>
        </li>
        <li>
           
            <Link to='form'>
            Form 
            </Link>
        </li>
    </ul>
</nav>
  )
}
