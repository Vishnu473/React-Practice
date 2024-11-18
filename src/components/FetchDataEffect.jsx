import React, { useState,useEffect } from 'react'

const FetchDataEffect = () => {

    const [posts,setPosts] = useState([])

    useEffect(() => {
      const fetchPosts = async () => {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response1.json();
        setPosts(data);//If response is an array
// ------------------------------
        // const response = await fetch('https://dummyjson.com/posts');
        // const data = await response.json();
        // setPosts(data.posts);//If response is an object
      };
      fetchPosts();
    }, [])
    

  return (
    <div>
        <h1>FetchDataEffect</h1>
        {posts.map((post)=>{
            return <div key={post.id}>
                <h5>{post.id}. {post.title}</h5>
                <p>{post.body}</p>
                </div>
        })}
    </div>
  )
}

export default FetchDataEffect