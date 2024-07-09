// AuthProvider/index.jsx
import React, { useEffect, useState, useContext } from 'react';
import { doSignOut, getCurrentUser, doCreateUserWithEmailAndPassword } from '../../xanoAuth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
        setUserLoggedIn(true);
      } catch (error) {
        setCurrentUser(null);
        setUserLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    initializeUser();
  }, []);

  const signUp = async (email, password) => {
    try {
      const user = await doCreateUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      setUserLoggedIn(true);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await doSignOut();
      setCurrentUser(null);
      setUserLoggedIn(false);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const value = {
    currentUser,
    userLoggedIn,
    setUserLoggedIn,
    loading,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
