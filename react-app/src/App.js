import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import SplashPage from "./components/SplashPage/splashpage";
import RegisterPage from "./components/RegisterPage/registerpage";

import ProfileCreate from "./components/ProfileCreate/ProfileCreate";
import NavBar from "./components/NavBar";
import BrowsePage from "./components/BrowsePage/BrowsePage";
import EditProfile from "./components/EditProfile/EditProfile";
import Favorite from "./components/Favorites/Favorites";
import SearchResult from "./components/SearchResult/SearchResult";
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          {authenticated ? <Redirect to="/browse" /> : <SplashPage/>}

        </Route>
        <Route path="/signup" exact={true}>
          <RegisterPage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <ProtectedRoute path='/browse' exact={true} >
          <BrowsePage />
        </ProtectedRoute>
        <ProtectedRoute path='/create-profile' exact={true}>
          <ProfileCreate />
        </ProtectedRoute>
        <ProtectedRoute path='/profiles/manage' exact={true}>
          <EditProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/browse/favorites' exact={true}>
          <Favorite />
        </ProtectedRoute>
        <ProtectedRoute path='/search/q=:query'>
          <SearchResult />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
