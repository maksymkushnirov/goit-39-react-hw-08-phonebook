import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import PrivateRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';

import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute path="/">
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Container>
    )
  );
}
