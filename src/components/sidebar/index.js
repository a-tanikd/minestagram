import useUser from '../../hooks/use-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();

  console.log(`following`, following);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        loggedInUserId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}

Sidebar.whyDidYouRender = true;
