import styled from 'styled-components'

export const TextField = styled.div<{status: string}>`
    margin-bottom: 1.375rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
        ${({status}) => 
        `border: 1px solid ${status === 'error'? `var(--error)` : '#C2C3C5'};`
        
    }
        background: rgba(255, 255, 255, 0.00);
        padding: 1rem 0.5rem;
        font-size: 1rem;
    }
`

export const Error = styled.p`
    color: var(--error);
`
