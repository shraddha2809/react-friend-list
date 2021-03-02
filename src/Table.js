import React from 'react';
import './Center.css';
import {FaUserAlt} from 'react-icons/fa'
import{FaInstagramSquare,FaLinkedinIn,FaFacebook,FaGithub }from 'react-icons/fa'


const Table=(Props)=>{
    const users=Props.data;
    const deleteUser=Props.deleteUser;
    const updateUser=Props.updateUser;
    //  console.log("users",users)
    return(
//     <div className="table">
//      <table class="table">
//   <thead>
//     <tr>
     
//       <th scope="col">Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Age</th>
//       <th scope="col">Edit</th>
//       <th scope="col">Delete</th>
//     </tr>
//   </thead>
//   <tbody>
//       {users.map((item)=>{
//           return(
//             <tr>
//             <td className="user-list-name">{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.age}</td>
//               <td>
//                 <button onClick={()=>updateUser(item)}>Edit</button>
//               </td>
//               <td>
//                 <button onClick={()=>deleteUser(item._id)}>Delete</button>
//               </td>
//            </tr>
//           );
//       })}
//   </tbody> 
//   </table>
//         </div>
//     );
// }


 <div className="card" >
      {users.map((item)=>{
          return(
            <div className="user-form" >
            <ul>
              <div className="user-font"><FaUserAlt /></div>
            <li className="user-list-name">{item.name}</li>
              <li>{item.email}</li>
              <li>{item.age}</li>
              <li className="social-icon"><FaInstagramSquare /><FaLinkedinIn /><FaFacebook /><FaGithub /></li>
              <div className="user-button">
              <li className="li-button">
                <button onClick={()=>updateUser(item)}>Edit</button>
              </li>
              <li className="li-button">
                <button onClick={()=>deleteUser(item._id)}>Delete</button>
              </li>
              </div>
           </ul>
           </div>
          );
      })}
  </div>
    )}
    



export default Table;
