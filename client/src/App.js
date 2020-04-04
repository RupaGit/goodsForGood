import React from 'react';
import './App.css';
// import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Myform from './components/Myform';
import Mybutton from './components/Mybutton';
import MyCard from './components/MyCard';
import Textbox from './components/Textbox';
// import Navigation from './components/Navigation';
import Home from './pages/Home';
import LoginForm from './pages/loginPage';
import Navigation,{ Component } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div>
          <Navigation/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/login" component={LoginForm} exact/>
             </Switch>
    </div>
    </BrowserRouter>
  )};

export default App;
