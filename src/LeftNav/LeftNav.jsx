import Logo from "./Logo";
import Menu from "./Menu";
import NavItem from "./NavItem";
import Config from "./PanelButtons/Config";

const LeftNav = () => {
  return (
    <div
      style={{ backgroundColor: "#162d3c" }}
      className="w-12 border-r-0 flex flex-col items-center"
    >
      <NavItem>
        <Logo />
      </NavItem>
      <NavItem>
        <Menu />
      </NavItem>

      <hr className="w-full my-4 " />
      {/*<NavItem>
        <Info />
      </NavItem>
      <NavItem>
        <Data />
      </NavItem>
      <NavItem>
        <Tables />
  </NavItem>*/}
      <NavItem id="config">
        <Config />
      </NavItem>
    </div>
  );
};

export default LeftNav;
