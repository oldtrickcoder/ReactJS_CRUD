

// bagian ini merupakan sample yang di simpan pada bagian Home.js menunjukan cara menampilkan loading dan data yang di tautkan pada fungsi set timeout disimpan pada bagian Home.js
import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {  
const[blogs,setBlogs]=useState(null);
const[isPending,setIsPending]=useState(true);



useEffect(()=>{
   setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
    .then(
        res => {
          return  res.json();
        }
    ).then(
        data =>{
            // console.log(data);
            setBlogs(data);
            setIsPending(false);
        }
    )
   },1000);
},[]);


return ( 
<div className="home">
{isPending && <div>Loading....</div>}
{blogs && <BlogList blogs={blogs} title="Semua Artikel" />}
</div>
     );
}
 
export default Home;



