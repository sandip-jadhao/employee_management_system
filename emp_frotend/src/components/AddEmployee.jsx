import React from 'react';
import { useState } from 'react';
import { addEmployee } from '../services/EmployeeService';

function AddEmployee({onBack}) {

    const [employee, setEmployee] = useState({
        firstname: '',
        lastname:'',
        email: '',
        department: '',
        salary:''
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addEmployee(employee).then(()=>{
            alert("Employee added successfully");
            onBack();
        });
    };

    return (
        <div className='container mt-4'>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstname" placeholder="First Name" value={employee.firstname} onChange={handleChange} className="form-control mb-2" required />
                <input type="text" name="lastname" placeholder="Last Name" value={employee.lastname} onChange={handleChange} className="form-control mb-2" required />
                <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} className="form-control mb-2" required />
                <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} className="form-control mb-2" required />
                <input type="number" name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} className="form-control mb-2" required />
                <button type="submit" className="btn btn-primary">Add Employee</button>
                <button type="button" onClick={onBack} className="btn btn-secondary ml-2">Back</button>
            </form>
        </div>
    );
}

export default AddEmployee;