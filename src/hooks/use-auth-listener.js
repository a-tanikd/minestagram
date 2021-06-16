import { useEffect, useState } from 'react';
import { addAuthStateChangedObserver } from '../services/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );

  useEffect(() => {
    const unsubscriber = addAuthStateChangedObserver((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => unsubscriber();
  });

  return { user };
}
