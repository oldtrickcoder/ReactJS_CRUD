import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from '../Functional/usefetch'
const BlogDetails = () => {
const{id}=useParams();
const history=useHistory()

useEffect(()=>{
console.log(history);
},[])

// console.log({id});
const {data:blog, error, isPending}=useFetch('http://localhost:8000/blogs/'+id)
const handleClick=()=>{
fetch('http://localhost:8000/blogs/'+ blog.id,{
    method:'DELETE'
}).then(()=>{
history.push('/');
})
}

    return (  
        <div className="blog-details">
{isPending && <div>Loading...</div>}
{error && <div>{error}</div>}
{blog && (
    <article>
    <h2>{blog.title}</h2>
    <p>Written by {blog.author}</p>
    <div>{blog.body}</div>
    <button onClick={handleClick}>delete</button>
    </article>
)}
        </div>
    );
}
 
export default BlogDetails
