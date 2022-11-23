import React,{Component} from 'react'

import SliderOne from '../asset/image/Slider/SliderOne.jpg'

import SliderTwo from '../asset/image/Slider/SliderTwo.jpg'

import SliderThree from '../asset/image/Slider/SliderThree.jpg'

class SocialSlider extends Component
{

    render()
    {
        return(
            <div>
                <div className="container">   
                       <div className="row">
                            <div className="col-md-12">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">                         
                            <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                          
                            <div className="carousel-inner">

                                <div className="item active">
                                    <img src={SliderOne} alt="Social Impact One" style={{ width: "100%" }} />                              
                                </div>

                                <div className="item">
                                    <img src={SliderTwo} alt="Social Impact Two"  style={{ width: "100%" }} />                              
                                </div>
                            
                                <div className="item">
                                    <img src={SliderThree} alt="Social Impact Three"  style={{ width: "100%" }} />
                                </div>
                        
                            </div>
                           
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                            </a>
                        </div>                                
                            </div>   
                        </div> 
                    </div>
                </div>
        )
    }

}

export default SocialSlider