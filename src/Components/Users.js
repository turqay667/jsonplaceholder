
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Album from './Albums';
const Users=({history})=>{
    const [users,setUsers]=useState([])

  useEffect(()=>{
  fetchData();
},[])
const fetchData=async()=>{
await fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => setUsers(data))
}

return(
    <div className='container mt-4 mb-4'>
    <h4 className='text-center'>Users List</h4>
     {users.map((user)=>(
        <>
       <User id={user.id} key={user.id} name={user.name} email={user.email}/>
      
       </>
     ))
     
     }
     </div>
)

}
export default Users;
const User=({id,name,email})=>{

    const [open,setOpen]=useState(false)
return(
    <>
    {
        open ?
         <div>           
          <Album/>           
             </div>
             :<div></div>
    }
    <table className='table table-bordered'>
    <thead>
            <tr>
     
                <th>ID</th>
                <th>USERNAME</th>
                <th className='text-center'>EMAIL</th>
                <th className='text-end'>ACTIONS</th>
            </tr>
            </thead>
            <tbody key={id}>
<tr>
<td>{id}</td>
    <td>{name}</td>
    <td className='text-center'>{email}</td>
   <td className='text-end'>
    <div className='actions'>
<Link to={`/posts/${id}`}><button className="btn btn-success">posts</button></Link>
   <Link to={`/users/${id}`}> <button className="btn btn-danger" onClick={()=>setOpen(true)}>albums</button></Link>
   </div>
   </td>
</tr>
            </tbody>
    </table>

    </>
)
}
