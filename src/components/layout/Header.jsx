import "./Header.css";
import Navigation from "./Navigation";
import SearchField from "../ui/SearchField";

const Header = ({ setProductList }) => {
  return (
    <header>
      <div>
        <a href="/">메인 로고</a>
      </div>
      <SearchField setProductList={setProductList} />
      <Navigation />
    </header>
  );
};

export default Header;
