import React,{useState} from 'react';
import '../../style/emptab.css';
import { emp_details } from '../../utils/employe_details';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../../style/search.css';
import { useNavigate } from "react-router-dom";

const EmployeeTable = () => {
    const navigate = useNavigate();
    
    const css = {
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "18px",
        letterSpacing: "0px",
    };
    const [Search,setSearch]=useState("")
    const [SearchData,setSearchData]=useState(emp_details)
    return (
        <div className="EmployeeTable">
            {/* Header Section */}
            <div className="tb_head">
                <h2>Employee</h2>
                <div className="btn">
                    <button className="plusbtn">
                        <span className="plus-sign">+</span>
                        <span className="text">Import Excel</span>
                    </button>
                    <button className="plusbtn" onClick={() => navigate("/Body/employee/addemp")}>
                        <span className="plus-sign">+</span>
                        <span className="text">Add Employee</span>
                    </button>
                </div>
            </div>

            {/* Table Wrapper */}
            <div className="table-container">
                <div className="table-search">
                    <h4>Employee</h4>
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} className="search_icon" />
                        <input type="text" placeholder="Type here..." value={Search} onChange={(e)=>setSearch(e.target.value)} 
                        onKeyUp={()=>{
                          let searchdata=emp_details.filter((e)=>e.name.toLowerCase().includes(Search.toLowerCase()) )
                  
          
                          setSearchData(searchdata)
                        }}/>
                    </div>
                </div>

                <table className="styled-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th><select><option>Name</option></select></th>
                            <th><select><option>Join Date</option></select></th>
                            <th><select><option>Designation</option></select></th>
                            <th><select><option>Status</option></select></th>
                            <th><select><option>Options</option></select></th>
                        </tr>
                    </thead>
                    <tbody>
                        {SearchData.map((e, index) => (
                            <tr key={index}>
                                <td><input type='radio' name="employee" /> {e.siNo}</td>
                                <td><span style={css}>{e.name}</span> <br /><span style={{color:"#2F2F2F66"}}>{e.name + "123@gmail.com"}</span></td>
                                <td style={{color:"#2F2F2F66"}}>{e.joinDate}</td>
                                <td style={{color:"#2F2F2F66"}}>{e.designation}</td>
                                <td style={{color:"#2F2F2F66"}}>{e.status}</td>
                                <td style={{color:"#2F2F2F66"}}>...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;
