import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import SplashPage from "./components/SplashPage/splashpage";
import RegisterPage from "./components/RegisterPage/registerpage";
import Profiles from "./components/ProfileSelect/ProfileSelect";
import ProfileCreate from "./components/ProfileCreate/ProfileCreate";
import NavBar from "./components/NavBar";
import BrowsePage from "./components/BrowsePage/BrowsePage";
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

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
          <SplashPage />
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
