import { useState, useEffect } from "react";
import BlogList from "./bloglist";




const Home = () => {  
const[blogs,setBlogs]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

const [name, setName]=useState('mario');

const handleDelete =(id)=>{
    const newBlogs = blogs.filter(blog=>blog.id != id);
    setBlogs(newBlogs);
}

// Kosongkan bagian Square untuk membuat useefect hanya beraksi satu kali

useEffect(()=>{
    console.log('use effect run');
},['mario']);


return ( 
<div className="home">
<BlogList blogs={blogs} title="Semua Artikel" handleDelete={handleDelete}/>
<button onClick={()=>setName('Luigi')}> change name</button>
<p>{name}</p>
</div>
     );
}
 
export default Home;