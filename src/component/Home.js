import React,{Component} from 'react' 

import UserContext from './UserContext'

import Slider from './Slider'

class Home extends Component
{

    static contextType = UserContext

    render()
    {
       if(this.context == "English")
       {
        return(
            
            <div>
                <Slider />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron" >
                                <h3 className="text-center front-heading">MISSION</h3>
                                <p className="text-align-center">Our Company’s aim is to provide globally an immediate and complete solution for the countries to reduce oil imports and hazardous pollution (CO2 emissions). Our technology will evolve as a fuel revolution in future and would
                                                be a new era in industrial sections too.</p>
                                <h3 className="text-center front-heading">VISION</h3>
                                <p className="text-align-center"> To become the world’s cleanest innovation company, creating sustainable energy solution for a better, safer and a healthier world.</p>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        )
       }
       else
       {
        return(
            <div>
                 <Slider />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron" >
                                <h3 className="text-center front-heading">経営理念</h3>
                                <p className="text-align-center">当社の目的は、石油の輸入と有害な汚染（CO2排出量）を削減するために、世界規模で即時か つ完全なソリューションを各国に提供することです。当社の技術は、将来的には燃料革命とし て進化し、産業部門においても新しい時代となるでしょう。</p>
                                <h3 className="text-center front-heading">事業ビジョン</h3>
                                <p className="text-align-center"> 世界で最もクリーンなイノベーション企業となり、より良く、より安全でより健康的な世界の ための持続可能なエネルギーソリューションを創造する。</p>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        )

       }
       

    }
       
  
}
export default Home