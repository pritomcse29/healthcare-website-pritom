
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import SignInSignUp from './components/SignInSignUp/SignInSignUp';
import NotFound from './components/NotFound/NotFound';

import AllServices from './components/AllServices/AllServices';
import SingleService from './components/SingleService/SingleService';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>


            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <Route path="/login-registration">
              <SignInSignUp></SignInSignUp>
            </Route>

            <PrivateRoute path="/services">
              <AllServices></AllServices>
            </PrivateRoute>

            <PrivateRoute path="/service">
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute exact path="/singleservice/:signleServiceId">
              <SingleService />
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
