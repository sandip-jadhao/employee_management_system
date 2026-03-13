import React,{useEffect,useState} from "react";
import {getEmployee,deleteEmployee} from "../services/EmployeeService";
import "../styles/EmployeeList.css";

function EmployeeList(){

    const [employees,setEmployees] = useState([]);

    useEffect(()=>{
        loadEmployee();
    },[]);

    const loadEmployee = () =>{
        getEmployee().then((res)=>{
            setEmployees(res.data);
        });
    };

    const handleDelete = (id)=>{
        deleteEmployee(id).then(()=>{
            loadEmployee();
        });
    };

    return(
        <div>
            <h2>Employee List</h2>

            <table border="1">
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
                            <td>{emp.id}</td>
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
