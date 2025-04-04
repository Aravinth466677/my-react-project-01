import React from 'react'
import ic_dashboard from '../../icons/output-onlinepngtools.png'
import Group_7 from '../../icons/Group 7.png'
import Group from '../../icons/Group.png'
import ic_department from '../../icons/ic_department.png'
import Vector from '../../icons/Vector.png'
import { Link } from "react-router-dom";
import share from '../../icons/share.png'
import setting from '../../icons/ic_settings.png'
import support from '../../icons/ic_support.png'
import '../../style/sidebar.css'
const SideBar = () => {
  return (
    <div className='sidebar'style={{marginLeft:"0"}}>
        {/* <h1>WeHR</h1> */}
        <ul className='ul'>
            <li><img src={ic_dashboard} alt='ic_dashboard'></img><div><Link to="DB" className="text-decoration-none text-reset">Dashboard</Link></div></li>
            <li><img src={Group_7} alt='ic_dashboard'></img><div><Link to="employee" className="text-decoration-none text-reset">Employee</Link></div></li>
            <li><img src={Vector} alt='ic_dashboard'></img><div><Link to="attendance" className="text-decoration-none text-reset">Attendance</Link></div></li>
            <li><img src={Group} alt='ic_dashboard'></img><div>PayRoll</div></li>
            <li><img src={ic_department} alt='ic_dashboard'></img><div>Task</div></li>
            <li><img src={share} alt='ic_dashboard'></img><div>Announcement</div></li>
        </ul>
        <h3>others</h3>
        <ul>           
        <li><img src={support} alt='ic_dashboard'></img><div>Support</div></li>
        <li><img src={setting} alt='ic_dashboard'></img><div>Settings</div></li>

        </ul>
    </div>
  )
}

export default SideBar