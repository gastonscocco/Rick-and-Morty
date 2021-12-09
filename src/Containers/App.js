import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import Home from './Home/Home';
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/NavBar/NavBar'
import Landing from './Landing/Landing';
import "@material-tailwind/react/tailwind.css";



function App() {
  

  return (
    <div>
        <Nav />
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
