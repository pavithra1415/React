import React,{useState} from 'react'
import './List.css'
export default function List()
{
    const[employees,setEmployees]=useState([
        {
            name: "mouni",
            age: 20,
            id: 203,
            gender: "female"
        },
        {
            name: "pavi",
            age: 22,
            id: 204,
            gender: "female"
        },
        {
            name: "swathi",
            age: 22,
            id: 208,
            gender: "female"
        }])
  return (
    <div className='employee-container'>
        {
            employees.map((emp)=>
              <div className='employee' key={emp.id}>
                  <p>Name:{emp.name}</p>
                  <p>Age:{emp.age}</p>
                  <p>Gender:{emp.gender}</p>
                  <p>ID:{emp.id}</p>
              </div>
            )
        }
    </div>
    )  
}
