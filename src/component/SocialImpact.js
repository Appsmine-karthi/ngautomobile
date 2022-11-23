import React,{Component} from 'react' 

import SocialSlider from './SocialSlider'

import UserContext from './UserContext'

import ContentSlider from './ContentSlider'

class SocialImpact extends Component
{

    static contextType = UserContext

    render()
    {
       if(this.context == "English")
       {
        return(
            <div>
             <ContentSlider sliderTitle="SOCIAL IMPACT"  />
             <SocialSlider />
                <div className="container">
                    <div className="row socialImpect">
                        <div className="col-md-12" >
                        <div className="jumbotron">        
                            <h3 className="text-center front-heading">SOCIAL IMPACT</h3>                         
                                    <p className="text-align-center">    Globally, IC engine (petrol and diesel) vehicle creates air pollution and it produces heat which includes hazardous gases such as nitrogen oxide, carbon monoxide, 
                                        carbon dioxide, benzene, polycyclic aromatic hydrocarbon. Air pollution can aggravate the medical conditions of individuals with asthma and emphysema. 
                                        Long-term health effects include chronic respiratory disease, lung cancer, heart disease, and even damage to the brain, nerves, liver, or kidneys.</p>
                                  
                        </div>
                        
                        <div className="col-md-12">
                        <h3 className="text-center front-heading">WHAT WE DO</h3>
                        <div className="jumbotron">      
                            <p className="text-align-center">Through the global deployment of this clean energy system, we will boost the ratio of renewable energy sources, such as High Tech Supersonic Hydrogen fuel Powered Engine , to help achieve a cleaner and sustainable environment.</p>
                        </div>
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
            <ContentSlider sliderTitle="社会的影響"  />
             <SocialSlider />
             <div className="container">
                    <div className="row socialImpect">
                        <div className="col-md-12" >
                            <h3 className="text-center front-heading">社会的影響</h3>
                            <div className="text-align-center">
                                    <p> 世界的に、ICエンジン（ガソリンおよびディーゼル）車両は大気汚染を引き起こし、窒素酸化物、一酸化炭素、二酸化炭素、ベンゼン、多環芳香族炭化水素などの有害ガスを含む熱を生成します。大気汚染は、喘息や肺気腫のある人の病状を悪化させる可能性があります。長期的な健康への影響には、慢性呼吸器疾患、肺がん、心臓病、さらには脳、神経、肝臓、または腎臓への損傷が含まれます</p>
                             </div>
                        
                                {/* <p className="text-align-center">
                                    Globally, IC engine (petrol &amp;diesel) vehicle creates air pollution and it produces heat which includes hazardous gases such as nitrogen oxide, carbon monoxide, carbon dioxide, benzene, polycyclic aromatic hydrocarbon. Air pollution can aggravate the
                                    medical conditions of individuals with asthma and emphysema. Long-term health effects include chronic respiratory disease, lung cancer, heart disease, and even damage to the brain, nerves, liver, or kidneys..</p>
                            <h3 className="text-center front-heading">Air pollution, ecosystems and biodiversity</h3>
                                <div className="text-align-center">
                                    <p>Ecosystems are impacted by air pollution, particularly sulphur and nitrogen emissions, and ground-level ozone as it affects their ability to function and grow. Emissions of both sulphur dioxide and nitrogen oxides deposit
                                            in water, on vegetation and on soils as “acid rain”, thereby increasing their acidity with adverse effects on flora and fauna. Ultimately, acidification affects the ability of ecosystems to provide “ecosystem services”,
                                            such as for example nutrient cycling and carbon cycling, but also water provision, on which the planet and human life is dependent..</p>
                                    <p>
                                            Increased ground-level ozone also causes damage to cell membranes on plants inhibiting key processes required for their growth and development. The loss of plant cover affects us all. Trees and other vegetation absorb pollutants such as excessive nitrogen
                                            dioxide, ozone and particulate matter, through their leaves and needles and thereby help to improve air quality. Less plant cover thus means less filtering capacity to clean our air.. Eutrophication, the process
                                            of accumulation of nutrients, including nitrogen, in water bodies, often results from air pollution. Nutrient overloads in aquatic ecosystems can cause algae blooms and ultimately a loss of oxygen, and of life.
                                            As ecosystems are impacted, so is the biological diversity.
                                        </p>
                                    <p>
                                            Even worse, ultimately human populations are also affected. Harmful concentrations of pollutants may directly enter our drinking water, notably through ground water seepage. Equally, water quality may be deteriorated as air pollution negatively affects
                                            vegetation which helps to naturally filter our water systems. Affected vegetation also has negative consequences on another important ecosystem service: that of capturing carbon and thereby reducing the impacts
                                            of climate change.
                                    <a href="http://www.unece.org/environmental-policy/conventions/envlrtapwelcome/cross-sectoral-linkages/air-pollution-ecosystems-and-biodiversity.html" target="_blank">
                                        More Details.....</a>
                                    </p>
                                </div> */}
                        </div>
                        <div className="col-md-12">
                        <h3 className="text-center front-heading">私達がすること：</h3>
                            <p className="text-align-center">このクリーンエネルギーシステムのグローバル展開を通じて、ハイテク超音速水素燃料駆動エンジンなどの再生可能エネルギー源の比率を高め、よりクリーンで持続可能な環境の実現を支援します。</p>
                        </div>
                    </div>
                </div>
            </div>
        )

       }
       

    }
    
}
export default SocialImpact