import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
        <div className="logo">
            <h1>Event Ticket</h1>
            <h3>Marketplace</h3>
        </div>
        <div className="header__search">
            <SearchIcon/>
            <input placeholder='Search items, collections and accounts' type="text"/>
         </div>
        <div className="header__right">
        <ul>
            <li><a class="navitem" href="/discover">Discover</a></li>
            <li><a class="navitem" href="/createEvent">Create Event</a></li>
            <li><a class="navitem" href="/connectWallet">Connect Wallet</a></li>
       </ul>
        </div>
    </div>
    </div>
  )
}

export default Header