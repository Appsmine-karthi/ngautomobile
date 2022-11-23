import React,{Component} from 'react'
import Engine from '../asset/image/energy.png'
import EngineTwo from '../asset/image/enerytwo.png'
import UserContext from './UserContext'
import ContentSlider from './ContentSlider'

class Innovation extends Component
{
    static contextType = UserContext

    render()
    {
        if(this.context == "English")
        {
        return(
            <div>
                <ContentSlider sliderTitle="INNOVATION" />     
                <div className="container">
                    <div className="row">
                        <div class="text">
                            {/* <p >Today, most of the engines used globally in automobiles are internal combustion engines (IC Engine)</p> */}
                                <div className="col-md-12 Top">
                                    <img src={EngineTwo} class="img-fluid img-thumbnail" alt="Engine"/>                  
                                </div>
                                <div className="jumbotron">                            
                                   <p className="text-align-center">Our supersonic hydrogen internal combustion engine technology offers many promising solutions. 
                                   The present unique invention inbuilt with   on board Dual source hydrogen and oxygen generating technology uses hydrogen   
                                   IC Engine exhausted heat to produce hydrogen and oxygen by using high temperature electrolysis process in distilled water.</p>
                                <p className="text-align-center">  Overall, this technology provides solutions to the big questions in hydrogen economy, which are: </p>                                                                     
                                <p className="text-align-center">•	What is the cost of hydrogen gas? </p>
                                <p className="text-align-center">•	Hydrogen production cost? </p>
                                <p className="text-align-center">•	Where does hydrogen come from? </p>
                                <p className="text-align-center">•	How is it transported?</p>
                                <p className="text-align-center">•	How is it distributed? </p>
                                <p className="text-align-center">•	How is it stored? </p>
                                <p className="text-align-center">•	How much cost to install hydrogen fuelling stations?  </p>
                                <p className="text-align-center">Globally this technology will make an immediate and complete solution for the countries to reduce hazardous pollution (CO2 emissions).
                                This technology will evolve as a fuel revolution in future and would be a new era in industrial sectors too.</p>                             
                                <h3 className="text-center front-heading"> PATENT  STATUS </h3>
                                    <p className="text-align-center"> The Patent No - 303500 Date of Patent Grant, 27/11/2018.</p>
                                    <p className="text-align-center"> (Dual Source Hydrogen Fuel generator)</p>
                                    <p className="text-align-center"> Patent pending in India: 201841037958</p>
                                    <p className="text-align-center"> International Appl Filed: PCT/IN2019/050205</p>
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
                    <ContentSlider sliderTitle="革新" />     
                    <div className="container">
                        <div className="row">
                            <div class="text">
                                {/* <p >今日、自動車で世界的に使用されているエンジンのほとんどは内燃機関（ICエンジン）です。</p> */}
                                <div className="col-md-12 Top">
                                    <img src={EngineTwo} class="img-fluid img-thumbnail" alt="Engine"/>                  
                                </div>
                                <div className="jumbotron">                            
                                   <p className="text-align-center">当社の超音速水素内燃エンジン技術は、多くの有望なソリューションを提供します。オンボードのデュアルソース水素および酸素生成技術を組み込んだ本独自の発明は、水素ICエンジンの排気熱を使用して、蒸留水中の高温電解プロセスを使用して水素および酸素を生成します。</p>
                                <p className="text-align-center">  全体として、このテクノロジーは、水素経済における大きな問題に対する解決策を提供します: </p>                                                                     
                                <p className="text-align-center">•  水素ガスの費用はいくらですか？ </p>
                                <p className="text-align-center">•	水素製造コスト？ </p>
                                <p className="text-align-center">•	水素はどこから来るのですか？</p>
                                <p className="text-align-center">•  どのように輸送されますか？</p>
                                <p className="text-align-center">•  どのように配布されますか？ </p>
                                <p className="text-align-center">•  どのように保管されますか？ </p>
                                <p className="text-align-center">•	•水素燃料ステーションの設置にはどのくらいの費用がかかりますか？  </p>
                                <p className="text-align-center">世界的に、この技術は、各国が危険な汚染（CO2排出）を削減するための迅速かつ完全な解決策になります。この技術は、将来的には燃料革命として進化し、産業分野でも新時代となるでしょう。</p>                             
                                <h3 className="text-align-center"> 特許ステータス </h3>
                                    <p className="text-align-center"> 特許番号-303500特許付与日、2018年11月27日。</p>
                                    <p className="text-align-center"> （デュアルソース水素燃料発電機）</p>
                                    <p className="text-align-center"> インドで出願中の特許：201841037958</p>
                                    <p className="text-align-center">出願された国際出願：PCT / IN2019 / 050205</p>
                                </div>
                            </div>                
                        </div>
                    </div>           
                </div>
            )
        }
    }   
}
export default Innovation