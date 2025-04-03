import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/login_page/Login";
import Body from "./components/Body/Body";
import FullDB from "./components/dashboard/FullDB";
import Employees from "./components/employee/Employees";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from "./components/employee/EmployeeTable";
import AddEmployee from "./components/employee/AddEmployee";
import LeaveRequest from "./components/Attendance/LeaveRequest";
import BtnAttendances from "./components/Attendance/BtnAttendance";
import AttendanceTable from "./components/Attendance/AttendanceTable";



// Employee Wrapper Component (for Nested Routes)
const Employee = () => {

  return (
    <div className="App">
      
      <Outlet /> {/* This will render Employees or EmployeeTable */}
    </div>
  );
};
const Attendance =()=>{
  return(
    <div className="App">
      
      <Outlet /> {/* This will render Employees or EmployeeTable */}
    </div>
  )
}

// Define Routes
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Login />,
  },
  {
    path: "/Body", 
    element: <Body />, 
    children: [
      { index: true, element: <FullDB /> }, // Default page when /Body is visited
      { path: "DB", element: <FullDB /> }, 
      { 
        path: "employee", 
        element: <Employee />,  // Parent component for Employee routes
        children: [
          { index: true, element:<Employees />  }, // Default when /Body/employee is visited
          { path: "emptable", element: <EmployeeTable /> }, // /Body/employee/emptable
          { path: "addemp", element: <AddEmployee /> }
        ],
      },
      {
        path: "attendance", 
        element: <Attendance />,  // Parent component for Employee routes
        children: [
          { index: true, element:<BtnAttendances />  }, 
          { path: "leaverequest", element: <LeaveRequest /> },
          { path: "attendancetable", element: <AttendanceTable /> },
        ]
      } 
    ],
  },
]);

const App = () => {
  return(<div className="App"> <RouterProvider router={router} /></div>);
};

export default App;
