import React from 'react'
import '../../style/Employee.css'
import building from '../../icons/building_business_company_address_office_icon 1.png'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const Employees = () => {
    const navigate = useNavigate();
  return (
    <div className='employee'>
        <h2>Employee</h2>
        <div className='emp_body'>
        <button onClick={() => navigate("emptable")}>
        <FontAwesomeIcon icon={faUserPlus} style={{ color: "rgb(164, 164, 182)", fontSize: "40px" }} />
            <h5>Employee</h5>
        </button>
        <button>
            <img src={building} alt='user_plus_icon 1.png'></img>
            <h5>Org Config</h5>
        </button>
        </div>
    </div>
  )
}
export default Employees