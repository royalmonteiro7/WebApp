import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEmployee } from '../services/EmployeeService';

const EmployeeView = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            const response = await getEmployee(id);
            setEmployee(response.data);
        };
        fetchEmployee();
    }, [id]);

    if (!employee) return <div>Loading...</div>;

    return (
        <div>
            <div>
                <h1 style={{ display: "flex", justifyContent: "center" }}>View Employee</h1>
                <form className="col-md-4 ps-5">
                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: "bold" }}>Name:</label>
                        <input type="text" name="name" value={employee.name} disabled className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: "bold" }}>Position:</label>
                        <input type="text" name="position" value={employee.position} disabled className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: "bold" }}>Salary:</label>
                        <input type="text" name="salary" value={employee.salary} disabled className="form-control" />
                    </div>
                    <span className="pe-2">
                        <Link to={`/edit/${employee.id}`} className="btn btn-primary">
                            Edit
                        </Link>
                    </span>
                    <Link to="/" className="btn btn-primary">Back To List</Link>
                </form>
            </div>
        </div>
    );
};

export default EmployeeView;
