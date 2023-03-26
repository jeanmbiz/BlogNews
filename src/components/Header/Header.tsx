import { Link } from "react-router-dom";
import { HeaderHouseStyled, HeaderStyled } from "./styles";


const Header = () => {
  return (
    <HeaderStyled>
      <div className="mainContainer">
        <section>
          <Link to={"/"}>
            <HeaderHouseStyled />
          </Link>
        </section>
        <div>
          <h1>Blog</h1>
          <h2>News</h2>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
