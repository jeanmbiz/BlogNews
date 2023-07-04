import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { iPost } from "../../interfaces/Interfaces";
import api from "../../services/api";
import Loader from "../Loader/Loader";
import {
  CommentCardStyled,
  LinkComments,
  LinkUser,
  MainCommentStyled,
  PostIcon,
  SectionStyled,
  UserIcon,
} from "./styles";

const PostComments = () => {
  const { id } = useParams();
  const [postCommentsById, setPostCommentsById] = useState<iPost>();
  const [loading, setloading] = useState<Boolean>(true);

  useEffect(() => {
    api
      .get(`posts/${id}?_embed=comments&_expand=user`)
      .then((res) => {
        setPostCommentsById(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [id]);

  return (
    <MainCommentStyled>
      {loading ? (
        <Loader />
      ) : (
        <SectionStyled>
          <article>
            <h1>{postCommentsById?.title}</h1>
            <h2>{postCommentsById?.body}</h2>
          </article>
          <section>
            <>
              <div>
                <PostIcon />
                <LinkUser to={`/user/${postCommentsById?.userId}`}>
                  {" "}
                  by {postCommentsById?.user.name}{" "}
                </LinkUser>
              </div>
              <div>
                <h2>Comentários da Comunidade</h2>
              </div>

              {postCommentsById &&
                postCommentsById.comments.map((comment) => (
                  <CommentCardStyled key={comment.id}>
                    <span>
                      <UserIcon />
                      <LinkComments to={`mailto:${comment.email}`}>
                        {" "}
                        {comment.name}{" "}
                      </LinkComments>
                    </span>
                    <h4>{comment.body}</h4>
                  </CommentCardStyled>
                ))}
            </>
          </section>
        </SectionStyled>
      )}
    </MainCommentStyled>
  );
};

export default PostComments;
