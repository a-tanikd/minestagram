import { useContext } from 'react';
import Suggestions from './suggestions';
import User from './user';
import LoggedInUserContext from '../../context/logged-in-user';

const Sidebar: React.FC = () => {
  // const {
  //   docId = '',
  //   fullName,
  //   username,
  //   userId,
  //   following,
  // } = useContext(LoggedInUserContext);
  const user = useContext(LoggedInUserContext);

  return (
    <div className="p-4">
      <User username={user?.username} fullName={user?.fullName} />
      <Suggestions
        loggedInUserId={user?.userId}
        following={user?.following}
        loggedInUserDocId={user?.docId}
      />
    </div>
  );
};

export default Sidebar;

Sidebar.whyDidYouRender = true;
