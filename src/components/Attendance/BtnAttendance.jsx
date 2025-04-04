import React from 'react'
import '../../style/Employee.css'
import statistics from '../../icons/employee_job_seeker_statistic_unemployee_icon.png'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const BtnAttendances = () => {
    const navigate = useNavigate();
  return (
    <div className='employee'>
    <h2>Attendance</h2>
    <div className='emp_body'>
    <button onClick={() => navigate("/Body/attendance/leaverequest")}>  

    <FontAwesomeIcon icon={faUserPlus} style={{ color: "rgb(164, 164, 182)", fontSize: "40px" }} />
        <h5>Leave Request</h5>
    </button>
    <button onClick={() => navigate("/Body/attendance/attendancetable")}> 

        <img src={statistics} alt='user_plus_icon 1.png' ></img>
        <h5>Attendances</h5>
    </button>
    </div>
</div>
  )
}

export default BtnAttendances