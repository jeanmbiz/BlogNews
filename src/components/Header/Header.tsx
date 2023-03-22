import { HeaderHouseStyled, HeaderStyled } from "./styles"

const Header = () => {
  return (
    <HeaderStyled>
    <div className="mainContainer">
      <section>
        <HeaderHouseStyled/>
      </section>
      <div>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <button>Pesquisar</button>
      </div>
    </div>
  </HeaderStyled>
  )
}

export default Header