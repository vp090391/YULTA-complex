import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavContainer from "./components/Nav/NavContainer";
import AboutLaboratoryContainer from "./components/Pages/AboutLaboratory/AboutLaboratoryContainer";
import AccreditationContainer from "./components/Pages/Accreditation/AccreditationContainer";
import MakeRequestContainer from "./components/Pages/MakeRequest/MakeRequestContainer";
import CommentsContainer from "./components/Pages/Comments/CommentsContainer";
import ContactsContainer from "./components/Pages/Contacts/ContactsContainer";
import FooterContainer from "./components/Footer/FooterContainer";


function App(props) {
  return (
    <div className="app-wrapper" id='#app'>
        <HeaderContainer store={props.store}/>
        <NavContainer />
        <main className='app-wrapper-content'>
            <Switch>
                <Route exact path='/'
                       render={() => <AboutLaboratoryContainer store={props.store}/>}/>
                <Route exact path='/accreditation'
                       render={() => <AccreditationContainer store={props.store}/>}/>
                <Route exact path='/request'
                       render={() => <MakeRequestContainer store={props.store}/>}/>
                <Route exact path='/comments'
                       render={() => <CommentsContainer store={props.store}/>}/>
                <Route exact path='/contacts'
                       render={() => <ContactsContainer store={props.store}/>}/>
            </Switch>
        </main>
        <FooterContainer />
    </div>
  );
}

export default App;
