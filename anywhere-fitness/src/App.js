import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClientRegisterForm from './components/ClientRegisterForm';
import ClientLoginForm from './components/ClientLoginForm';
import ClientClassList from './components/ClientClassList';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';



function App() {

  var DivBody = styled.div`
    background: #794DAC;
    color: black;
    
  `;
//Remove ClassName from below before DivBody will work
  return (
    <DivBody className="App">
      <header className="App-header">
        
        <Route exact path='/' component={Home} />
        <Route path='/client-register' component={ClientRegisterForm}></Route>
        <Route exact path='/client-login' component={ClientLoginForm} />
        <Route path='/client-login/classes' component={ClientClassList} />
        
      </header>
    </DivBody>
  );
  
}

export default App;
