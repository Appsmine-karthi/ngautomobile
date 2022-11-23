import React,{Component} from 'react' 

import Address from '../asset/image/icon/Address.svg'

import Mail from '../asset/image/icon/mail.svg'

import Call from '../asset/image/icon/call.png'

import LanguageAddress from './Address'

import ContentSlider from './ContentSlider'

class Contact extends Component
{  

    render()
    {      
        return(
            <div>
                <ContentSlider sliderTitle="CONTACT US" />     
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-9">
                            <div className="row">
                                <div className="col-md-1">
                                    <img src={Address} className="img-responsive Img-contact-style"/>
                                </div>
                                <div className="col-md-11">
                                    <h3 className="headingColor">REGISTERED ADDRESS </h3>
                                    <h5 className="secondheadingColor">NG Automobile Engineering P.Ltd,</h5>
                                    <p className="classCommonAlign">186/247 Moolanur Road (Dhara puram Road),</p>
                                    <p className="classCommonAlign"> Tirupur District, Vellakovil,</p>
                                    <p className="classCommonAlign"> Tamilnadu, India 638 111.</p>
                                </div>


                                <div className="col-md-1">
                                    <img src={Address} className="img-responsive Img-contact-style"/>
                                </div>

                                <div className="col-md-11">
                                <h3 className="headingColor">ADMINISTRATION OFFICE</h3>
                                <h5 className="secondheadingColor">NG Automobile Engineering P.Ltd,</h5>
                                <p className="classCommonAlign"> 2A,Silver Spring Apartment,</p>
                                <p className="classCommonAlign">Indira Nagar East,Kalapatti(Post),</p>
                                <p className="classCommonAlign"> Coimbatore-641 048, Tamil Nadu, India.</p>
                                </div>

                                <div className="col-md-1">
                                    <img src={Address} className="img-responsive Img-contact-style"/>
                                </div>
                                <LanguageAddress />

                                <div className="col-md-1">
                                <img src={Call} className="img-responsive Img-contact-style"/>
                                </div>
                                <div className="col-md-11">
                                <h4 className="headingColor">CALL US ON </h4>
                                <p  className="classCommonAlign"><a href="+ 91 83003 99893" className="secondheadingColor"> + 91 83003 99893</a></p>
                                <br />
                               </div>

                                <div className="col-md-1">
                                <img src={Mail} className="img-responsive Img-contact-style"/>
                                </div>
                                <div className="col-md-11">
                                <h4 className="headingColor">MAIL US AT </h4>                                
                                <p className="classCommonAlign">sountharkumar@gmail.com</p>
                                {/* <p className="classCommonAlign">md@ngautomobile.com</p>
                                <p className="classCommonAlign">info@ngautomobile.com</p> */}
                                </div>



                            </div>
                         
                        </div>
                    </div>
                </div>           
            </div>
        )
       }
   
}
export default Contact