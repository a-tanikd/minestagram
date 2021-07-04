// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect, useState } from 'react';
import { getUserByUserId } from '../services/users';

export default function useUser(userId: any) {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjByUserId(userId: any) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
}
