//Libraries
import React, { useState, useEffect } from 'react';
//Components
import Header from './components/Header'
import InstagramSection from './components/InstagramSection';
import {onAuthStateChanged} from "@firebase/auth"
import Dummy from './components/Dummy';
//Css
import './App.css';
//Fonts
import './assets/GothamFont/Gotham-Light.otf'
import './assets/GothamFont/GothamMedium.ttf'
import './assets/GothamFont/Gotham-Black.otf'
import Signup from './auth/Signup';
import AuthProvider from './contexts/AuthContext';


function App() {

  const authUser = () => {
    return (
      <div>
          <Header/>
          <InstagramSection/>
      </div>
    )
  }

  const offlineUser = () => {
    return (
      <div>
        <Signup/>
      </div>
    ) 
  }
   
  return (
      <div className="App">
          {authUser()}
      </div>
    );
}

export default App;
