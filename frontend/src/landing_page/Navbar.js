import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify"

function Navbar() {
      const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
     await logout();
    navigate("/");
  };
    return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand " to="/">
          <img
            src="media/images/logo.png"
            style={{ width: "5%",paddingBottom:"4px"}}
            alt="Logo"
          />
          <span className="stoxivo-logo-text">STOXIVO</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0" style={{paddingBottom:"4px"}}>

              {/* Conditional Rendering for signup and logout links */}
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link active text-muted" style={{ cursor: "default" }}>
                      Hi, {user}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button 
                      onClick={handleLogout} 
                      className="nav-link active" 
                      style={{ border: "none", background: "transparent", cursor: "pointer" }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
              )}
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </nav>
  );
}

export default Navbar;