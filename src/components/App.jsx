import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegForm from './KegForm';
import KegList from './KegList';
import EditKeg from './EditKeg';
import Home from './Home';

function App(){
  return(
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/newkeg' component={KegForm} />
        <Route path='/kegs' component={KegList} />
        <Route path='/editkeg' component={EditKeg} />
      </Switch>
    </div>

  );
}

export default App;
