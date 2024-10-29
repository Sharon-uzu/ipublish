import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';


function App() {
  return (
    <div>

      <Routes>
            
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />

            
      </Routes>

    </div>
  );
}

export default App;
