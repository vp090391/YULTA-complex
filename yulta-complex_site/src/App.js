import React from 'react';
import './App.css';
import AboutLaboratoryContainer from "./components/Pages/AboutLaboratory/AboutLaboratoryContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import NavContainer from "./components/Nav/NavContainer";
import {Route, Switch} from "react-router-dom";
import MakeRequestContainer from "./components/Pages/MakeRequest/MakeRequestContainer";


function App(props) {
  return (
    <div className="app-wrapper">
        <HeaderContainer store={props.store}/>
        <NavContainer />
        <main className='app-wrapper-content'>
            <Switch>
                <Route exact path='/'
                       render={() => <AboutLaboratoryContainer store={props.store}/>}/>
                <Route path='/request'
                       render={() => <MakeRequestContainer store={props.store}/>}/>
            </Switch>
        </main>
        <FooterContainer />
    </div>
  );
}

export default App;
