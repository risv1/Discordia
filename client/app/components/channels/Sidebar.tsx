import { useNavigate } from "@remix-run/react";
import { servers } from "~/utils/servers";
import icon from "../../../public/logo_white.png";

const Sidebar = () => {
  const nav = useNavigate();

  const handleRoute = (route: string) => {
    nav(route);
  };

  return (
    <div className="bg-zinc-900 w-[7%] h-screen overflow-auto">
      <div
        className="flex flex-col items-center justify-center"
        onClick={() => handleRoute("/channels/me")}
      >
        <img
          className="p-2 hover:cursor-pointer w-16 h-16 bg-zinc-600 mt-2 mr-1 rounded-xl"
          src={icon}
          alt="logo"
        />
      </div>
      <div className="mt-3 w-full h-1 bg-zinc-400"></div>
      <div className="mb-2">
        {servers.map((server) => (
          <div
            key={server.id}
            className="flex flex-col items-center justify-center mt-3"
            onClick={() => handleRoute(`/channels/${server.id}`)}
          >
            <img
              className="p-1 w-16 h-16 bg-zinc-600 mt-2 mr-1 rounded-3xl duration-150 ease-in hover:cursor-pointer hover:rounded-xl"
              src={server.icon}
              alt="server"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
