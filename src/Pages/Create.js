import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('mario');
    const[isPending,setIsPending]=useState(false);
    const LamanSebelumnya=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog={title, body, author}
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify( blog )
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
           // LamanSebelumnya.go(-1)
           LamanSebelumnya.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label > Blog Title:</label>
                <input 
                type="text"
                 value={title}
                  required
                  onChange={(e)=>setTitle(e.target.value)}           
                  />
                <label >Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label >Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                <option value="Mario">mario</option>
                <option value="Yoshi">Yoshi</option>
                <option value="Luigi">Luigi</option>
                </select>
               {!isPending &&  <button>Add Blog</button>} 
               {isPending &&  <button disabled>Adding Blog ...</button>} 
              
    
            </form>
        </div>
      );
}
 
export default Create;


