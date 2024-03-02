import { FC } from "react";
import Description from "~/components/home/Description";
import TopNav from "~/components/home/TopNav";

const Home: FC = () => {
  return (
    <div className="w-screen h-screen">
      <TopNav />
      <Description />
    </div>  
  );
}

export default Home;
