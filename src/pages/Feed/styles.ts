import styled from 'styled-components'

export const Posts = styled.div`
    gap: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 51.9rem;
`

export const Row = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`;

export const Tasks = styled.div`
    background-color: var(--white-color);
    padding: 1rem;
    height: fit-content;
    width: 100%;
    max-width: 17rem;

    p {
        text-align: center;
    }

    input {
        margin-bottom: 0.5rem;
    }
`

export const Underline = styled.div`
    height: 3px;
    width: 150px;
    background-color: var(--black-color);
    margin: auto;
    margin-bottom: 2rem;
`