import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const[data,setData]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(false);


    useEffect(()=>{ 
        const abortCont=new AbortController();
        
        fetch(url,{signal:abortCont.signal}).then(
             res => {
               if(!res.ok){
                   throw Error('Sepertinya ada masalah di server namun pastikan jika internet kamu berjalan dengan baik')
               }
        
               return  res.json();
             }
         ).then(
             data =>{
                //  console.log(data);
                 setData(data);
                 setIsPending(false);
                 setError(false);
             }).catch(err =>{
                 // console.log(err.message);
                 if(err.name==='AbortError'){
                     console.log('fetch aborted');
                 }else{
                    setError(err.message);
                    setIsPending(false);
                 }
               
             })
     return () => abortCont.abort()
     },[url]);
     return{ data, isPending, error }
}

export default useFetch;