import { LinkStyled, LinkUserStyled, PostStyled } from "./styles";
import noImage from "../../assets/no_image.png";
import { useContext } from "react";
import PostContext from "../../Providers/Context/PostContext";


const Posts = () => {
  const { postList } = useContext(PostContext);

  return (
    <PostStyled>
      {postList.map((post) => (
        <section key={post.id}>
          <LinkStyled to={`/posts/${post.id}/comments`}>
            <article>
              <figure>
                <img src={noImage} alt={noImage} />
                <div>
                  <h2>NOTÍCIA</h2>
                </div>
              </figure>
            </article>
            <h1>{post.title}</h1>
          </LinkStyled>
          <div>
            <h3>por</h3>
            <LinkUserStyled to={`/user/${post.userId}`}>
              {" "}
              {post.user.name}{" "}
            </LinkUserStyled>
          </div>
        </section>
      ))}
    </PostStyled>
  );
};

export default Posts;
