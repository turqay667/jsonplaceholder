

import { useState,useEffect} from "react"
import { useParams } from "react-router-dom";
const Posts=({match})=>{
const [posts,setPosts]=useState([])
const {id}=useParams();
useEffect(()=>{

    fetchData();
  },[])

const fetchData= async()=>await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
.then(response => response.json())
.then(posts => setPosts(posts))

 return(  

<div className="container mt-4">
<div className="content">
<h4 className='text-center'>Posts List</h4>
    {
        posts.map((post)=>(
<Post id={post.id} userId={post.userId } title={post.title} body={post.body}/>
        ))
    }

</div>
</div>
    )
}
export default Posts;

const Post=({id,userId,body,title})=>{
    return(
        <div>
            <p>userId: {userId}</p>
            <p> Title: {title}</p>
<p>Body: {body}</p>

        </div>
    )
}