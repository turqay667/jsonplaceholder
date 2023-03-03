import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
const Albums=()=>{
    const [albums,setAlbums]=useState([])
    const {id}=useParams()
    console.log(useParams())
  useEffect(()=>{

  fetchData();
},[])

const fetchData=async()=>{
await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
.then(response => response.json())
.then(albums => setAlbums(albums))
}

return(
    <div className='container mt-4 mb-4'>
    <h4 className='text-center'>Albums List</h4>
     {albums.map((album)=>(
        <>
       <Album id={album.id} key={album.id} title={album.title} />
   
       </>
     ))
     
     }
     </div>
)

}
export default Albums;
const Album=({id,userId,title})=>{
    return(
<div>

<table className='table table-bordered'>
    <thead>
            <tr>
                <th>ID</th>
                <th className="text-end">Title</th>
            </tr>
            </thead>
            <tbody>
<tr>
<td>{id}</td>
<td className="text-end">{title}</td>
</tr>
            </tbody>
    </table>
</div>
    
    )
}
