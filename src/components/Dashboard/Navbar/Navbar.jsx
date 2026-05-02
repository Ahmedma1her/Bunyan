import React from 'react'
import Logo from'../../../assets/axis logo.png'
import Style from './Navbar.module.css'
export default function Navbar({adminName ="Admin"}) {
  return (
    <nav className={`${Style.nav} d-flex justify-content-between align-items-center shadow-sm`}>
      
      
      
      <div className={`${Style.parentImg} d-flex justify-content-between align-items-center`}><img src={Logo} alt="" /></div>


      <div className="adminSection d-flex justify-content-between align-items-center gap-3">
        <div className={Style.notificationSection} >

          <i className="fa-solid fa-bell"></i> <span className={`${Style.countnoti} bg-info text-white rounded-pill `}>3</span></div>


          <div className={` d-flex justify-content-between align-items-center gap-3`} ><span >{adminName}</span>
     <div className={`${Style.avatar}`}> { adminName.slice(0,2).toUpperCase()}</div>
      </div>




      

      </div>


    </nav>
  )
}
