import React,{useState} from 'react'
import Cardetails from './Cardetails'
export default function Car() {
    const[car,setCars]=useState([
        {
            name: "MG",
            price: 2000000000,
            description: "Morris garrages"
        },
        {
            name: "Thar",
            price: 160000000,
            description: "Off roading"
        },
        {
            name: "KIA",
            price: 150000000,
            description: "KIA Motors"
        }])
  return (
    <div>
        <Cardetails carDetails ={car}/>           
    </div>
  )
}
