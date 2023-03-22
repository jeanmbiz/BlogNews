import { useEffect, useState } from 'react'
import { iPost } from '../../interfaces/Interfaces'
import api from '../../services/api'
import { ArticleStyled, MainStyled, PostIConStyled } from './styles'



const Main = () => {

  const [postList, setPostList] = useState<iPost[]>([])

  useEffect(()=> {
    api.get('/posts').then(res => setPostList(res.data))
    .catch(error => console.log(error))
  },[])


  return (
    <>
    <MainStyled>
    <>
      
        <section>
        <>

      {
        postList.map(post => (

          <ArticleStyled>
          <div>
              <PostIConStyled/>
          </div>
          <summary>
          <h2> {post.userId} </h2>
          <h3>título: {post.title} </h3>
          <h4> {post.body} </h4>
          <h5>Ver conteúdo e comentários</h5>
          </summary>
      </ArticleStyled>

        ))  
      }

            <ArticleStyled>
                <div>
                    <PostIConStyled/>
                </div>
                <summary>
                <h2>Leanne Graham</h2>
                <h3>título: sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                <h4>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</h4>
                <h5>Ver conteúdo e comentários</h5>
                </summary>
            </ArticleStyled>
            </>
        </section>
        </>
    </MainStyled>
    </>
  )
}

export default Main