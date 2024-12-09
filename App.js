import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import SignIn from './components/header/SignIn';
import SignUp from './components/header/SignUp';
import Main from './components/main/Main';
import Menu from './components/sidemenu/Menu';

function App() {
  return (
   <>
   <div className='layout'>
    <Router>
      <Routes>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </Routes>
      </Router>  
    <Menu/>
   {/* <Header/>
   <Main/> */}
   </div>

   </>
  );
}

export default App;
