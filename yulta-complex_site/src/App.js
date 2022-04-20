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
import MarksOfConformity from "./components/Pages/Certification/MarksOfConformity/MarksOfConformity";
import ComplaintsAndAppeals from "./components/Pages/Certification/ComplaintsAndAppeals/ComplaintsAndAppeals";
import Declaration from "./components/Pages/Declaration/Declaration/Declaration";
import DeclTr2009013by from "./components/Pages/Declaration/DeclTr2009013by/DeclTr2009013by";
import DeclTrTs0052011 from "./components/Pages/Declaration/DeclTrTs0052011/DeclTrTs0052011";
import HomePage from "./components/Pages/HomePage/HomePage";


function App(props) {
  return (
    <div className="app-wrapper" id='#app'>
        <Header />
        <Nav />
        <main className='app-wrapper-content'>
            <Switch>
                <Route exact path='/'
                       render={() => <HomePage />}/>

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
                       render={() => <MarksOfConformity />}/>
                <Route exact path='/certification/complaints_and_appeals'
                       render={() => <ComplaintsAndAppeals />}/>

                <Route exact path='/declaration'
                       render={() => <Declaration />}/>
                <Route exact path='/declaration/tr_2009_013_by'
                       render={() => <DeclTr2009013by />}/>
                <Route exact path='/declaration/tr_ts_005_2011'
                       render={() => <DeclTrTs0052011 />}/>
                <Route exact path='/declaration/marks_of_conformity_and_accreditation'
                       render={() => <MarksOfConformity />}/>
                <Route exact path='/declaration/complaints_and_appeals'
                       render={() => <ComplaintsAndAppeals />}/>

                <Route exact path='/comments'
                       render={() => <Comments />}/>

                <Route exact path='/contacts'
                       render={() => <Contacts />}/>
            </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;
