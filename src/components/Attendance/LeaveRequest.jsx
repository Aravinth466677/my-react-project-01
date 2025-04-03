import React,{useState} from 'react'
import '../../style/emptab.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../../style/search.css';
import {leaveRequest_details} from '../../utils/leaveRequest_details.js'
const LeaveRequest = () => {

    const [Search,setSearch]=useState("")
    const [SearchData,setSearchData]=useState(leaveRequest_details)
  return (
    <div className="EmployeeTable">
            
            <div className="tb_head">
                <h2>Leave Request</h2>
                
            </div>
            <div className='box'>
                <div className='Threebox'>
                    <div  style={{width:"200px",background:"#FFEFE7"}}>
                        <h3>Leave Request</h3>
                        <h1>04</h1>
                    </div>
                    <div style={{width:"200px",background:"#FDEBF9"}}>
                        <h3>Emergency Leave</h3>
                        <h1>06</h1>
                    </div>
                    <div style={{width:"200px",background:"#E8F0FB"}}>
                        <h3>Total Leave Jan</h3>
                        <h1>10</h1>
                    </div>
                    <div style={{width:"200px",backgroundColor:"#FDEBF9"}}>
                        <h3>Today Leave</h3>
                        <h1>02</h1>
                    </div>
                </div>
            </div>
            <div className="table-container">
                <div className="table-search">
                    <h4>Leave Request</h4>
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} className="search_icon" />
                        <input type="text" placeholder="Type here..." value={Search} onChange={(e)=>setSearch(e.target.value)} 
                        onKeyUp={()=>{
                          let searchdata=leaveRequest_details.filter((e)=>e.name.toLowerCase().includes(Search.toLowerCase()) )
                  
          
                          setSearchData(searchdata)
                        }}/>
                    </div>
                </div>

                <table className="styled-table">
                    <thead>
                        <tr>
                            
                            <th><select><option>Name</option></select></th>
                            <th><select><option>Request Date </option></select></th>
                            <th><select><option>Leave type</option></select></th>
                            <th><select><option>Reason</option></select></th>
                            <th><select><option>No Days</option></select></th>
                            <th><select><option>Status</option></select></th>
                            <th><select><option>Actions</option></select></th>
                        </tr>
                    </thead>
                    <tbody>
                        {SearchData.map((e, index) => (
                            <tr key={index}>
                                <td>{e.name}</td>
                                <td style={{color:"#2F2F2F66"}}>{e.requestDate}</td>
                                <td style={{color:"#2F2F2F66"}}>{e.leaveType}</td>
                                <td style={{color:"#2F2F2F66"}}>{e.reason}</td>
                                <td style={{color:"#2F2F2F66"}}>{e.noDays}</td>
                                <td style={{color:"#2F2F2F66"}}><select><option>Pending</option><option>Approved</option></select></td>
                                <td style={{color:"#2F2F2F66"}}>...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default LeaveRequest