import { iChildrenProps } from '../interfaces/Interfaces'
import { PostProvider } from './Context/PostContext'



const Providers = ({children}: iChildrenProps) => {
  return (
    <PostProvider>
        {children}
    </PostProvider>
  )
}

export default Providers