
import './App.css'; // Import your CSS file for styling.
import { Outlet } from 'react-router-dom';
import NavBar from './Pages/LandingPage/NavBar';
import Footer from './Pages/LandingPage/Footer';



const App = () => {


  return (
    <>
    <NavBar/>
      <Outlet/>
    <Footer/>
    </>
  );
};

export default App;
