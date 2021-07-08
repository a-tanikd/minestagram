import { useEffect, useState } from 'react';
import Firebase from 'firebase';
import { addAuthStateChangedObserver } from '../services/auth';

export default function useAuthListener(): Firebase.User | undefined {
  const authUserStr = JSON.parse(localStorage.getItem('authUser') ?? '{}');
  const [authUser, setAuthUser] = useState(authUserStr);

  useEffect(() => {
    const unsubscriber = addAuthStateChangedObserver((authUser: any) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setAuthUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setAuthUser(undefined);
      }
    });

    return () => unsubscriber();
  }, [authUser]);

  return authUser;
}
