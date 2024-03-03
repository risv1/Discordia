import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Directs from "./DIrects";

const Dashboard = (props: { children: ReactNode }) => {
  return (
    <>
      <div className="w-[100%] h-[100%] flex-row flex">
        <Sidebar />
        <Directs />
        {props.children}
      </div>
    </>
  );
};

export default Dashboard;
