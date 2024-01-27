import * as S from'./styles'

interface textfieldInterface {
    placeholder: string;
    value: string;
    label: string;
    type: 'number' | 'password' | 'text' | 'email'
    status: 'error' | ''
    errorMessage: string;
    setValue: (value : string)=>void;
}

export function Textfield({placeholder, label, type, status, errorMessage, value, setValue}:textfieldInterface ){
    return(
        <S.TextField status={status}>
            <label>{label}</label>
            <input value={value} placeholder={placeholder} type={type} onChange={(e)=>{setValue(e.target.value)}}/>
             <S.Error>{errorMessage}</S.Error>
        </S.TextField>
    );
}