import React,{Component} from 'react' 

import UserContext from './UserContext'

import ContentSlider from './ContentSlider'

class Business extends Component
{
  static contextType = UserContext
  render()
  {
     if(this.context == "English")
     {
      return(
          <div>
              <ContentSlider sliderTitle="BUSINESS"  />
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="jumbotron" >
                              <h3 className="text-center front-heading">OUR BUSINESS</h3>
                              <p className="text-align-center"> Our business theme revolves around the development of clean tech energy by providing high tech hydrogen fuel powered IC engine technology suitable for all manufacturing industries like electricity production, agriculture pump set, automobile industry
                                                    (Two wheelers, Four wheelers, Heavy vehicles), Aircraft IC Engine and Marine IC Engines.</p>
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
               <ContentSlider sliderTitle="ビジネス" />
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="jumbotron" >
                              <h3 className="text-center front-heading">ビジネス</h3>
                              <p className="text-align-center">私たちのビジネステーマは、電力生産、農業用ポンプセット、自動車産業（二輪車、四輪車、 大型車）、航空機用ICエンジンなどのあらゆる製造業に適したハイテク水素燃料駆動ICエンジ ン技術を提供することによって、クリーン技術エネルギーの開発を中心に展開します。マリン ICエンジン</p>
                            </div>
                      </div>
                  </div>
              </div>           
          </div>
      )

     }

  }
}
export default Business