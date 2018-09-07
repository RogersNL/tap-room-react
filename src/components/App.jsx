import React from 'react';
import Header from './Header';
import KegForm from './KegForm';
import KegList from './KegList';

function App(){
  return(
    <div className="container">
      <Header/>
      <KegForm/>
      <KegList/>
    </div>

  );
}

export default App;
