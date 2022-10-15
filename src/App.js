// import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import { Home } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import {initialState, dispatcher } from './Reducer';
import Login from './pages/Login';
import Register from './pages/Register';
import Productpage from './pages/Productpage';
import OurContext from './OurContext'
import Homepage from './pages/Homepage';

function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)
  return (
    <OurContext.Provider value={state}>
    <div className="App">

      <Routes>
        <Route path='/' element={<Homepage   />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='productpage' element={<Productpage />} />
      </Routes>
    </div>
    </OurContext.Provider>
  );
}

export default App;
