import React from 'react'
import '../../style/Login.css'
import Logo from '../../Assets/Logo.png'
import Component_1 from '../../Assets/Component 1.svg'
import briefcase from '../../icons/briefcase.png'
import lock from '../../icons/lock.png'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='Login_page'>
        <div className='Login'>
            <div className='logo_img'>
                <img src={Logo} alt='logo_img'></img>
            </div>
            <div className='login_form'>
              <h1>Sign into</h1>
              <h2>Your Account</h2>
              <form>
                <table>
                  <tr >
                    <td><div className="input_group">
                        <img src={briefcase} alt="icon" className="input_icon" />
                            <input type="text" placeholder="Company ID" /></div></td>
                  </tr>
                  <tr  >
                    <td><div className="input_group">
                        <img src={lock} alt="icon" className="input_icon" />
                            <input type="text" placeholder="Password" /></div></td>
                  </tr>
                  <tr >
                    <div className='checkbox'>
                  <input type="checkbox" id="rememberMe" />
                   <label htmlFor="rememberMe">Remember me</label>
                   </div>
                  </tr>
                  <tr>
                    <td><button className='log_sign_btn' onClick={() => navigate("/Body")}>Sign in</button></td>
                  </tr>
                </table>
              </form>
            </div>
        </div>
        <div className='login_img'>
            <img src={Component_1} alt='login_img'></img>
        </div>
    </div>
  )
}

export default Login