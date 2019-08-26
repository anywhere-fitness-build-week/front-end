import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClientRegisterForm from './components/ClientRegisterForm';
import ClientLoginForm from './components/ClientLoginForm';
import ClientClassList from './components/ClientClassList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello World
        </p>
        <ClientRegisterForm></ClientRegisterForm>
        <ClientLoginForm />
        <ClientClassList />
      </header>
    </div>
  );
  
}

export default App;
