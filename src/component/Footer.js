import React from 'react'

function Footer()
{
    return(<div className="container-fluid">
    <div className="row top-header-color ">                   
        <div className="col-md-12">
            <div className="copyright-text">&copy; {(new Date().getFullYear())} All Rights Reserved by Ng Automobile Enginnering P.Ltd</div>
        </div>
    </div>  
</div>)

}

export default Footer