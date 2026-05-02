import React from 'react'
import styles from './Sidebar.module.css'
export default function Sidebar() {
  const links = [{icon:"fa-chart-line", title:"status"},
  {icon:"fa-users", title:"Users management"},
  {icon:"fa-building", title:"Projects management"},
  {icon:"fa-building", title:"Developers management"},
  {icon:"fa-globe", title:"CMS"},
  {icon:"fa-message", title:"Live Chat"},

  ];
  
  
  
  return (
    <>

  <aside className={`${styles.sidebar} min-vh-100 py-4`}>
 <div className="dashboard">dashboard</div>
 <nav>
{links.map((item,index)=>(  <div className="navItem" key={index}>
    <i className={"fa-solid ${item.icon}"}></i>

    <span className="title">{item.title}</span>
  </div>))}
 </nav>
  </aside>
    

    
    </>
  )
}
