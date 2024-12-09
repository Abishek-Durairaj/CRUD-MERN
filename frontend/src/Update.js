import React,{useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

function Update(){

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
      .then(result=>{console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)      
})
      .catch(err=>console.log(err))
},[])

const update = (e) =>{
    e.preventDefault()
  axios.put('http://localhost:3001/update/'+id,{name,email,age})
  .then(result=>{
    console.log(result)
    navigate('/')
  })
  .catch(err=>console.log(err))
 
}
    return(
        <div>
            Update comp

            <form onSubmit={update}>
                <label>name</label>
                <input type="text" name="name"value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Email</label>
                <input type="email" name="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>name</label>
                <input type="text" name="age"value={age} onChange={(e)=>setAge(e.target.value)}/>
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update