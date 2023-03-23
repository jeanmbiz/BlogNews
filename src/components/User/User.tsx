import { EmailIcon, MainUserStyled, URLIcon, UserNewIcon } from './styles'
import { Link } from "react-router-dom"



const User = () => {


  return (
    <MainUserStyled>
        <section>
            <figure>
                <UserNewIcon/>
            </figure>
            <span>
            <h1>"username"</h1>
            <div>
                <Link to='https://www.globo.com'>
                <URLIcon/>
                </Link>
                <a href="mailto:jeanmbiz@hotmail.com">
                <EmailIcon/>
                </a>
            </div>
            </span>
        </section>
        <aside>
            <h2>SOBRE</h2>
            <h3>"name", trabalha na empresa "company.name", mora na Rua "address.street", aparamento "address.suite" na cidade de "address.city" com CEP "zipcode".</h3>
        </aside>
        <div>
            <h6>MAPA DA LOCALIZAÇÃO GEOGRÁFICA DO USUÁRIO</h6>
        </div>
    </MainUserStyled>
  )
}

export default User