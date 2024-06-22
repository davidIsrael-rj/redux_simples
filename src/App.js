import './App.css';
import React from 'react';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>        
        <Intervalo >
          
        </Intervalo>
      </div>
      <div className='linha'>        
        <Card title='Card2' green>X</Card>
        <Card title='Card3' blue>Y</Card>
        <Card title='Card4' purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
