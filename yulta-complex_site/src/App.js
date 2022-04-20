import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import AboutLaboratory from "./components/Pages/Laboratory/Laboratory/AboutLaboratory";
import Accreditation from "./components/Pages/Laboratory/Accreditation/Accreditation";
import MakeRequest from "./components/Pages/Laboratory/MakeRequest/MakeRequest";
import Comments from "./components/Pages/Comments/Comments";
import Contacts from "./components/Pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Certification from "./components/Pages/Certification/Certification/Certification";
import CertTr2009013by from "./components/Pages/Certification/CertTr2009013by/CertTr2009013by";


function App(props) {
  return (
    <div className="app-wrapper" id='#app'>
        <Header />
        <Nav />
        <main className='app-wrapper-content'>
            <Switch>
                <Route exact path='/'
                       render={() => <AboutLaboratory />}/>
                <Route exact path='/accreditation'
                       render={() => <Accreditation />}/>
                <Route exact path='/request'
                       render={() => <MakeRequest />}/>
                <Route exact path='/comments'
                       render={() => <Comments />}/>
                <Route exact path='/contacts'
                       render={() => <Contacts />}/>

                <Route exact path='/laboratory'
                       render={() => <AboutLaboratory />}/>
                <Route exact path='/laboratory/request'
                       render={() => <MakeRequest />}/>
                <Route exact path='/laboratory/accreditation'
                       render={() => <Accreditation />}/>

                <Route exact path='/certification'
                       render={() => <Certification />}/>
                <Route exact path='/certification/tr_2009_013_by'
                       render={() => <CertTr2009013by />}/>
                <Route exact path='/certification/marks_of_conformity_and_accreditation'
                       render={() => <Accreditation />}/>
                <Route exact path='/certification/complaints_and_appeals'
                       render={() => <Accreditation />}/>


            </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;
