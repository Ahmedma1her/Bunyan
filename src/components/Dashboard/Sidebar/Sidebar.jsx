import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {useContext} from "react";
import {TmarkContext} from "../../Context/TmarkContext.jsx";
export default function Sidebar() {
  const links = [
    { icon: "fa-chart-line", title: "status", path: "/" },
    { icon: "fa-users", title: "Users management", path: "/Users" },
    { icon: "fa-building", title: "Projects management", path: "/Projects" },
    { icon: "fa-building", title: "Developers management", path:"/Developers" },
    { icon: "fa-globe", title: "CMS",path:"/CMS" },
    { icon: "fa-message", title: "Live Chat",path:"/Chat" },
  ];


   const {number , setnumber}  =  useContext(TmarkContext)


  return (
    <>
      <aside className={`${styles.sidebar} min-vh-100 py-4`}>
        <div className="fw-semibold fs-4 px-3 mb-2">dashboard {number}</div>
        <nav>
          {links.map((item, index) => (
            <NavLink
              to={item.path}
              className={`${styles.navItem} d-flex align-items-center gap-3 text-decoration-none`}
              key={index}
            >
              <i className={`fa-solid ${item.icon} fs-5 `}></i>

              <span className="fs-5">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
