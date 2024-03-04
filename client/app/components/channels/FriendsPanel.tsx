import FriendsList from "./FriendsList";
import FriendsNav from "./FriendsNav";

const FriendsPanel = () => {
  return (
    <>
    <div className="w-[73vw] flex flex-col">
      <FriendsNav />
      <FriendsList />
      </div>
    </>
  );
};

export default FriendsPanel;
