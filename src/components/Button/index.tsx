import './styles.css'

interface buttonInterface {
    label: string;
    buttonFunction: ()=> void;
}

export function Button({label, buttonFunction}:buttonInterface){
    return(
        <button onClick={buttonFunction}>{label}</button>
    );
}