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



    useEffect(()=> {
      api.get('posts/?_expand=user').then(res => setPostList(res.data))
      .catch(err => console.log(err))
    },[])

    
  return (
    <PostContext.Provider value={{postList}}>{children}</PostContext.Provider>
  )
}

export default PostContext