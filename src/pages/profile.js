import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/route';

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);

      console.log(`user`, user);

      if (user) {
        setUser(user);
        setUserExists(true);
      } else {
        setUserExists(false);
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, history]);

  return userExists ? (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">{user.fullName}</div>
    </div>
  ) : null;
}
