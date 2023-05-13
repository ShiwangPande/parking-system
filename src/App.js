import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { login, logout, selectUser } from "./components/auth/userSlice";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Login from './components/auth/SignIn.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Booking from './pages/Booking.js';
import Bookconfirm from './pages/Bookconfirm.js';
import ProfileScreen from './pages/ProfileScreen.js';
import LoginScreen from './pages/LoginScreen.js';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen />}>

            </Route>
            <Route path="/" element={<Home />}>

            </Route>

            <Route exact path="/contact" element={<Contact />}>

            </Route>

            <Route path="/booking" element={<Booking />} >

            </Route>
            <Route exact path="/bookconfirm" element={<Bookconfirm />}>

            </Route>
          </Routes>
        )}
      </Router>


    </div>
  );
}

export default App;
