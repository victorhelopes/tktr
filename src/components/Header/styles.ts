import styled from "styled-components";

export const Header = styled.div`
   
    height: 7rem;
    background-color: var(--black-color);

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        width: 100%;
        text-align: center;
        color: var(--white-color);
        font-weight: bold;
        background-color: var(--black-color);
    }

    p{
        color: var(--white-color);
        cursor: pointer;
    }
`

export const Underline = styled.div`
    height: 3px;
    width: 150px;
    margin: auto;
    background-color: var(--primary-color);
`

export const ImageAndLogout = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    right: 0;

    img {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        margin-right: 0.5rem;
    }
`