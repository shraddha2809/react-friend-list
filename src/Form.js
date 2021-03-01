import React, { useEffect, useState } from 'react';
import './Center.css';
import Table from './Table';
import axios from "axios";



const Form=()=>{

    const [users, setUsers]=useState([]);
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        age: Number,
        });
    const [userId,setUserId]=useState("");
    //..
    useEffect(()=>{
        fetchUsers();
    },[]);    
        
   //setting form data
        const changeFormData=(e)=>{
          const name=e.target.name;
        //  console.log("name",formData);
          const value=e.target.value;
          setFormData({...formData,[name]:value})
          
         

        }
       
//    //create user
   const createUser=async()=>{
    //    console.log("shraddha")
      
   
     try{
        const res=await axios.post("http://localhost:8000/addStudent",formData)
    
        console.log("res:",res.data)
    }
     catch(error){
         console.log("error", error.response)
     }
    };
    // createUser("trddtg"); 
    
     //get users
    const fetchUsers=async()=>{
        // console.log("tanmay")
        //network return promise await
        try{
            const res=await axios.get("http://localhost:8000/getStudentFromDb",formData)
           setUsers(res.data);
        }
         catch(error){
             console.log("error", error.response)
         }
    }

    //delete
   const deleteUser=async(_id)=>{
    // console.log("shraddha")
    //  console.log('_id',_id)
     try{
         const res=await axios.delete(`http://localhost:4000/deleteById/${_id}`,formData);
         console.log("response:",res)
         fetchUsers();
       }
     catch(error){
         console.log("error:" ,error.response)
     }
   }

   //update
   const updateUser=(item)=>{
       setFormData({...formData,
         ["name"]:item.name,
          ["email"]:item.email,
          ["age"]:item.age,});
       setUserId(item._id);
       console.log("formData: ",formData)
   };

   //update api
   const updateData=async()=>{
       
       console.log(formData);
       console.log(userId);
       try{
           const res=await axios.put(`http://localhost:8000/update/${userId}`,formData);
           fetchUsers();
       }catch(error){
           console.log("error: ",error.response);
       }
   }
// console.log("jshdjvhdsj")
    return(
        <div style={{padding:"10px"}}>
            <div className="input-div">
                <input 
                 type="text"
                 name="name" 
                 value={formData.name}
                 onChange={changeFormData}
                 placeholder="Name"/>
            </div>

            <div className="input-div">
                <input 
                 type="text"
                 name="email"
                 value={formData.email}
                 onChange={changeFormData}
                 placeholder="Email"/>
            </div>

            <div className="input-div">
                <input 
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={changeFormData}
                  placeholder="Age"/>
            </div>

            <div className="input-div-1">
                 <button onClick={fetchUsers}>GET</button>
                <button onClick={createUser}>POST</button> 
                <button onClick={updateData}>UPDATE</button>
            </div>
            <div style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
                <Table data={users}
                 deleteUser={deleteUser}
                updateUser={updateUser} />
            </div>
        </div>
    )
}
export default Form;


