import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Modules/Navbar';
import AuthContextProvider from './contexts/authContext';
import Routing from './routes/Routing';

function App() {
  return (
  <BrowserRouter>
  <AuthContextProvider>
  <Navbar/>
  <Routing/>
  </AuthContextProvider>
  </BrowserRouter>
  )
}

export default App;
