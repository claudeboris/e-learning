import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min";
import "admin-lte/plugins/jquery/jquery.min";

type Props = {};

const Masterlayout = (props: Props) => {
  return (
    <div className="wrapper">
     <Navbar />

     <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Accueil</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            
          </div>
        </div>
      </div>

      <aside className="control-sidebar control-sidebar-dark">
        <div className="p-3">
          <h5>Title</h5>
          <p>Sidebar content</p>
        </div>
      </aside>

      <Footer />
    </div>
  );
};

export default Masterlayout;
