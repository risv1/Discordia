import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Directs from "./DIrects";

const Dashboard = (props: { children: ReactNode }) => {
  return (
    <>
      <div className="w-screen h-screen flex-row flex">
        <Sidebar />
        <Directs />
        {props.children}
      </div>
    </>
  );
};

export default Dashboard;
