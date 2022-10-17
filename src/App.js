// import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import { Home } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import {initialState, dispatcher } from './Reducer';
import Login from './pages/Login';
import Register from './pages/Register';
import Productpage from './pages/Productpage';
import OurContext from './OurContext'
import Homepage from './pages/Homepage';
import { useCart } from "react-use-cart";
import Checkoutpage from './pages/Checkoutpage';

function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)

const { setItems,items } = useCart();

const products = [
  {
    id: "ckb64v21u000001ksgw2s42ku",
    name: "Fresh Foam 1080v9",
    brand: "New Balance",
    color: "Neon Emerald with Dark Neptune",
    size: "US 10",
    width: "B - Standard",
    sku: "W1080LN9",
    price: 15000,
  },
  {
    id: "cjld2cjxh0000qzrmn831i7rn",
    name: "Fresh Foam 1080v9",
    brand: "New Balance",
    color: "Neon Emerald with Dark Neptune",
    size: "US 9",
    width: "B - Standard",
    sku: "W1080LN9",
    price: 15000,
  },
];

// setItems(products)
  return (
    <OurContext.Provider value={state}>
    <div className="App">

      <Routes>
        <Route path='/' element={<Homepage   />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='productpage' element={<Productpage />} />
        <Route path='checkoutpage' element={<Checkoutpage />} />
      </Routes>
    </div>
    </OurContext.Provider>
  );
}

export default App;
