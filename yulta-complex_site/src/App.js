import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import AboutLaboratoryContainer from "./components/AboutLaboratory/AboutLaboratoryContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FooterContainer from "./components/Footer/FooterContainer";

function App(props) {
  return (
    <div className="app-wrapper">
        <HeaderContainer store={props.store}/>
        <Nav />
        <div className='app-wrapper-content'>
            <AboutLaboratoryContainer store={props.store}/>
        </div>
        <FooterContainer />
    </div>
  );
}

export default App;
