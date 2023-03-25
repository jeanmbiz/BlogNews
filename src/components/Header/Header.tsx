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
          <input type="text" placeholder="Digitar Pesquisa" />
          <button>Pesquisar</button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
