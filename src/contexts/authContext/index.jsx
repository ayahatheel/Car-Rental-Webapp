import React, { useEffect, useState, useContext } from 'react';
import { doSignOut, getCurrentUser, doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../../xanoAuth';

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
        setUserLoggedIn(!!user);
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
      throw new Error(error.message);
    }
  };

  const signOut = async () => {
    try {
      await doSignOut();
      setCurrentUser(null);
      setUserLoggedIn(false);
    } catch (error) {
      console.error("خطأ في تسجيل الخروج:", error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const user = await doSignInWithEmailAndPassword(email, password);
      setCurrentUser(user);
      setUserLoggedIn(true);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const value = {
    currentUser,
    userLoggedIn,
    setUserLoggedIn, // Add this line
    loading,
    signUp,
    signOut,
    signIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
