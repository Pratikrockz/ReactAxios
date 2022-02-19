import React,{useState,useEffect} from 'react';
import axios from 'axios';


function Person() {
  const [post,setpost]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
          console.log(res)
          setpost(res.data)
        },[])
        .catch(err=>{
          console.log('error occured')
        })
  })
  return (
    <div>
       
      <ul>
        {
          post.map(post =>(<li key={post.id}>{post.email}</li>))
        }

      </ul>
     
      
    </div>
  )
}

export default Person
