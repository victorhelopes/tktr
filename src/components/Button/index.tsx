import * as S from './styles'

interface buttonInterface {
    label: string;
    buttonFunction: ()=> void;
}

export function Button({label, buttonFunction}:buttonInterface){
    return(
        <S.Button onClick={buttonFunction}>{label}</S.Button>
    );
}