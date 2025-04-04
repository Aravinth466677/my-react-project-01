import React from 'react'
import Dashboard from './Dashboard'
import '../../style/dashboard.css'
import CalendarDaysExample from './Calender';
const css = { display: "flex" }; 
const FullDB = () => {
  return (
    <div style={css} className='fulldb'>
        <div style={{width:"650px"}}><Dashboard /></div>
        <div style={{marginTop:"80px"} } className='fulldb_cal'><CalendarDaysExample /></div>
        
    </div>
  )
}

export default FullDB