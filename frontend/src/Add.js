import React,{useState,useEffect} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Add(){
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

    const submit = (e) =>{
        e.preventDefault()
      axios.post('http://localhost:3001/create',{name,email,age})
      .then(result=>{
        console.log(result)
        navigate('/')
        })
      .catch(err=>console.log(err))
    
    }
    return(
        <div>
            Add comp

            <form onSubmit={submit}>
                <label>name</label>
                <input type="text" name="name"value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Email</label>
                <input type="email" name="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>AGE</label>
                <input type="text" name="age"value={age} onChange={(e)=>setAge(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Add