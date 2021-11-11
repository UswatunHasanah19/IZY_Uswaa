import React from "react";
import logo from "../assets/logo.png"
import cornerscard from "../assets/cornerscard.jpg"
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  
    const navigate = useNavigate();
    return(
            <div className="Navbar">
                <div className="NavbarLogo" >
                <img src={logo} className="Navbar-logo" alt="logo" /><br />
                    <div class="col-md-12 col-12">
                        <img src={cornerscard} className="Navbar-cornerscard" alt="cornerscard" />
                    </div>
                </div>

                <div class="container">
                    <div >
                        <button 
                        class="btn btn-action"
                        onClick ={() => {navigate ('/term')}}
                        >
                            Term & Condition
                        </button>

                        <button 
                        class="btn btn btn-action" 
                        onClick ={() => {navigate ('/privacy')}}
                        >
                            Privacy Policy
                        </button>

                        <button 
                        class="btn btn btn-action" 
                        onClick ={() => {navigate ('/faq')}}
                        >
                            FAQ
                        </button>
                    </div>
                </div>
                <hr />
            </div>
    )
}