import React from 'react'
import SideBar from '../dashboard/SideBar'
import Head from '../dashboard/Head'
import '../../style/dashboard.css'
import { Outlet } from "react-router-dom";


const css={display:"flex",
  maxWidth:"1140px",
}
const css2={
  marginTop:"20px"
}
const Body = () => {
  return (<div className='body' style={css}>
    <SideBar />
    <div style={{marginLeft:"-20px"}}><Head /></div>
    <div style={css2}><Outlet /></div>
    </div>
  )
}

export default Body