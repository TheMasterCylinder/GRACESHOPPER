import React from 'react';
import  Home  from './Home';
import  Cart  from './Cart';
import  Login  from './Login';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {



  return (
   <Router>
      <div className="App">
     
     
     <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/Home' exact component={Home}/>
     <Route path='/cart' component={Cart}/>
     <Route path='/Login' component={Login}/>
     </Switch>
     
    </div>
   </Router>
  );
}

export default App;
