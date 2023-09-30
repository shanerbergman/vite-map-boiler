import { useContext } from "react";
import { Context } from "../context";

const NavItem = ({ id, children }) => {
  const { panels, setPanels } = useContext(Context);
  const handleClick = () => {
    if (panels.includes(id)) {
      setPanels(panels.filter((panel) => panel !== id));
    } else {
      setPanels([...panels, id]);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="h-12 flex justify-center items-center text-orange-500 text-lg"
    >
      {children}
    </div>
  );
};

export default NavItem;
