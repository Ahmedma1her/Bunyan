import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ dirtySections }) {
  const links = [
    { icon: "fa-chart-line", title: "status", path: "/" },
    { icon: "fa-users", title: "Users management", path: "/Users", sectionKey: "users" },
    { icon: "fa-building", title: "Projects management", path: "/Projects", sectionKey: "projects" },
    { icon: "fa-building", title: "Developers management", path:"/Developers", sectionKey: "developers" },
    { icon: "fa-globe", title: "CMS",path:"/CMS" },
    { icon: "fa-message", title: "Live Chat",path:"/Chat" },
  ];


  return (
    <>
      <aside className={`${styles.sidebar} min-vh-100 py-4`}>
        <div className="fw-semibold fs-4 px-3 mb-2">dashboard </div>
        <nav>
          {links.map((item, index) => (
            <NavLink
              to={item.path}
              className={`${styles.navItem} d-flex align-items-center gap-3 text-decoration-none`}
              key={index}
            >
              <i className={`fa-solid ${item.icon} fs-5 `}></i>

              <span className="fs-5">
                {item.title}
                {item.sectionKey && dirtySections[item.sectionKey] && (
                  <span className={`${styles.type} ms-2`} aria-label="Typing in progress">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                )}
              </span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
