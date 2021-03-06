
import React ,{ useState ,useEffect } from 'react'
import employeeService from '../services/employee.service';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

function EmployeesList() {

 const [employees ,setEmployees] = useState([]);

    useEffect(() =>{
      employeeService.getAll()
        .then(response =>{
          console.log('printing the employees data ',response.data);
          setEmployees(response.data);
        })
        .catch(error =>{
          console.log('Something went wrong ',error);
        })
    }, [])

    useEffect(() => {
        init();
    }, [])

    const init = () =>{
        employeeService.getAll()
        .then(response =>{
          console.log('printing the employees data ',response.data);
          setEmployees(response.data);
        })
        .catch(error =>{
          console.log('Something went wrong ',error);
        })
    }

    const handleDelete = id => {
        employeeService.remove(id)
        .then(response =>{
            console.log('Employee deleted succesfully ', response.data);
            init()
        }).catch(error => {
            console.log('Something went wrong ' ,error)
        })
    }

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
          <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
    <table className="table table-bordered table-striped">
    <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Department</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {
        employees.map(employee =>{
          return(
          <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.location}</td>
              <td>{employee.department}</td>
              <td>
                <Link className="btn btn-info" to={`employees/edit/${employee.id}`}>Update</Link>
                <button className="btn btn-danger ml-2" onClick={(e) =>{
                    handleDelete(employee.id)
                    }}>Delete</button>
              </td>
          </tr> )
        })
      }
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default EmployeesList;
