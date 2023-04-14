import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import "./style.scss";


function Header(props) {

  let history = useNavigate();
  return (
    <div className="page-body ">
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container-fluid">
            <a className="navbar-brand js-scroll-trigger" href="/dashboard">
              <img src="/images/Let's.png" width="250px" height="100px" alt="todo" border="0" />

            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <button class="btn text-light" href="/dashboard">
                    Home <span class="sr-only">(current)</span>
                  </button>
                </li>
                <li class="nav-item">
                  <button class="btn text-light"
                    onClick={() => {
                      history.push("/")
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <div className="area"></div>
        <nav className="main-menu fixed-top">
          <ul>
            <hr></hr>
            <li>
              <Link to="/dashboard">
                <i className="fa fa-th fa-2x"></i>
                <span className="nav-text">Dashboard</span>
                <i className="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new3" className="collapsed">
                <a href="javascript:void(0)">  <i className="fa fa-car fa-2x"></i> <span className="nav-text">equipment</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
              </li>
              <ul class="sub-menu collapse" id="new3">
                <li class="has-subnav ">
                  <Link to="/allocating/viewallocating">
                    <i class="fa"></i>
                    <span className="nav-text">allocating List</span>

                    <i class="fa fa-angle-right fa-3x"></i>
                  </Link>
                </li>
                <li className="has-subnav">
                  <Link to="/allocating/Addallocating">
                    <i className="fa  fa-2x"></i>
                    <span class="nav-text">Add Vehicle</span>
                    <i className="fa fa-angle-right fa-2x"></i>
                  </Link>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li>
              <Link to="/makeInquiry">
                <i className="fa fa-question-circle-o fa-2x"></i>
                <span className="nav-text">Make an Inquiry</span>
                <i className="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <hr></hr>
          </ul>
        </nav>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        {props.children}
      </div>
    </div >
  );
}

export default Header;
