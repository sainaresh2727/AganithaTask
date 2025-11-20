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
        let UrlDatas=await Axios.post('https://aganithatask-backend.onrender.com/api/UrlDatas',{LongUrl,ShortCode}) 
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
    let Url=await Axios.get('https://aganithatask-backend.onrender.com/api/GetUrlData')
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
     let Delete=await Axios.delete(`https://aganithatask-backend.onrender.com/api/DeleteUrl/${code}`)
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
