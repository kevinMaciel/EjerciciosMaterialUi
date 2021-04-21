import {
  CssBaseline,
  Container
} from '@material-ui/core';

import GridLayout from './GridLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />

      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
