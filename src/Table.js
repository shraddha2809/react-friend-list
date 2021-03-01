import React from 'react';
import './Center.css'

const Table=(Props)=>{
    const users=Props.data;
    const deleteUser=Props.deleteUser;
    const updateUser=Props.updateUser;
    //  console.log("users",users)
    return(
    <div>
     <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {users.map((item)=>{
          return(
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={()=>updateUser(item)}>Edit</button>
              </td>
              <td>
                <button onClick={()=>deleteUser(item._id)}>Delete</button>
              </td>
           </tr>
          );
      })}
  </tbody>
</table>
        </div>
    );
}

export default Table;
