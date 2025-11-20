import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'

export let My_Context=createContext()
function Context({children}) {

  //FOR URL AND RANDOM CODE
  let [LongUrl,setLongUrl]=useState("")
  let [ShortCode,setShortCode]=useState("")
  
  async function UrlDatas(e) {
    e.preventDefault()
    try{
<<<<<<< HEAD
        let UrlDatas=await Axios.post('https://aganithatask-backend.onrender.com/api/UrlDatas',{LongUrl,ShortCode}) 
=======
        let UrlDatas=await Axios.post('https://aganitha-task-backend.vercel.app/api/UrlDatas',{LongUrl,ShortCode}) 
>>>>>>> 0a7f5b82465f1a461c8a027b51da21fbf58f7a5f
        alert(UrlDatas.data.message)
        setLongUrl("")
        setShortCode("")
        GetUrlDatas()
    }
    catch(err){
        console.log(err.response?.data?.message||err.message);
        
    }
  }

  let [LongUrlData,setLongUrlData]=useState([])
  async function GetUrlDatas() {
   try{
<<<<<<< HEAD
    let Url=await Axios.get('https://aganithatask-backend.onrender.com/api/GetUrlData')
=======
    let Url=await Axios.get('https://aganitha-task-backend.vercel.app/api/GetUrlData')
>>>>>>> 0a7f5b82465f1a461c8a027b51da21fbf58f7a5f
    setLongUrlData(Url.data.data)
   }
   catch(err){
    console.log(err.response?.data?.message||err.message);
    
   }
  }

  useEffect(()=>{
    GetUrlDatas()
  },[])


  async function DeleteLink(code) {
     if (!window.confirm("Delete this link?")) return;
<<<<<<< HEAD
     let Delete=await Axios.delete(`https://aganithatask-backend.onrender.com/api/DeleteUrl/${code}`)
=======
     let Delete=await Axios.delete(`https://aganitha-task-backend.vercel.app/api/DeleteUrl/${code}`)
>>>>>>> 0a7f5b82465f1a461c8a027b51da21fbf58f7a5f
     window.location.reload();
     alert(Delete.data.message)
     GetUrlDatas()
  }

  return (
    <>
    <My_Context.Provider value={{LongUrl,setLongUrl,ShortCode,setShortCode,UrlDatas,LongUrlData,DeleteLink}}>
    {children}
    </My_Context.Provider>
    </>
  )
}

export default Context
