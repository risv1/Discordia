import { Hand } from "lucide-react";

const FriendsNav = () => {
  const sections = [
    { id: 1, name: "Online" },
    { id: 2, name: "All" },
    { id: 3, name: "Pending" },
    { id: 4, name: "Blocked" },
  ];

  return (
    <div className="w-full h-12 bg-zinc-700 border-b-2 border-zinc-800">
      <ul className=" ml-10 flex flex-row justify-between items-center w-[60%]">
        <li className="text-white font-bold text-xl flex flex-row items-center gap-3 p-2 pr-5 border-r-2 border-zinc-500">
          <Hand color="#ffffff" />
          Friends
        </li>
        {sections.map((section) => (
          <li
            key={section.id}
            className="text-white rounded hover:bg-zinc-500 ease-in-out duration-150 cursor-pointer p-1 w-fit text-xl flex flex-row items-center justify-center"
          >
            {section.name}
          </li>
        ))}
        <li className="text-white p-1 bg-green-600 rounded cursor-pointer font-bold">
          Add Friend
        </li>
      </ul>
    </div>
  );
};

export default FriendsNav;
