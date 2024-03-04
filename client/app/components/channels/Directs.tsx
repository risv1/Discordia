import { Hand, Settings } from "lucide-react";
import { messages } from "../../utils/messages";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import Modal from "../overlay/Modal";

const Directs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nav = useNavigate();
  const handleRoute = (route: string) => {
    nav(route);
  };

  return (
    <div className="bg-zinc-700 h-screen w-[20%] flex flex-col">
      <div className="h-12 flex p-4 justify-center items-center border-b-2 border-zinc-900">
        <div
          onClick={() => setIsModalOpen(true)}
          className="bg-zinc-900 hover:cursor-pointer rounded focus:outline-none text-white text-sm p-1 w-[95%]"
        >
          Find or start a conversation
        </div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-white rounded p-4">
          <h2>Find or start a conversation</h2>
          <input type="text" placeholder="Search..." />
          <button onClick={()=>setIsModalOpen(false)}>Close</button>
        </div>
      </Modal>
      <div className="overflow-auto">
        <div className="bg-zinc-700 h-16 w-[90%] gap-2 flex justify-center items-center flex-row">
          <Hand color="#ffffff" size={40} />
          <h1 className="text-white text-2xl font-bold">Friends</h1>
        </div>
        {messages.map((message) => {
          return (
            <div
              key={message.id}
              onClick={() => handleRoute(`/channels/me/${message.id}`)}
              className="hover:bg-zinc-600 hover:cursor-pointer p-3 flex justify-between items-center flex-row"
            >
              <div className="flex flex-row gap-2 rounded-xl p-1">
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
        })}
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
