import { MessageSquare, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { online } from "~/utils/online";

type Online = {
  id: number;
  name: string;
};

const FriendsList = () => {
  const [count, setCount] = useState<number>();
  const [onlineFriends, setOnlineFriends] = useState<Online[]>([]);

  useEffect(() => {
    setOnlineFriends(online);
  }, [count]);

  useEffect(() => {
    setCount(onlineFriends.length);
  }, [count, onlineFriends]);

  return (
    <div className="flex flex-col w-full h-[94vh]">
      <div className="w-full justify-center flex items-center bg-zinc-600">
        <div className="w-full h-14 flex justify-start items-center">
          <input
            type="text"
            placeholder="Search"
            className="rounded text-white focus:outline-none p-2 ml-10 mt-3 mb-3 w-[90%] bg-zinc-900"
          />
        </div>
      </div>
      <div className="w-full h-full bg-zinc-600">
        <div className="w-full mt-5 flex flex-col">
          <h3 className="ml-10 font-semibold text-white">
            ONLINE -{">"} {count}
          </h3>
          <div className="w-full h-full flex flex-col p-3">
            {count == 0 ? (
              <h1>No ones' online right now!</h1>
            ) : (
              onlineFriends.map((friend) => (
                <div
                  key={friend.id}
                  className="border-t h-16 border-b border-gray-300 p-2 flex justify-start ml-5 flex-row gap-5"
                >
                    <img src="smth" alt="logo" className="rounded-full bg-zinc-500" />
                  <h1 className="text-white text-xl">{friend.name}</h1>
                  <div className="ml-auto flex flex-row gap-3">
                    <button className="rounded-full bg-zinc-700 w-12 flex justify-center items-center"><MessageSquare color="#ffffff" /></button>
                    <button className="rounded-full bg-zinc-700 w-12 flex justify-center items-center"><MoreVertical color="#ffffff" /></button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
