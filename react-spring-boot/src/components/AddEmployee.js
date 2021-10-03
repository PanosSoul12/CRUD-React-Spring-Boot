import React, {useState,useEffect} from 'react'
import employeeService from '../services/employee.service';
import {useHistory, useParams} from 'react-router'
import { Link } from 'react-router-dom';

function AddEmployee() {
    const [name , setName] = useState('');
    const [location , setLocation] = useState('')
    const [department , setDepartment] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {name , location , department ,id};
       if(id){
        //update the records
        employeeService.update(employee)
        .then(response => {
            console.log('Employee data updated succesfully', response.data);
            history.push('/')
        })
        .catch(error =>{
            console.log('Something went wrong' ,error)
        })
       }
       else{
           // create new record

           employeeService.create(employee)
           .then(response => {
               console.log('Employee data added succesfully' , response.data);
               history.push("/");
           })
           .catch(error =>{
               console.log('Something went wrong', error); 
           })
       }
    }

    useEffect(() => {
        if(id){
            employeeService.get(id)
            .then(employee => {
               setName(employee.data.name);  
               setLocation(employee.data.location);
               setDepartment(employee.data.department);
            })
            .catch(error => {
                console.log('Something went wrong',error);
            });
        }
        
    }, [])

    return (
        <div className="container">
            <h3>Add New Employee</h3>
            <hr/>
                <form>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) =>setName(e.target.value)}
                        placeholder="Enter Name"
                        />
                        </div>
                        <div className="form-group">
                        <input type="text" 
                        className="form-control col-4"
                        id="department"
                        value={department}
                        onChange={(e) =>setDepartment(e.target.value)}
                        placeholder="Enter Department"
                        />
                         </div>
                         <div className="form-group">
                        <input type="text" 
                        className="form-control col-4"
                        id="location"
                        value={location}
                        onChange={(e) =>setLocation(e.target.value)}
                        placeholder="Enter Location"
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                    </div>
                </form>
                <hr/>
                <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddEmployee
