import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import Myform from './components/Myform';
import Mybutton from './components/Mybutton';

function App() {
  return (
    <div>
      <Mybutton>Javits Test Button</Mybutton>
      <Myform/>
      <Myform/>
    </div>
  

  );
}

export default App;
