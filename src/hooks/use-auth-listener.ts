// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect, useState } from 'react';
import { addAuthStateChangedObserver } from '../services/auth';

export default function useAuthListener() {
  const [user, setUser] = useState(
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
    JSON.parse(localStorage.getItem('authUser'))
  );

  useEffect(() => {
    const unsubscriber = addAuthStateChangedObserver((authUser: any) => {
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
