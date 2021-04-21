import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavigationBar from './NavigationBar';
import './App.css';

import Container from '@material-ui/core/Container';
import GridLayout from './GridLayout';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <CssBaseline   />
      <NavigationBar />
      
      <Container>
        <GridLayout />

      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
