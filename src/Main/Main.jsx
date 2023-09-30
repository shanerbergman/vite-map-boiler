import { useContext } from "react";
import { Context } from "../context";
import Map from "./Map/Map";
import Panel from "./Panels/Panel";
const Main = () => {
  const { panels } = useContext(Context);

  console.log("panels", panels);
  return (
    <main className="absolute top-12 bottom-0 left-12 right-0 p-1 flex">
      {panels.map((panel) => {
        return <Panel key={panel} id={panel} />;
      })}
      <Map />
    </main>
  );
};

export default Main;
