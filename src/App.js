import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';



function App() {

  useEffect(() => {

    //applying background to body 
    document.body.style.background = 'linear-gradient(45deg, rgba(9,9,121,0.93) 0%, rgba(70,153,245,1) 91%)';
  }, []);
  
  return (
    <div className="App">
      <NavBar />

      <Switch>
        
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
