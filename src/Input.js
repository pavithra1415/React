import React,{useState} from 'react'

export default function Input() {
    const[username,setusername]=useState('')
    const[mobileno,setmobileno]=useState('')
    function handleUsername(e){
      setusername(e.target.value)
    }
    function handlemobileno(e){
      setmobileno(e.target.value)
    }
    function submit(){
      console.log(username)
    }
  return (
    <div>
      <p>
          <input placeholder='Enter name' onChange={setUsername(e.target.value)}}/>
          <input placeholder='Enter mobileno' onChange={handlemobileno}/>
          <button onClick={submit}>Submit</button>
      </p>
      </div>
  )
}
