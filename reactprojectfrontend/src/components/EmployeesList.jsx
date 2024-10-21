import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../services/EmployeeService";
import { Link } from 'react-router-dom';

function EmployeesList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await getEmployees()
            setEmployees(response.data)
        }

        fetchEmployees();
    }, [])


    const handleDelete = async (id) => {
        await deleteEmployee(id);
        setEmployees(employees.filter(empId => empId.id !== id));
    }

    return (
        <div >
            <h1 style={{ display: "flex", justifyContent: "center" }}>Employee List</h1>
            <div className="ps-5">
                <Link to="/create" className="btn btn-primary">Create Employee</Link>
            </div>
            <div className="px-5 py-3">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Salary</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.name}</td>
                                    <td>{emp.position}</td>
                                    <td>{emp.salary}</td>
                                    <td className="col-md-4"    >
                                        <span className="pe-2">
                                            <Link to={`/view/${emp.id}`} className="btn btn-info">
                                                View
                                            </Link>
                                        </span>
                                        <span className="pe-2">
                                            <Link to={`/edit/${emp.id}`} className="btn btn-primary">
                                                Edit
                                            </Link>
                                        </span>
                                        <button className="btn btn-danger"
                                            onClick={() => handleDelete(emp.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeesList;