import React from 'react'
import '../../style/head.css'
import group from '../../icons/Group.png'
import bell from '../../icons/ic_round-notifications.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import face from '../../icons/Mask Group.png'
import '../../style/search.css'
import threebar from '../../icons/ic_burgermenu.png'


const Head = () => {
    // const style = { border: "2px solid black", width: "80%" };

  return (
    <div className='head'>
            <div className='threebar'>
               <button><img src={threebar} alt='ic_burgermenu.png'></img></button>
            </div>
            <div className="search">
                <FontAwesomeIcon icon={faSearch} className="search_icon" />
                <input type="text" placeholder="Search Employee" /></div>
            <div className='info'>
                <img src={bell} alt='bell' ></img>
                <img src={group} alt='bell'></img>
                    <div className="user_dropdown">
                        <img src={face} alt="User Avatar" className="user_avatar" />
                        <select className="user_select">
                        <option>Admirra John</option>
                        </select>
                    </div>
            </div>

    </div>
  )
}

export default Head