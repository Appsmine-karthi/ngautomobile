import React,{Component} from 'react' 

import UserContext from './UserContext'

import ContentSlider from './ContentSlider'

class MileStone extends Component
{

    static contextType = UserContext
    render()
    {
       if(this.context == "English")
       {
        return(
            <div>
                <ContentSlider sliderTitle="MILESTONE ACHIEVEMENT"  />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron" >
                                <h3 className="text-center front-heading">MILESTONE ACHIEVEMENT</h3>
                                <p className="text-align-center">The Kyoto Protocol / Paris agreement was a true landmark agreement, 
                                the first when developed countries committed to tangible reductions in their greenhouse gas output. But looking back, 
                                the problems that have since beset international climate negotiations were evident then. Remembering the lessons learned two decades ago might help 
                                negotiators in the present era, still grappling with an effective international response to global warming. Which might explain why, 20 years later,
                                climate negotiators are still exhausted. </p>
                            <p className="text-align-center">But again, there are no effective enforcement mechanisms As another alternative, 
                            the Supersonic hydrogen internal combustion  engine  itself offers many promising solutions if it is fuelled by hydrogen. 
                            Our new energy solution will overcome the above challenges through providing a safe “High Tech Hydrogen Generating Technology”. 
                            This will also help to reduce Energy crisis, Air pollution, climate change.
</p>
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
                 <ContentSlider sliderTitle="マイルストーンの達成"  />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron" >
                                <h3 className="text-center front-heading">マイルストーンの達成</h3>
                                <p className="text-align-center">京都議定書/パリ協定は真の画期的な協定であり、先進国が温室効果ガス排出量の具体的な削減を約束した最初の協定でした。しかし、振り返ってみると、それ以来国際的な気候交渉を悩ませてきた問題は明白でした。 20年前に学んだ教訓を思い出すことは、地球温暖化への効果的な国際的対応に取り組みながら、現在の時代の交渉担当者を助けるかもしれません。これは、20年後、気候交渉担当者がまだ疲れ果てている理由を説明するかもしれません。しかし、繰り返しになりますが、効果的な執行メカニズムはありません</p>
                            <p className="text-align-center">別の代替案として、超音速水素内燃エンジン自体は、水素を燃料とする場合、多くの有望なソリューションを提供します。当社の新エネルギーソリューションは、安全な「ハイテク水素生成技術」を提供することにより、上記の課題を克服します。これはまた、エネルギー危機、大気汚染、気候変動を減らすのに役立ちます。</p>
                                </div>
                        </div>
                    </div>
                </div>           
            </div>
        )
       }
    }
}
export default MileStone