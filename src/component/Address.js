import React,{Component} from 'react'

import UserContext from './UserContext'


class Address extends Component
{
    static contextType = UserContext

    render()
    {
       if(this.context == "English")
       {
        return(
            <div> 
                  <div className="col-md-11">
                      <h3  className="headingColor">OVERSEAS OFFICE </h3>
                      <h5 className="secondheadingColor">Naripa Motor Corporation,</h5>
                      <p className="classCommonAlign" >Seishin cho-1-2-2-103, </p>
                      <p className="classCommonAlign">Edogawa-Ku</p>
                      <p className="classCommonAlign">Tokyo, Japan-1340087</p>
                  </div>                   
            </div>
        )
       }
       else
       {
        return(
            <div>
                  <div className="col-md-11">
                      <h3  className="headingColor">OVERSEAS OFFICE </h3>
                      <h5 className="secondheadingColor">Naripa Motor Corporation,</h5>
                      <p className="classCommonAlign" >   清新町1-2-2-103, </p>
                      <p className="classCommonAlign">江戸川区,</p>
                      <p className="classCommonAlign">東京,</p>
                      <p className="classCommonAlign">日本1340087</p>
                  </div> 
            </div>
        )
       }
    }



}

export default Address