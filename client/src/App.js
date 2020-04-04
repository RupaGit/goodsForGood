import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Myform from './components/Myform';
import Mybutton from './components/Mybutton';
import MyCard from './components/MyCard';
import Textbox from './components/Textbox';
import Navigation from './components/Navigation';
import Home from './pages/Home';




function App() {
  return (
    <BrowserRouter>
    <div>
       <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             </Switch>
      <Textbox>Hello world</Textbox>
      <MyCard>JAVIS</MyCard>
      <Mybutton>Javits Test Button</Mybutton>
      <Mybutton>Guy Button</Mybutton>
      <Myform/>
      <Myform/>
    </div>
    </BrowserRouter>
  )};

export default App;
