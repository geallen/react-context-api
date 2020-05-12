import React from 'react';
import './App.css';
import AppContainer from './component/AppContainer';
import {ThemeProvider} from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
        <AppContainer />
    </ThemeProvider>
  );
}

export default App;
