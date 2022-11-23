import React from 'react'
import '../asset/css/style.css'
import '../asset/js/script.js'

function Slider()
{
    return(  <div id="minimal-bootstrap-carousel" className="carousel slide carousel-fade slider-home-two" data-ride="carousel">  
    <div className="carousel-inner" role="listbox" style={{height:"400px"}}>
        <div className="item active slide-1 slider-image">
            <div className="carousel-caption">
                <div className="container">
                    <div className="box valign-middle">
                        <div className="content  text-center">
                            <div className="main-banner-content-two">
                                <h1 data-animation="animated fadeInDown">WORLD’S BEST HI-TECH HYDROGEN FUEL POWERED AUTOMOBILE </h1>
                                <h1>(SUBSTITUTE FOR GASOLINE, DIESEL AND COAL) </h1>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="item slide-3 slider-image">
            <div className="carousel-caption">
                <div className="container">
                    <div className="box valign-middle">
                        <div className="content  text-center ">
                            <div className="main-banner-content-two">
                                <h1 data-animation="animated fadeInDown"> SOLUTION FOR INTERNATIONAL CLIMATE CHANGE AND POLLUTION</h1>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <a className="left carousel-control" href="#minimal-bootstrap-carousel" role="button" data-slide="prev">
        <i className="fa fa-angle-left"></i>
        <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#minimal-bootstrap-carousel" role="button" data-slide="next">
        <i className="fa fa-angle-right"></i>
        <span className="sr-only">Next</span>
    </a>
    <ul className="carousel-indicators list-inline custom-navigation">
        <li data-target="#minimal-bootstrap-carousel" data-slide-to="0" className="active"></li>       
        <li data-target="#minimal-bootstrap-carousel" data-slide-to="1"></li>     
        <li data-target="#minimal-bootstrap-carousel" data-slide-to="2"></li>
    </ul>
</div>
    )
}
export default Slider