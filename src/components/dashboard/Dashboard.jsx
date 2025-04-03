import React from 'react'
import '../../style/dashboard.css'
import past_month from '../../icons/Frame 52.png'

const Dashboard = () => {
return (
    <div className='DB'>
        

        <div className='db_body'>
            <h1>DashBoard</h1>
            <div className='boxes'>
                <div className='Tbox'>
                    <div >
                        <h3>Leave Request</h3>
                        <h1>24</h1>
                    </div>
                    <div className='div2'>
                        <h3>Attendance</h3>
                        <h1>10</h1>
                    </div>
                    <div className='div3'>
                        <h3>Total Employees</h3>
                        <h1>24</h1>
                    </div>
                </div>
                <div className='box2'>
                    <div className='box21'>
                        <div className='payRoll'>
                        <h3>
                            Pay Roll
                        </h3>
                        <h1>216</h1>

                        <span>
                            120 men<br></br>
                            96 women
                        </span>
                        </div>
                        <div className='pastmon'>
                            <img src={past_month} alt='past_month' style={{marginLeft:"40px"}}></img>
                        </div>
                    </div>
                    <div className='box21'>
                        <div className='payRoll'>
                        <h3>
                        Task Request
                        </h3>
                        <h1>16</h1>

                        <span>
                            6 men<br></br>
                            10 women
                        </span>
                        </div>
                        <div className='pastmon'>
                            <img src={past_month} alt='past_month'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='announcement'>
                <div className='announce_title'>
                    <h1>Announcement</h1>
                    <select><option>Today, 13 Sep 2021</option></select>
                </div>
                <div className='announces'>
                    <div className='announce'>
                        <div><h3>Outing schedule for every departement</h3>
                        <p>5 Minutes ago</p></div>
                        <button>...</button>
                    </div>
                    <div className='announce'>
                        <div><h3>Meeting HR Department</h3>
                        <p>Yesterday, 12:30 PM</p></div>
                        <button>...</button>
                    </div>
                    <div className='announce'>
                        <div><h3>IT Department need two more talents for UX/UI Designer position</h3>
                        <p>Yesterday, 09:15 AM</p></div>
                        <button>...</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
)
}

export default Dashboard