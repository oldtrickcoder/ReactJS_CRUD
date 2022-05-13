import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {  
const[blogs,setBlogs]=useState(null);
const[isPending,setIsPending]=useState(true);
const[error,setError]=useState(null);


useEffect(()=>{
   setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
    .then(
        res => {
          if(!res.ok){
              throw Error('Sepertinya ada masalah di server namun pastikan jika internet kamu berjalan dengan baik')
          }
          return  res.json();
        }
    ).then(
        data =>{
            // console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(false);
        }).catch(err =>{
            // console.log(err.message);
            setError(err.message);
            setIsPending(false);
        })
   },1000);
},[]);


return ( 
<div className="home">
{error && <div>{error}</div>}
{isPending && <div>Loading....</div>}
{blogs && <BlogList blogs={blogs} title="Semua Artikel" />}
</div>
     );
}
 
export default Home;



