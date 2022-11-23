import React,{Component} from 'react'

class ContentSlider extends Component
{

    render()
    {
        return(
            <div>
                <div className="container-fluid">   
                       <div className="row">
                            <div className="col-md-12 col-lg-12">
                            <section className="page-title slider-image" >
                                <div className="auto-container">
                                    <h1 className="slider-text-center" >{ this.props.sliderTitle } </h1>                                   
                                </div>
                            </section>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

}

export default ContentSlider