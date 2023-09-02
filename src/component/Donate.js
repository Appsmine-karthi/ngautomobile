import React from 'react';
import upiScanCode from '../asset/image/upiScanCode.jpg';
import ContentSlider from './ContentSlider';

const Donate = () => {

    return (<>
        <ContentSlider sliderTitle="BE A GLOBAL GAME CHANGER" />

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron" >
                        {/* <h3 className="text-center front-heading">BE A GLOBAL GAME CHANGER</h3> */}
                        <p className="text-align-center">I am Sounthirarajan Kumarasamy,  Tamil nadu, India , Inventor of Super Sonic Hydrogen IC Engine. Our hydrogen fuel powered higher efficiency IC engine can run in all vehicles.
                            According to world health organization report, air pollution posses a major threat to health and climate.</p>

                        <p className="text-align-center">    Ambient (outdoor) air pollution in both cities and rural areas are causing fine particulate matter which result in strokes, heart diseases, lung cancer, acute and chronic respiratory diseases. The combined effects of ambient air
                            pollution and household air pollution are associated with 7 million premature deaths annually.</p>

                        <p className="text-align-center">I have a Green idea to make our world pollution free. Our Fossil fuel free innovation is  a best one stop real solution for Climate Change Emergency  and International air pollution. This innovative technology solves three major problems that evolves in the current Hydrogen production scenario such as hydrogen cost,
                            hydrogen storage risk and its transportation. These are the reasons for risk in implementing hydrogen technology globally.</p>

                        <p className="text-align-center"> Would you be able to contribute to my Green Energy Technology? A donation of any amount would truly help me reach my goal.</p>
                        <p className="text-align-center">  I need it for my green hydrogen project development. This is important to me because we are already in climate change emergency and air pollution. I request your help to achieve this.</p>
                        <p className="text-align-center"> Could you please help by donating or sharing this fundraiser with your friends and family.</p>
                        <p className="text-align-center"> Let’s join hands for a global green revolution.</p>

                        <h3 className="text-center front-heading">Make your contribution to</h3>
                        <h4 className="text-center front-heading">UPI</h4>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <p className="text-align-center"> Gpay – 8300399893</p>
                                <p className="text-align-center"> Bank Account Details</p>
                                <p className="text-align-center"> Account Holder Name: Sounthirarajan K</p>
                                <p className="text-align-center"> BANK Name : ICICI Bank</p>
                                <p className="text-align-center"> BRANCH : Vellakovil</p>
                                <p className="text-align-center"> Account No : 176101501763</p>
                                <p className="text-align-center"> IFSC Code: ICIC0001761</p>
                            </div>
                            <div className='col-sm-6 text-align-center' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                <img src={upiScanCode} style={{ maxWidth: "100%", maxHeight: 350, flex: 1 }} alt="upiScanCode" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Donate