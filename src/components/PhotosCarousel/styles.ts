import styled from "styled-components";

export const Carousel = styled.div`
    img{
        width: 100%;
        height: 100%;
        max-height: 24rem;
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 4rem;
`

export const SelectPhoto = styled.div<{selected: boolean}>`
    border-radius: 50%;
    color: white;
    border: 0.125rem solid;
    width: 1rem;
    height: 1rem;

    cursor: pointer;

    ${({selected}) => 
        selected && `background-color: white};`
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;