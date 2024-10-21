import EmployeeForm from "./components/EmployeeForm"
import EmployeeView from "./components/EmployeeView";
import EmployeesList from "./components/EmployeesList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EmployeesList />} />
                    <Route path="/create" element={<EmployeeForm />} />
                    <Route path="/edit/:id" element={<EmployeeForm />} />
                    <Route path="/view/:id" element={<EmployeeView />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
