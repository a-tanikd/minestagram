import { useEffect, useState } from 'react';
import { getUserByUserId } from '../services/users';
import User from '../types/user';

export default function useUser(userId?: string): User | undefined {
  const [activeUser, setActiveUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    async function getUserObjByUserId(userId: string) {
      const user = await getUserByUserId(userId);
      setActiveUser(user ?? {});
    }

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return activeUser;
}
