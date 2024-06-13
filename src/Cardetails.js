import React from 'react'

export default function Cardetails(props) {
  return (
    <div>
        {props.carDetails.map((car)=>(
            <div>
                <p>{car.name}</p>
                <p>{car.price}</p>
                <p>{car.description}</p>
            </div>
            ))    
        }
    </div>
  )
}
