import React from 'react'
import "./Discover.css"
import Event from './Event';
import SearchIcon from '@material-ui/icons/Search';
document.body.style.backgroundColor = "#000";
const nfts = []
for (let i = 0; i < 12; i++) {
  nfts.push(<li><Event/></li>);
}
function Discover() {
  return (
    <div className='nftList'> 
    <div className="header">
        <div className='explore_page_heading'>
          ALL Events
        </div>
        
        </div>
        <div className="allNFTs">
          {nfts}
        </div>
        
    </div>
  )
}

export default Discover