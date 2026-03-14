import React,{useEffect,useState} from "react";
import {getEmployee,deleteEmployee} from "../services/EmployeeService";
import "../styles/EmployeeList.css";

function EmployeeList({onLogout}) {

    const [employees,setEmployees] = useState([]);

    const loadEmployee = () =>{
        getEmployee().then((res)=>{
            setEmployees(res.data);
        });
    };

    useEffect(()=>{
        loadEmployee();
    },[]);

    const handleDelete = (id)=>{
        deleteEmployee(id).then(()=>{
            loadEmployee();
        });
    };

    return(
        <div>
            <h2>Employee Management System</h2>
            <button onClick={onLogout}>Logout</button>
        <h2>Employee List</h2>
            <table border="2">
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                        <th>ACTIONS</th>
                    </tr>
               </thead>

               <tbody>

                   {employees.map(emp => (
                       <tr key={emp.id}>
                            <td>{emp.index}</td>
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
