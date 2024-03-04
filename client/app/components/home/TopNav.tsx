import { Link } from "@remix-run/react";

const TopNav = () => {
  return (
    <>
      <div className="w-screen bg-indigo-600 h-[15%] fixed flex justify-between items-center">
        <Link to="/" className="w-[4%] ml-12 flex flex-row items-center gap-2">
          <img src="logo_white.png" alt="logo" />
          <h1 className="font-bold text-3xl text-white">Discordia</h1>
        </Link>
        <Link
          to="channels/me"
          className="mr-10 p-2 font-bold text-base bg-white rounded-2xl justify-center flex items-center"
        >
          Open Discordia
        </Link>
      </div>
    </>
  );
};

export default TopNav;
