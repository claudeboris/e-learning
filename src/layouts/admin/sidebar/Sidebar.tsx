import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/image01.jpg"

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <Link to="index3.html" className="brand-link">
      <img
        src={image}
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
      />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </Link>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src={image}
            className="img-circle elevation-2"
            alt="UserImage"
          />
        </div>
        <div className="info">
          <Link to="#" className="d-block">
            Alexander Pierce
          </Link>
        </div>
      </div>

      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item ">
            <Link to="#" className="nav-link active">
              <i className="nav-icon fas fa-home"></i>
              <p>
                Accueil
              </p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-users"></i>
              <p>
                Utilisateurs
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  );
};

export default Sidebar;
