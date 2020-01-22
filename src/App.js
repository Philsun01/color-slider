import React, {useState} from 'react';

import './App.css';

function App() {

  const [red, setRed] = useState('125');
  const [green, setGreen] = useState('125');
  const [blue, setBlue] = useState('125');


  return (
    <div className= "">
      <form>
        <div className = 'slider'>
          <label>Red</label>
          <input type = 'range' value = {red}
                  min = '0' max = '255' step = '1' 
                  onChange = { (ev) => { setRed(ev.target.value)} }/>
          <div>{ red }</div>
        </div>

        <div className = 'slider'>
          <label>Green</label>
          <input type = 'range' value = {green}
                  min = '0' max = '255' step = '1' 
                  onChange = { (ev) => { setGreen(ev.target.value)} }/>
          <div>{ green }</div>
        </div>

        <div className = 'slider'>
          <label>Blue</label>
          <input type = 'range' value = {blue}
                  min = '0' max = '255' step = '1' 
                  onChange = { (ev) => { setBlue(ev.target.value)} }/>
          <div>{ blue }</div>
        </div>

      </form>
      <div className = 'colorSwatch'
        style = { 
            { backgroundColor: `rgb(${red},${green},${blue})`}
        }>

      </div>


    </div>
  );
}

export default App;
