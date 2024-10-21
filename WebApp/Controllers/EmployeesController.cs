using Microsoft.AspNetCore.Mvc;
using WebApp.IRepository;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeesController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet]
        public ActionResult<List<Employee>> GetEmployees()
        {
            return _employeeRepository.GetEmployees();
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int id)
        {
            if (id <= 0)
            {
                return BadRequest(new ProblemDetails { Title = "Invalid EmployeeId" });
            }
            return _employeeRepository.GetEmployeeById(id);
        }

        [HttpPost]
        public ActionResult<Employee> CreateEmployee(Employee employee)
        {
            return _employeeRepository.AddEmployee(employee);
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> UpdateEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }
            return _employeeRepository.UpdateEmployee(employee);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            _employeeRepository.DeleteEmployee(id);
            return NoContent();
        }
    }
}
