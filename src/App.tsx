import React from 'react';
import './App.css';
import ToDo from './Components/ToDo';

function App() {
  const styles = {
    bgcolor:{
      backgroundColor: 'white'
    } as React.CSSProperties,
  };
  return (
    <div className="container border border-primary rounded mt-5" style={styles.bgcolor}>
      <ToDo></ToDo>
    </div>
  );
}

export default App;
