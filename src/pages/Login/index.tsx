import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Textfield } from "../../components/Textfield";

import './styles.css'
import { useNavigate } from "react-router-dom";

export function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    useEffect(()=>{
        if(username !== '' && username !== null){
            setUsernameError(null);
        }
        if(password !== '' && password !== null){
            setPasswordError(null);
        }
    },[username, password])

    function login(){    
        if(!password){
            setPasswordError('Campo obrigatório!')
        }
        if(!username){
            setUsernameError('Campo obrigatório!')
        }

        if(password && username)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=>{
            const user = json.find((element: any) => element.username === username)
            if(user){
                navigate('/feed')
                return;
            }
            setUsernameError('Verifique se foi preenchido corretamente')
            setPasswordError('Verifique se foi preenchido corretamente')
        })
    }

    return (
        <div className="Login">
            <h1>Relize seu login e acesse o feed</h1>
            <Textfield 
                placeholder="Nome" 
                label="Nome:" 
                type="text"
                status={usernameError? 'error' : ''}
                errorMessage={usernameError || ''}
                setValue={setUsername}
            />
            <Textfield 
                placeholder="Senha" 
                label="Senha:" 
                type="password"
                status={passwordError? 'error' : ''}
                errorMessage={passwordError || ''}
                setValue={setPassword}
            />
            <Button label="Entrar" buttonFunction={login}/>
        </div>
    );
}