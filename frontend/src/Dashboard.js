import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";


function Dashboard(){

    const [users,setUsers] = useState([{
        name : "abishek",
        email :"abiccr32@gmail.com",
        age: 23
    }])
    

useEffect(()=>{
    axios.get("http://localhost:3001").then(res=> 
    
    setUsers(res.data)).
    catch(err=>console.log(err))
    
},[])

const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUser/"+id).then(res=>{ 
    console.log(res)
    window.location.reload()
})
    .catch(err=>console.log(err))
}
    return(
        <div>
            users comp
            <br/>
            <Link to="/create">ADD +</Link>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>age</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user) =>{
                       return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/update/${user._id}`}>Update</Link>
                                <button onClick={(e)=>handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })

                }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard












