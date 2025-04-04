import React, { useState } from 'react';
import '../../style/Login.css';
import Logo from '../../Assets/Logo.png';
import Component_1 from '../../Assets/Component 1.svg';
import briefcase from '../../icons/briefcase.png';
import lock from '../../icons/lock.png';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 
  const handleLogin = (e) => {
    e.preventDefault(); 

   
    const validCompanyId = "12345";
    const validPassword = "password";

    if (companyId === validCompanyId && password === validPassword) {
      navigate("/Body"); 
    } else {
      setError("Invalid Company ID or Password");
    }
  };

  return (
    <div className='Login_page'>
      <div className='Login'>
        <div className='logo_img'>
          <img src={Logo} alt='logo_img' />
        </div>
        <div className='login_form'>
          <h1 className='signinto'>Sign into</h1>
          <h2>Your Account</h2>
          <form onSubmit={handleLogin}>
            <table>
              <tr>
                <td>
                  <div className="input_group">
                    <img src={briefcase} alt="icon" className="input_icon" />
                    <input 
                      type="text" 
                      placeholder="Company ID" 
                      value={companyId} 
                      onChange={(e) => setCompanyId(e.target.value)} 
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="input_group">
                    <img src={lock} alt="icon" className="input_icon" />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='checkbox'>
                    <input type="checkbox" id="rememberMe" style={{marginRight:"10px"}}/>
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                </td>
              </tr>
              {error && <tr><td><p style={{ color: 'red' }}>{error}</p></td></tr>}
              <tr>
                <td>
                  <button className='log_sign_btn' type="submit">Sign in</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
      <div className='login_img'>
        <img src={Component_1} alt='login_img' style={{marginTop:"-40px"}}/>
      </div>
    </div>
  );
};

export default Login;
