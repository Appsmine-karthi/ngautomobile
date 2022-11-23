import React,{Component} from 'react' 

import SocialSlider from './SocialSlider'

import UserContext from './UserContext'

import ContentSlider from './ContentSlider'

class Advance extends Component
{

    static contextType = UserContext

    render()
    {
       if(this.context == "English")
       {
        return(
            <div>
             <ContentSlider sliderTitle="ADVANTAGES  OF  TECHNOLOGY"  />            
                <div className="container">
                    <div className="row top-header-color">
                    <div className="jumbotron">     
                        <div className="col-md-12 " >
                            {/* <h3 className="text-center front-heading">ADVANTAGES  OF  TECHNOLOGY</h3> */}
                            <p className="text-align-center">Supersonic hydrogen  fuel powered  higher efficiency IC engine can run in all IC engine vehicles.</p>
                            <p className="text-align-center">There is no need of Hydrogen filling station  Hydrogen fuelling stations are very expensive, generally $1 million to $2 million, because safely pressurizing hydrogen to 10,000 pounds per square inch pressure is not easy.</p>
                            <p className="text-align-center">Supersonic Hydrogen IC engine  technology  solves  Hydrogen storage Risk </p>
                            <p className="text-align-center">Environment friendly technology (99% pollution free)</p>
                            <p className="text-align-center">Lower cost of Hydrogen production. Currently 1 kilogram of Hydrogen costs 1,100 Yen (US$9.85 or INR 500). Supersonic Hydrogen IC engine  technology can bring the Hydrogen cost down to 30 Yen (US$ 0.28 or INR 20).</p>
                            <p className="text-align-center">Supersonic Hydrogen Higher Efficiency IC engine could burn about five times more fuel and therefore produce 
                            five times more horsepower when used with both hydrogen and oxygen mixed fuel.Our new hydrogen energy solution will overcome 
                            the above challenges and provide a safe High Tech Hydrogen Generating Technology.</p>

                           <h3 className="text-center front-heading">APPLICATIONS</h3> 
                               <p className="text-align-center">1.Electricity production(Industrial and Domestic generators)</p> 
                               <p className="text-align-center">2.Agriculture pump set, Tractor</p> 
                               <p className="text-align-center">3.Automobile industry (Two wheelers, Four wheelers, Heavy vehicles)</p> 
                               <p className="text-align-center">4.Aircraft IC Engines </p> 
                               <p className="text-align-center">5.Marine IC Engines.</p> 
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
            <ContentSlider sliderTitle="テクノロジーの利点"  />            
               <div className="container">
                   <div className="row top-header-color">
                       <div className="col-md-12" >
                           {/* <h3 className="text-center front-heading">ADVANTAGES  OF  TECHNOLOGY</h3> */}
                           <p className="text-align-center">超音速水素燃料を動力源とする高効率ICエンジンは、すべてのICエンジン車両で稼働できます。</p>
                           <p className="text-align-center">水素充填ステーションは必要ありません水素燃料ステーションは非常に高価で、水素を1平方インチあたり10,000ポンドの圧力に安全に加圧することは容易ではないため、一般に100万ドルから200万ドルです。</p>
                           <p className="text-align-center">超音速水素ICエンジン技術が水素貯蔵リスクを解決 </p>
                           <p className="text-align-center">環境にやさしい技術（99％無公害）</p>
                           <p className="text-align-center">水素製造の低コスト。現在、1キログラムの水素は1,100円（9.85米ドルまたは500インドルピー）かかります。超音速水素ICエンジン技術により、水素コストを30円（0.28米ドルまたは20インドルピー）まで下げることができます。</p>
                           <p className="text-align-center">超音速水素高効率ICエンジンは、水素と酸素の混合燃料の両方で使用した場合、約5倍の燃料を燃焼できるため、5倍の馬力を生成できます。当社の新しい水素エネルギーソリューションは、上記の課題を克服し、安全な「ハイテク水素生成技術」を提供します。これはまた、エネルギー危機、大気汚染、気候変動を減らすのに役立ちます。</p>

                          <h3>アプリケーション</h3> 
                              <p className="text-align-center">•発電 (産業用および国内用発電機）</p> 
                              <p className="text-align-center">•農業用ポンプセット、トラクター</p> 
                              <p className="text-align-center">•自動車産業 （二輪車、四輪車、大型車）
</p> 
                              <p className="text-align-center">•航空機用ICエンジン</p> 
                              <p className="text-align-center">•船舶用ICエンジン。</p> 
                       </div>
               </div>
           </div>
           </div>
           
        )

       }
       

    }
    
}
export default Advance