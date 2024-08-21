import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="flex flex-col gap-3">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
