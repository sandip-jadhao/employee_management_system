import React,{useEffect,useState} from "react";
import {getEmployee,deleteEmployee} from "../services/EmployeeService";
import AddEmployee from "./AddEmployee";
import "../styles/EmployeeList.css";

function EmployeeList({onLogout}) {

    const [employees,setEmployees] = useState([]);
    const [showAdd,setShowAdd] = useState(false);
    const loadEmployee = () =>{
        getEmployee().then((res)=>{
            setEmployees(res.data);
        });
    };
    useEffect(()=>{
        loadEmployee();
    },[]);
    if(showAdd){
        return (<AddEmployee 
                    onBack={()=>{
                     setShowAdd(false);
                        loadEmployee();
                    }}
                />
            );
    }
    const handleDelete = (id)=>{
        deleteEmployee(id).then(()=>{
            loadEmployee();
        });
    };
    
    return(
        <div>
            <h2>Employee Management System</h2>
            <button onClick={onLogout}>Logout</button>
            <button className="btn btn-primary me-2" onClick={() => setShowAdd(true)}>Add New Employee</button>
        <h2>Employee List</h2>
            <table border="2">
               <thead>
                    <tr>
                        <th>SR NO</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                        <th>ACTIONS</th>
                    </tr>
               </thead>
               <tbody>
                   {employees.map((emp,index )=> (
                       <tr key={emp.id}>
                            <td>{index +1}</td>
                            <td>{emp.firstname} {emp.lastname}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={()=>handleDelete(emp.id)}>Delete</button>
                                <button>Update</button>
                            </td>
                       </tr>
                   ))}
               </tbody>

             </table>
        </div>
    );
}

export default EmployeeList;
