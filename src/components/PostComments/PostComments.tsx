import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { iPost } from "../../interfaces/Interfaces";
import api from "../../services/api";
import {
  CommentCardStyled,
  MainCommentStyled,
  PostIcon,
  SectionStyled,
  UserIcon,
} from "./styles";

const PostComments = () => {
  const { id } = useParams();
  const [postCommentsById, setPostCommentsById] = useState<iPost>();

  useEffect(() => {
    api
      .get(`posts/${id}?_embed=comments&_expand=user`)
      .then((res) => setPostCommentsById(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <MainCommentStyled>
      <SectionStyled>
        <article>
          <h1>{postCommentsById?.title}</h1>
          <h2>{postCommentsById?.body}</h2>
        </article>
        <section>
          <>
            <div>
              <PostIcon />
              <h1>by {postCommentsById?.user.name}</h1>
            </div>
            <div>
              <h2>Comentários da Comunidade</h2>
            </div>

            {postCommentsById &&
              postCommentsById.comments.map((comment) => (
                <CommentCardStyled key={comment.id}>
                  <span>
                    <UserIcon />
                    <Link to={`mailto:${comment.email}`}> {comment.name} </Link>
                  </span>
                  <h4>{comment.body}</h4>
                </CommentCardStyled>
              ))}

            {/* <CommentCardStyled>
            <span>
              <UserIcon />
              <a href="mailto:jeanmbiz@hotmail.com">Jean Michel Biz</a>
            </span>
            <h4>
              non et atque\noccaecati deserunt quas accusantium unde odit nobis
              qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui
              rerum deleniti ut occaecati
            </h4>
          </CommentCardStyled> */}
          </>
        </section>
      </SectionStyled>
    </MainCommentStyled>
  );
};

export default PostComments;
