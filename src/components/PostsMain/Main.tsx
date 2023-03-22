import { useContext } from 'react'
import PostContext from '../../Providers/Context/PostContext'
import { CardPost, MainStyled, PostIConStyled } from './styles'



const Main = () => {
  const { postList } = useContext(PostContext)

  return (
    <>
    <MainStyled>
    <>

      
        <section>
        <>

      {
        postList.map(post => (

          <CardPost key={post.id} >
          <div>
              <PostIConStyled/>
          </div>
          <summary>
          <h2> {post.userId} </h2>
          <h3>título: {post.title} </h3>
          <h4> {post.body} </h4>
          <h5>Ver conteúdo e comentários</h5>
          </summary>
      </CardPost>

        ))  
      }

            <CardPost>
                <div>
                    <PostIConStyled/>
                </div>
                <summary>
                <h2>Leanne Graham</h2>
                <h3>título: sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                <h4>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</h4>
                <h5>Ver conteúdo e comentários</h5>
                </summary>
            </CardPost>
            </>
        </section>
        </>
    </MainStyled>
    </>
  )
}

export default Main