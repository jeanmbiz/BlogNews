import styled from "styled-components";
import {MdPostAdd} from 'react-icons/md'


export const PostIConStyled = styled(MdPostAdd)`
    color: var(--color-grey-100);
    font-size: 2rem;

    @media screen and (min-width: 560px) {
        font-size: 3rem;
    }


`

export const MainStyled = styled.main`
    background-color: var(--color-white) ;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    height: 100%;

    section{
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
    }

    @media screen and (min-width: 560px) {
    }
`

export const CardPost = styled.article`
    border: 3px solid var(--color-grey-100);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 130px;
    padding: 5px;
    


    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    summary{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 5px;
    }

    h2{
        font-size: 1rem;
        color: var(--color-secondary);

    }

    h3{
        font-size: 0.8rem;
        line-height: 14px;
    }
    h4{
        display: none;
    }
    h5{
        font-size: 0.8rem;
        color: var(--color-grey-50);

    }



    @media screen and (min-width: 560px) {

        margin: 0px 50px;

        h2{
            font-size: 1.3rem;
        }
        h3{
            font-size: 1rem;
            line-height: 20px;
        }
        h4{
            display: inline-block;
            font-size: .8;
            line-height: 18px;
        }
        h5{
            font-size: .8rem;

        }
    
     }
    
    
    
    
    `