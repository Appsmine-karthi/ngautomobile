import React from 'react'
import TopHeader from './TopHeader'
import logo from '../../assets/image/logo.jpg'
import HomeHeader from '../../assets/image/home_header.jpg'
function Header()
{
    return(<div classNameName="page-wrapper">   
    <header className="main-header style-three">
        <TopHeader />
        <div className="header-upper ">
            <div className="auto-container1">
                <div className="clearfix">
                    <div className="col-sm-7">
                        <div className="logo text-left">
                            <a href="#"><img src={logo}/></a>
                        </div>
                    </div>
                    <div className="col-sm-5 hidden-xs">
                        <div className="col-sm-9">
                            <div>
                                <h4 style={{ color: "#000"}}> INCUBATION SUPPORT </h4>
                                <h6 style={{ color: "#C82624" }}> PSG-Science & Technology Entrepreneurial Park (PSG-STEP), Coimbatore</h6>
                                <h6 style={{ color: "#666666" }}>(Supported by Department of Science & Technology, NSTEDB, Government of India)</h6>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="logo">
                                <a href="#"><img src={HomeHeader} alt="" title=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        <div className="header-lower">
            <div className="auto-container1">
                <div className="nav-outer clearfix">                  
                    <nav className="main-menu">
                        <div className="navbar-header">                      
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        </div>
                        <div className="navbar-collapse collapse clearfix">
                            <ul className="navigation clearfix">
                                <li className="current dropdown"><a href="index.html">ホーム</a>                                
                                </li>
                                <li><a href="about.html">会社概要</a>                                 
                                </li>
                                <li><a href="innovation.html">革新</a>                                
                                </li>
                                <li><a href="socialimpact.html">社会的影響</a>                                 
                                </li>
                                <li><a href="milestons.html">マイルストーンの達成</a>                                   
                                </li>
                                <li><a href="business.html">ビジネス</a>                                  
                                </li>
                                <li><a href="contact.html">コンタクト  </a>                                 
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </header>
        </div>
            )
}
export default Header