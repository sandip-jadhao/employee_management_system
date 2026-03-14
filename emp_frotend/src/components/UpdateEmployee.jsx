import { useState, useEffect } from "react";
import { getEmployeeById,updateEmployee} from "../services/EmployeeService";

function UpdateEmployee({ employeeId, onBack }) {

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    salary: ""
  });

  useEffect(() => {
    getEmployeeById(employeeId).then((res) => {
      setEmployee(res.data);
    });
  }, [employeeId]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(employeeId, employee).then(() => {
      alert("Employee Updated Successfully");
      onBack();
    });
  };

  return (
    <div className="container mt-4">

      <h2>Update Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstName"
          value={employee.firstname}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="text"
          name="lastName"
          value={employee.lastname}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <div class="d-grid gap-2 col-2 mx-auto">
        <button type="submit" className="btn btn-success">
          Update Employee
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onBack}
        >
          Back
        </button>
        </div>
      </form>

    </div>
  );
}

export default UpdateEmployee;
