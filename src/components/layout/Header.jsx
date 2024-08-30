import "./Header.css";
import Navigation from "./Navigation";
import SearchField from "../ui/SearchField";

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">메인 로고</a>
      </div>
      <SearchField />
      <Navigation />
    </header>
  );
};

export default Header;
