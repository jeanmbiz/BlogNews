import { EmailIcon, MainUserStyled, URLIcon, UserNewIcon } from "./styles";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { iUser } from "../../interfaces/Interfaces";
import Loader from "../Loader/Loader";

const User = () => {
  const { id } = useParams();
  const [user, serUser] = useState<iUser>();
  const [loading, setloading] = useState<Boolean>(true);

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        serUser(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <MainUserStyled>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section>
            <figure>
              <UserNewIcon />
            </figure>
            <span>
              <h1> {user?.username} </h1>
              <div>
                <Link to={`https://www.${user?.website}`}>
                  <URLIcon />
                </Link>
                <Link to={`mailto:${user?.email}`}>
                  <EmailIcon />
                </Link>
              </div>
            </span>
          </section>
          <aside>
            <h2>SOBRE</h2>
            <h3>
              {user?.name}, trabalha na empresa {user?.company.name} , mora na{" "}
              {user?.address.street}, {user?.address.suite} na cidade de{" "}
              {user?.address.city} com CEP {user?.address.zipcode}.
            </h3>
          </aside>
          <div>
            <h6>MAPA DA LOCALIZAÇÃO GEOGRÁFICA DO USUÁRIO</h6>
          </div>
        </>
      )}
    </MainUserStyled>
  );
};

export default User;
