import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignUpFormModal/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import SplashPage from './components/SplashPage';
import Groups from './components/Groups/index.js';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

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
        <Route path='/' exact={true}>
          <SplashPage />
        </Route>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <ProtectedRoute path='/' exact={true} >
          {/*We will put the dashboard here */}
          <h1>Authed</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/channel/:channelId' exact={true} >
          {/* Specific channel view here */}
          <h1>Specific channel view</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/groups/:groupId' exact={true} >
          {/* Specific group view here */}
          <Groups />
        </ProtectedRoute>
        <Route path='/groups' exact={true} >
          <Groups />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
