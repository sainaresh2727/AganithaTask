import React, { useContext } from 'react'
import { My_Context } from '../Context/Context'


function Navbar() {
  let {LongUrlData,DeleteLink}=useContext(My_Context)
  return (
    <>
    <section className='container-fluid p-3'>
    <div className="container" id='NavBarContainer'>
    
    <div id='Brand'>
    <h4>BitLey</h4>
    </div>

    <div id='ViewLinks'>
    <button type='button' data-bs-toggle='offcanvas' data-bs-target='#Links'>View Link</button>
    </div>
    
    </div>
    </section>

    {/* OFFCANVAS FOR LINKS */}
    <div className="offcanvas offcanvas-top h-100" id="Links">
   <div className="offcanvas-header" id='OffCanvasHeader'>
   <h3>Bitly</h3>
 
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" id='CloseButton' ></button>
   </div>
   <div className="offcanvas-body">
   <section className='container-fluid'>
   <div className="container">

   <div className='table-responsive'>
   <table className='table align-middle' id='Table'>
   <thead>
   <tr>
   <th style={{whiteSpace:"nowrap"}}>ORIGINAL URL</th>
   <th style={{whiteSpace:"nowrap"}}>SHORT CODE</th>
   <th style={{whiteSpace:"nowrap"}}>SHORT URL</th>
   <th style={{whiteSpace:"nowrap"}}>CLICKS</th>
   <th style={{whiteSpace:"nowrap"}}>LAST CLICKS</th>
   <th style={{whiteSpace:"nowrap"}}>CREATED AT</th>
   <th style={{whiteSpace:"nowrap"}}>DELETE</th>
   </tr>
   </thead>
   <tbody>
   {
   LongUrlData.map((x,y)=>{
    return(
      <>
      <tr key={y}>
      <td>{x.LongUrl}</td>
      <td>{x.ShortCode}</td>
      <td><a href={`https://aganitha-task-backend.vercel.app/${x.ShortCode}`}>{x.ShortCode}</a></td>
      <td>{x.Clicks}</td>
      <td>{x.LastClicked}</td>
      <td>{x.CreatedAt}</td>
      <td><button id='DeleteBtn' onClick={()=>DeleteLink(x.ShortCode)}>Delete</button></td>
      </tr>
      </>
    )
   })
   }
   </tbody>
   <p style={{color:"red",fontStyle:"italic"}}></p>
   </table>
   </div>

   </div>
   </section>  
  </div>
  </div>

    </>
  )
}

export default Navbar
