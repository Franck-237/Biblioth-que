import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Bib from './pages/Bib';
import Login from './components/Login';
import Signup from './components/Signup';
import Learn from './pages/Learn';
import Hobbies from './pages/Hobbies';
import LearnDetails from './pages/LearnDetails';
import Book from './pages/Book';
import Homeconcours from './pages/Homeconcours';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import { UserProvider } from './context/context';
import Navbar from './components/Navbar';
import PrivateRoute from './utils/PrivateRoute';
import Profile from './pages/Profile';
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from '@chakra-ui/react';
import ActivateEmail from './pages/Activate';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [order, setOrder] = useState(false);

  const handlerOrderPopup = () => { 
    setOrderPopup(!orderPopup);
  };

  const handlerOrder = () => { 
    setOrder(!order);
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <>
      <BrowserRouter>
      <ChakraProvider>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
              <Navbar handlerOrderPopup={handlerOrderPopup} handlerOrder={handlerOrder} />
              <Routes>
                <Route index element={<Bib />} />
                <Route path='/bibliotheque' element={<Bib />} />
                <Route path='auth/activate/:uid/:token' element={<ActivateEmail />} />
                <Route path='/bibliotheque/enseignements' element={<Learn />} />
                <Route path='/bibliotheque/loisirs' element={<Hobbies />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/book/:id' element={<LearnDetails />} />
                <Route 
                  path='/bibliotheque/enseignements/livre/:id' element={<Book />} 
                />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/reset-password' element={<ResetPassword />} />
                <Route path='auth/reset-password/:uid/:token' element={<ResetPasswordConfirm />} />
                <Route path='/homeconcours' element={<Homeconcours />} />
                <Route path='/book' element={<PrivateRoute element={<Book />} />} />
              </Routes>
            <Login orderPopup={orderPopup} setOrderPopup={setOrderPopup} handlerOrder={handlerOrder} />
            <Signup order={order} setOrder={setOrder} handlerOrderPopup={handlerOrderPopup} />
          </QueryClientProvider>
        </UserProvider>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
