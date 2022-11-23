import React,{Component} from 'react' 

import UserContext from './UserContext'


import ContentSlider from './ContentSlider'

class AboutUs extends Component
{

    static contextType = UserContext

    render()
    {
        if(this.context == "English")
        {
            return(
                <div>
                    <ContentSlider sliderTitle="ABOUT US"  />
                    <div className="container">
                       <div className="row">
                            <div className="jumbotron">
                                <p className="text-align-center"> Mr. Sounthirarajan Kumarasmy, Inventor and Founder of NG Automobile Engineering Private Limited, India and Naripa Motor Corporation, Japan, has over 18 years of experience in various Industries like Textile, Automobile
                                and Laser. His areas of expertise include Innovative Concept and Engineering Design in various fields. His pure vision is to become a world&#39;s leading cleanest innovative technology provider and to create a sustainable
                                energy solution for better, safer and healthier world.</p>
                                <p className="text-align-center">His earlier research concept evolved on convergent photo voltaic system which was started in 2003. This is a high tech Laser electric power generator which produces huge electric power than coal, fossil fuels or other sustainable
                                energies. For this invention, he got the Patent dated November 5th,2003. Subsequently, another research was started in 2008 to find an immediate solution by using the existing IC Engine. As a result, dual source High-
                                Tech hydrogen fuel generator has been invented which is a clean energy and a boon to the mankind. For this invention, he got the Patent dated November 27th,2018.
                                </p>
                            </div>
                        </div>
                    </div>           
                </div>)
        }
        else
        {
            return(
                <div>
                     <ContentSlider sliderTitle="会社概要"  />
                    <div className="container">
                       <div className="row">
                            <div className="jumbotron">
                                <p className="text-align-center">インドのNG Automobile Engineering Private Limitedおよび日本のNaripa Motor Corporationの創設者で あり創設者でもあるSounthirarajan Kumarasmy氏は、繊維、自動車、レーザーなどのさまざまな 業界で18年以上の経験があります。彼の専門分野は、さまざまな分野における革新的コンセプ トおよびエンジニアリングデザインです。彼の純粋なビジョンは、世界をリードする最もクリ
                                    ーンで革新的な技術プロバイダーになること、そしてより良く、より安全でより健康な世界の ために持続可能なエネルギーソリューションを創造することです。</p>
                                <p className="text-align-center">彼の以前の研究コンセプトは、2003年に始まった収束型太陽光発電システムに発展しました。 これは、石炭、化石燃料、その他の持続可能なエネルギーよりも莫大な電力を生み出すハイテ クレーザー発電機です。この発明に関して、彼は2003年11月5日の特許を取得しました。その 後、既存のICエンジンを使用して即時の解決策を見つけるために、2008年に別の調査が開始さ れました。その結果、クリーンエネルギーであり、人類に恩恵をもたらす二重源ハイテク水素
                                    燃料発生器が発明された。この発明のために、彼は2018年11月27日付け特許を取得しました。
                                </p>
                            </div>
                        </div>
                    </div>           
                </div>)
        }
    }   
}
export default AboutUs