import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import app from '../firebase/firebase.config';

export interface AuthInfo {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  user: User | null;
  loading: boolean;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthInfo | null>(null);
const auth: Auth = getAuth(app);

interface AuthProvidersProps {
  children: ReactNode;
}

const AuthProviders = ({ children }: AuthProvidersProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = useMemo(
    () => ({ createUser, signInUser, user, loading, logOut }),
    [loading, user]
  );
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
