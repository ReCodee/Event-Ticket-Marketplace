import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
function Header() {

  const handleClick = () => {
      if ( window.ethereum ) {

      } else {
        alert('install metamask');
      }
  }

  return (
    <div className='header'>
        <div className="header__left">
        <div className="logo">
            <h1>NFT Ticketing</h1>
            <h3>Marketplace</h3>
        </div>
        <div className="header__search">
            <SearchIcon/>
            <input placeholder='Search items, collections and accounts' type="text"/>
         </div>
        <div className="header__right">
        <ul>
            <li><a class="navitem" href="">Discover</a></li>
            <li><a class="navitem" href="">Create Event</a></li>
            <li onClick={() => {
              handleClick()
            }} ><a class="navitem" href="">Connect Wallet</a></li>
       </ul>
        </div>
    </div>
    </div>
  )
}

export default Header