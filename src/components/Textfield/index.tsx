import './styles.css'

interface textfieldInterface {
    placeholder: string;
    label: string;
    type: 'number' | 'password' | 'text' | 'email'
    status: 'error' | ''
    errorMessage: string;
    setValue: (value : string)=>void;
}

export function Textfield({placeholder, label, type, status, errorMessage, setValue}:textfieldInterface ){
    return(
        <div className='textField'>
            <label>{label}</label>
            <input className={status} placeholder={placeholder} type={type} onChange={(e)=>{setValue(e.target.value)}}/>
             <p>{errorMessage}</p>
        </div>
    );
}