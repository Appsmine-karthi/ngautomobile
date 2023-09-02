import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route } from 'react-router-dom'
import TopHeader from './component/layout/TopHeader'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import Contact from './component/Contact'
import Business from './component/Business'
import AboutUs from './component/AboutUs'
import Innovation from './component/Innovation'
import MileStone from './component/MileStone'
import SocialImpact from './component/SocialImpact'
import {UserProvider} from './component/UserContext'
import AdvanceTechnology from './component/Advance';
import Donate from './component/Donate';


function App() {
  const [name,setName] = useState("English")

  const [check,setCheck] = useState({
      Home : 'HOME',
      About : 'ABOUT US',
      Innovation : 'INNOVATION',
      Social : 'SOCIAL IMPACT',
      MileStone : 'MILESTONE ACHIEVEMENT',
      Business :'BUSINESS',
      AdvanceTechnology :'TECH ADVANTAGES',
      Contact : 'CONTACT US',
      Donate : 'DONATE'
  })

  const changeLanguage =()=>{

      if(name =="English")
      {
          setName("Japanese")
          setCheck({
              Home : 'ホーム',
              About : '会社概要',
              Innovation : '革新',
              Social : '社会的影響',
              MileStone : 'マイルストーンの達成',
              Business :'ビジネス',
              AdvanceTechnology :'テクノロジーの利点',
              Contact : 'コンタクト',
              Donate : 'DONATE'
          })
      }
      else
      {
          setName("English")
          setCheck({
              Home : 'HOME',
              About : 'ABOUT US',
              Innovation : 'INNOVATION',
              Social : 'SOCIAL IMPACT',
              MileStone : 'MILESTONE ACHIEVEMENT',
              Business :'BUSINESS',
              AdvanceTechnology :'TECH ADVANTAGES',
              Contact : 'CONTACT US',
              Donate : 'DONATE'
          })
      }
  }
 
  return (
    <div className="App">
      <TopHeader name={ changeLanguage } language={name}/> 
      <Header check={check}/>    
        <UserProvider value={name}> 
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" component={AboutUs} />
          <Route path="/Innovation" component={Innovation} />
          <Route path="/SocialImpact" component={SocialImpact} />
          <Route path="/MileStone" component={MileStone} />
          <Route path="/Business" component={Business} />
          <Route path="/Contact" component={Contact} />  
          <Route path="/Advance-Technology" component={AdvanceTechnology} />  
          <Route path="/Donate" component={Donate} />  
        </UserProvider>
      <Footer />
     
    </div>
  );
}

export default App;
