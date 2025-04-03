import React from 'react';
import '../../style/Emp.css';
import { emp_details } from '../../utils/employe_details.js';
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const navigate = useNavigate(); // ✅ Correctly define navigate inside the component

    const storeEmployeeData = () => {
        const inputs = document.querySelectorAll('.addEmp_box1 .input input');
        const newEmployee = {
            si_no: inputs[1].value,          // Employee Number
            name: inputs[0].value,           // Employee Name
            joinDate: inputs[2].value,       // Date of Joining
            designation: "",                 // Designation (not in input, set manually if needed)
            status: inputs[5].value,         // Employee Status
            option: "..."
        };

        if (newEmployee.si_no && newEmployee.name && newEmployee.joinDate && newEmployee.status) {
            emp_details.push(newEmployee);
            console.log("Updated Employee List:", emp_details);
            alert("Employee added successfully!");
            inputs.forEach(input => input.value = "");

            navigate("/Body/employee/emptable"); // ✅ Navigate after adding employee
        } else {
            alert("Please fill all required fields.");
        }
    };

    return (
        <div className='addEmp'>
            <h2>Employee</h2>
            <div className='addEmp_box1'>
                <div className='addEmp_box1Head'>
                    <h5>Add details of an employee</h5>
                    <button>-</button>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <label className="important-label">Employee Name</label>
                        <input type="text" placeholder='Enter Employee Name' />
                    </div>
                    <div className='input'>
                        <label className="important-label">Employee Number</label>
                        <input type="number" placeholder='Enter Employee Number' />
                    </div>
                    <div className='input'>
                        <label className="important-label">Date of joining</label>
                        <input type="date" placeholder='Enter joined date' />
                    </div>
                    <div className='input'>
                        <label className="important-label">Email id</label>
                        <input type="email" placeholder='Enter email id' />
                    </div>
                    <div className='input'>
                        <label className="important-label">Mobile Number</label>
                        <input type="number" placeholder='Enter Mobile Number' />
                    </div>
                    <div className='input'>
                        <label className="important-label">Employee status</label>
                        <input type="text" placeholder=' Employee status' />
                    </div>
                </div>
            </div>

            {/* 🔹 Restored addEmp_box2 Section */}
            <div className='addEmp_box2'>
                <div className='addEmp_box1Head'>
                    <h5>Personal Details</h5>
                    <button>+</button>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <label className="important-label">Date of birth</label>
                        <input type="date" placeholder='Enter Employee Name' />
                    </div>
                    <div className='input'>
                        <label className="important-label">Gender</label>
                        <select className="select">
                            <option value="" disabled selected>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='input'>
                        <label className="important-label">Marital status</label>
                        <select className="select">
                            <option value="" disabled selected>Select Marital status</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                        </select>
                    </div>
                    <div className='input'>
                        <label className="important-label">Is Physical Challanged</label>
                        <input type="text" placeholder='Enter details' />
                    </div>
                    <div className='input'>
                        <label className="important-label">Blood Group</label>
                        <select className="select">
                            <option value="" disabled selected>Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <div className='input'>
                        <label className="important-label">Personal Email ID</label>
                        <input type="email" placeholder='Enter Personal Email ID' />
                    </div>
                </div>
            </div>

            <div className='addDepartment'>
                <h5>Department</h5>
                <button>+</button>
            </div>

            <div className='Configuration'>
                <h5>Configuration</h5>
                <button className='cancel_btn'>Cancel</button>
                <button className='save_btn' onClick={storeEmployeeData}>Save</button>
            </div>
        </div>
    );
};

export default AddEmployee;
