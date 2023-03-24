import { CommentCardStyled,  MainCommentStyled,  PostIcon, SectionStyled, UserIcon } from "./styles";

const PostComments = () => {
  return (
    
    <MainCommentStyled>
      <SectionStyled>
        <article>
          <h1>
            Título: sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </h1>
          <h2>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </h2>
        </article>
        <section>
          <div>
            <PostIcon />
            <h1>by Leanne Graham</h1>
          </div>
          <div>
            <h2>Comentários da Comunidade</h2>
          </div>

          <CommentCardStyled>
            <span>
              <UserIcon />
              <a href="mailto:jeanmbiz@hotmail.com">Jean Michel Biz</a>
            </span>
            <h4>
              non et atque\noccaecati deserunt quas accusantium unde odit nobis
              qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui
              rerum deleniti ut occaecati
            </h4>
          </CommentCardStyled>

          <CommentCardStyled>
            <span>
              <UserIcon />
              <a href="mailto:jeanmbiz@hotmail.com">Jean Michel Biz</a>
            </span>
            <h4>
              non et atque\noccaecati deserunt quas accusantium unde odit nobis
              qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui
              rerum deleniti ut occaecati
            </h4>
          </CommentCardStyled>

          <CommentCardStyled>
            <span>
              <UserIcon />
              <a href="mailto:jeanmbiz@hotmail.com">Jean Michel Biz</a>
            </span>
            <h4>
              non et atque\noccaecati deserunt quas accusantium unde odit nobis
              qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui
              rerum deleniti ut occaecati
            </h4>
          </CommentCardStyled>

          <CommentCardStyled>
            <span>
              <UserIcon />
              <a href="mailto:jeanmbiz@hotmail.com">Jean Michel Biz</a>
            </span>
            <h4>
              non et atque\noccaecati deserunt quas accusantium unde odit nobis
              qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui
              rerum deleniti ut occaecati
            </h4>
          </CommentCardStyled>

          <CommentCardStyled>
            <span>
              <UserIcon />
              <a href="mailto:jeanmbiz@hotmail.com">Jean Michel Biz</a>
            </span>
            <h4>
              non et atque\noccaecati deserunt quas accusantium unde odit nobis
              qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui
              rerum deleniti ut occaecati
            </h4>
          </CommentCardStyled>
        </section>
      </SectionStyled>
    </MainCommentStyled>
  );
};

export default PostComments;
