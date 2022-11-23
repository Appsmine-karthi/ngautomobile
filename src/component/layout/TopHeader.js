import React,{useState,useEffect} from 'react'
import '../../asset/css/style.css'
import EnglishLogo from '../../asset/image/countryLog.png'
import Japan from '../../asset/image/Japan.png'
import HeaderImage from '../../asset/image/header/logo.jpg'

function TopHeader({name,language})
{
    let ImageList,changeLangusge 
     
    if(language == "English"){

        changeLangusge = "Japanese"

        ImageList = <img src={Japan} alt="Country Logo"/>
    }
    else
    {
       
        ImageList = <img src={EnglishLogo} alt="Country Logo"/> 
        changeLangusge = "English"
    } 

    return(<div className="container-fluid">
                <div className="row top-header-color ">                   
                    <div className="col-md-offset-9 col-md-3 Top">
                        <a href="#" onClick={name}> {ImageList} {changeLangusge}</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img src={HeaderImage} className="img-responsive center-block" alt="Top Header Logo"/>
                    </div>
                </div>
            </div>)
}

export default TopHeader