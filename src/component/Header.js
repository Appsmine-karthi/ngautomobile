import React,{useState,useEffect} from 'react'

import {Link} from 'react-router-dom'

function Header({check})
{
   
    return(
        <div>          
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-inverse navbar-Top main-menu">              
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>                        
                                    </button>                 
                                </div>                            
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav">                               
                                        <li><Link to="/">{check.Home}</Link></li>
                                        <li><Link to="/About">{check.About}</Link></li>
                                        <li><Link to="/Innovation">{check.Innovation}</Link></li>
                                        <li><Link to="/SocialImpact">{check.Social}</Link></li>
                                        <li><Link to="/MileStone">{check.MileStone}</Link></li>  
                                        <li><Link to="/Business">{check.Business}</Link></li>         
                                        <li><Link to="/Advance-Technology">{check.AdvanceTechnology}</Link></li>        
                                        <li><Link to="/Contact">{check.Contact}</Link></li>                              
                                    </ul>
                                </div>               
                            </nav>
                        </div>
                    </div>
                </div>               
               
        </div>
    )
}
export default Header