import { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import { useParams, useNavigate, Link } from 'react-router-dom';

function EmployeeForm() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({ name: '', position: '', salary: '' })
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchEmployee = async () => {
                const response = await getEmployee(id);
                setEmployee(response.data)
            }
            fetchEmployee();
        }
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateEmployee(employee)
        } else {
            await createEmployee(employee)
        }
        navigate('/');
    }

    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                {id ? 'Edit Employee' : 'Create Employee'}
            </h1>
            <form onSubmit={handleSumbit} className="col-md-4 ps-5">
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "bold" }}>Name:</label>
                    <input type="text" name="name" value={employee.name} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "bold" }}>Position:</label>
                    <input type="text" name="position" value={employee.position} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "bold" }}>Salary:</label>
                    <input type="text" name="salary" value={employee.salary} onChange={handleChange} className="form-control" />
                </div>
                <span className="pe-2">
                    <button type="submit" className="btn btn-primary pe-2">{id ? 'Update' : 'Create'}</button>
                </span>
                <Link to="/" className="btn btn-primary">Back To List</Link>
            </form>
        </div>
    );
}

export default EmployeeForm;