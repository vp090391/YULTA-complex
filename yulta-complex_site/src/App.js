import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import AboutLaboratoryContainer from "./components/AboutLaboratory/AboutLaboratoryContainer";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
            <AboutLaboratoryContainer store={props.store}/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
