import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Theme from './features/theme/Theme';



function App(){
  return (
    <div>
        <Counter />
        <Theme/>
    </div>
  );
}

export default App;
