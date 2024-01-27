import styled from "styled-components";

export const PostBody = styled.div`
    padding: 1rem;
    background-color: var(--white-color);

    h4 {
        text-align: center;
        margin-top: 3rem;
    }
`

export const Subtitle  = styled.div`
    display: flex;
    margin: 0.5rem 0;

    p {
        font-weight: bold;
        color: var(--gray-color);
    }

    p:first-of-type{
        color: var(--primary-color); 
        margin-right: 0.25rem;
    }
`

export const Underline = styled.div`
    height: 3px;
    width: 150px;
    background-color: var(--black-color);
    margin: auto;
`

export const Coment = styled.div`
    h4{
        text-align: start;
        margin-bottom: 1rem;
        margin-top: 0;
        color: var(--black-color);
    }

    img {
        width: 4rem;
        height: 4rem;
    }

    color: #6D6D6D;
    padding: 2rem 0;
    border-bottom: 1px dashed;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
`

export const RowInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const PostInfo = styled.div`
    button{
        display: none;  
    }

    &:hover{
        button{
            display: block;
            position: relative;
            width: 100%;
            max-width: 300px;
        }
    }
`

export const ComentForm = styled.div`
    margin-top: 2rem;
    textarea {
        border: 1px solid #C2C3C5;
        margin-bottom: 1rem;
        padding: 1rem 0.5rem;
    }
    h3 {
        margin-bottom: 1.5rem;
    }
    button{
        width: 100%;
        max-width: 250px;
    }
`;