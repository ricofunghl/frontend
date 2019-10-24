import React from 'react';
import Base from '../../components/Base/Base';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Base />
      </div>
    </BrowserRouter>
  );
}

export default App;
