import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'

export let My_Context=createContext()
function Context({children}) {

  //FOR URL AND RANDOM CODE
  let [LongUrl,setLongUrl]=useState("")
  let [ShortCode,setShortCode]=useState("")
  let [Error,setError]=useState("")
  
  async function UrlDatas(e) {
    e.preventDefault()
    try{
<<<<<<< HEAD
<<<<<<< HEAD
        let UrlDatas=await Axios.post('https://aganithatask-backend.onrender.com/api/UrlDatas',{LongUrl,ShortCode}) 
=======
        let UrlDatas=await Axios.post('https://aganitha-task-backend.vercel.app/api/UrlDatas',{LongUrl,ShortCode}) 
>>>>>>> 0a7f5b82465f1a461c8a027b51da21fbf58f7a5f
=======
        let UrlDatas=await Axios.post('https://aganithatask-backend.onrender.com/api/UrlDatas',{LongUrl,ShortCode}) 
>>>>>>> 49d2bd5445747ab21f53c879efd4b7ac621b8b4d
        alert(UrlDatas.data.message)
        setLongUrl("")
        setShortCode("")
        GetUrlDatas()
    }
    catch(err){
        console.log(err.response?.data?.message||err.message);
        setError(err.response?.data?.message||err.message)
        
    }
  }

  let [LongUrlData,setLongUrlData]=useState([])
  async function GetUrlDatas() {
   try{
<<<<<<< HEAD
<<<<<<< HEAD
    let Url=await Axios.get('https://aganithatask-backend.onrender.com/api/GetUrlData')
=======
    let Url=await Axios.get('https://aganitha-task-backend.vercel.app/api/GetUrlData')
>>>>>>> 0a7f5b82465f1a461c8a027b51da21fbf58f7a5f
=======
    let Url=await Axios.get('https://aganithatask-backend.onrender.com/api/GetUrlData')
>>>>>>> 49d2bd5445747ab21f53c879efd4b7ac621b8b4d
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
<<<<<<< HEAD
     let Delete=await Axios.delete(`https://aganithatask-backend.onrender.com/api/DeleteUrl/${code}`)
=======
     let Delete=await Axios.delete(`https://aganitha-task-backend.vercel.app/api/DeleteUrl/${code}`)
>>>>>>> 0a7f5b82465f1a461c8a027b51da21fbf58f7a5f
=======
     let Delete=await Axios.delete(`https://aganithatask-backend.onrender.com/api/DeleteUrl/${code}`)
>>>>>>> 49d2bd5445747ab21f53c879efd4b7ac621b8b4d
     window.location.reload();
     alert(Delete.data.message)
     GetUrlDatas()
  }

  return (
    <>
    <My_Context.Provider value={{LongUrl,setLongUrl,ShortCode,setShortCode,UrlDatas,LongUrlData,DeleteLink,Error}}>
    {children}
    </My_Context.Provider>
    </>
  )
}

export default Context
