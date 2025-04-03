import React from 'react'
import '../../style/Employee.css'
import user_plus from '../../icons/user_plus_icon 1.png'
import building from '../../icons/building_business_company_address_office_icon 1.png'
import { useNavigate } from "react-router-dom";
const Employees = () => {
    const navigate = useNavigate();
  return (
    <div className='employee'>
        <h2>Employee</h2>
        <div className='emp_body'>
        <button>
            <img src={user_plus} alt='user_plus_icon 1.png' onClick={() => navigate("emptable")}></img>
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