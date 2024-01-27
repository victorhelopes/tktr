import * as S from './styles'

interface checkboxInterface{label: string}

export function Checkbox({label}: checkboxInterface){
    return(
        <S.Row>
            <S.Checkbox type='checkbox'/>
            <p>{label}</p>
        </S.Row>
    )
}