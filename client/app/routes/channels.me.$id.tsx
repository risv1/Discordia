import { useParams } from "@remix-run/react";
import Dashboard from "~/components/channels/Dashboard";

const MeMessagePage = () => {
  const { id } = useParams();

  return (
    <>
      <Dashboard>
        <h1>MeMessagePage: {id}</h1>
      </Dashboard>
    </>
  );
};

export default MeMessagePage;
