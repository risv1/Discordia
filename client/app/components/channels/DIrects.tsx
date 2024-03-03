import { Hand, Settings } from "lucide-react";
import { messages } from "../../utils/messages";

const Directs = () => {
  return (
    <div className="bg-zinc-700 h-screen w-[14%] flex flex-col">
      <div className="h-12 flex p-3 justify-center items-center border-b-2 border-zinc-900">
        <input
          className="bg-zinc-900 rounded focus:outline-none text-white text-sm p-1 w-[95%]"
          type="text"
          placeholder="Find or start a conversation"
        />
      </div>
      <div className="bg-zinc-700 h-16 w-[90%] gap-2 flex justify-center items-center flex-row">
        <Hand color="#ffffff" size={40} />
        <h1 className="text-white text-2xl font-bold">Friends</h1>
      </div>
      <div className="overflow-auto">
        {
          messages.map((message) => {
            return (
              <div
                key={message.id}
                className="hover:bg-zinc-600 p-3 flex justify-between items-center flex-row"
              >
                <div className="hover:bg-zinc-700 flex flex-row gap-2 rounded-xl p-1">
                  <img
                    style={{ borderRadius: "50%" }}
                    className="bg-zinc-600"
                    src="logo_white.png"
                    alt="logo"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-white">{message.name}</h1>
                    <h1 className="text-white">{message.status}</h1>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className="mt-auto bg-zinc-800 h-16 p-3 flex justify-between items-center flex-row">
        <div className="hover:bg-zinc-700 flex flex-row gap-2 rounded-xl p-1">
          <img
            style={{ borderRadius: "50%" }}
            className="bg-zinc-600"
            src="logo_white.png"
            alt="logo"
          />
          <div className="flex flex-col">
            <h1 className="text-white">Name</h1>
            <h1 className="text-white">Status</h1>
          </div>
        </div>
        <div className="mr-3 hover:bg-zinc-700 p-2 rounded-xl">
          <Settings color="#ffffff" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Directs;
