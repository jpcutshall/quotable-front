import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
