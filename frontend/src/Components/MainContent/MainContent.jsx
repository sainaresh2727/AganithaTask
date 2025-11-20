import React, { useContext } from 'react'
import { My_Context } from '../Context/Context'

function MainContent() {
  let {LongUrl,setLongUrl,ShortCode,setShortCode,UrlDatas}=useContext(My_Context)
  return (
    <>
    <section className='container-fluid' id='UrlCF'>
    <div className="container">
    <div className="row">
    
    <div className="col-lg-6 mx-auto">
    <div className="card" id='FormCard'>
    <div className='text-center mt-3'>
    <h5 style={{fontWeight:"bold",fontStyle:"italic"}}>QUICK CREATE</h5>
    </div>
    <div className="card-body">
    
    <form onSubmit={(e)=>UrlDatas(e)} id='UrlDatasForm'>
    <div>
    <label>ENTER THE URL</label>
    <input type="url" placeholder='Enter The Url' className='form-control' onChange={(e)=>setLongUrl(e.target.value)} value={LongUrl} required/>
    </div>
    <div>
    <label>ENTER THE SHORT CODE:</label>
    <input type="text" placeholder='Enter The Code' className='form-control' onChange={(e)=>setShortCode(e.target.value)} value={ShortCode} required />
    </div>
    <div className='mx-auto'>
    <input type="submit" id='Submit1' />
    </div>
    </form>
    
    </div>
    </div>
    </div>

    </div>
    </div>
    </section>
    </>
  )
}

export default MainContent