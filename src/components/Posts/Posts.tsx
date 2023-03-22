import { useContext } from 'react'
import PostContext from '../../Providers/Context/PostContext'
import { CardPost, MainStyled, PostIConStyled } from './styles'
import { Link } from 'react-router-dom'



const Posts = () => {
  const { postList } = useContext(PostContext)

  return (
    <>
    <MainStyled>
    <>

      
        <section>
        <>

      {/* {
        postList.map(post => (

<CardPost key={post.id} >
                <div>
                    <PostIConStyled/>
                </div>
                <summary>
                <button id='name' onClick={()=> console.log(`userId: ${post.userId} `)}> {post.userId} </button>
                <h3>título: sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                <h4>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</h4>
                <button id='comment' onClick={()=> console.log(`commentId: ${post.id} `)} >Ver conteúdo e comentários</button>
                </summary>
            </CardPost>

        ))  
      } */}

            <CardPost>
                <div>
                    <PostIConStyled/>
                </div>
                <summary>
                <Link to='/post.userId' >Leanne Graham</Link>
                <h3>título: sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                <h4>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</h4>
                <Link to={'/post.id'} >Ver conteúdo e comentários</Link>
                </summary>
            </CardPost>
            </>
        </section>
        </>
    </MainStyled>
    </>
  )
}

export default Posts