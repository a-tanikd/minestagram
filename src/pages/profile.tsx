import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUsername } from '../services/users';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import UserProfile from '../components/profile';
import User from '../types/user';

export default function Profile() {
  const username = useParams<string>();
  const [user, setUser] = useState<User | undefined>(undefined);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);

      if (user?.userId) {
        setUser(user);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }
    checkUserExists();
  });

  return user ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
