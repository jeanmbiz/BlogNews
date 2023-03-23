import { createContext } from 'react';
import { iChildrenProps, iUser } from '../../interfaces/Interfaces';
import { useEffect, useState } from 'react'
import { iPost } from '../../interfaces/Interfaces'
import api from '../../services/api'

interface iPostContext{
    postList: iPost[]
}

export const PostContext = createContext({} as iPostContext)

export const PostProvider = ({children}: iChildrenProps) => {

    const [postList, setPostList] = useState<iPost[]>([])
    const [userList, setUserList] = useState<iUser[]>([])


    useEffect(()=> {
      api.get('/posts').then(res => setPostList(res.data))
      .catch(err => console.log(err))
    },[])

    useEffect(()=>{
      api.get('/users').then(res => setUserList(res.data))
      .catch(err => console.log(err))
    },[])


    // const postFiltered = postList.map( post => {
    //   const userobj = userList.find(user => user.id === post.userId)
    //   return {
    //     ...postList,
    //     name: userobj?.name       
    //   }
    // })

    // console.log(postFiltered)





    
  return (
    <PostContext.Provider value={{postList}}>{children}</PostContext.Provider>
  )
}

export default PostContext