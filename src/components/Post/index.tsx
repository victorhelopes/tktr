import { useEffect, useState } from 'react';
import { comentsInterface } from '../../types/coments';
import { Textfield } from '../Textfield';

import * as S from './styles'

import { Button } from '../Button';
import avatar from '../../assets/avatar.png'

interface showPostInterface {
    postId: number;
    title: string;
    body: string;
    creator: string;
}

export function Post({postId, title, body, creator}: showPostInterface){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comentary, setComentary] = useState<string>('');

    const [comentaries, setComentaries] = useState<comentsInterface[]>([]);
    const [showComentarys, setShowComentarys] = useState(false)

    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [comentaryError, setComentaryError] = useState<string>('');

    function createComentary(){
        setNameError('');
        setEmailError('');
        setComentaryError('');
    
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!email.length || !email.match(validRegex)) setEmailError('Email inválido')
        if(!name || !name.length) setNameError('Campo obrigatório')
        if(!comentary || !comentary.length)setComentaryError('Campo obrigatório')

        if(nameError === '' && emailError === '' && comentaryError === ''){
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
                method: 'POST',
                body: JSON.stringify({
                    postId: postId,
                    name:  name,
                    email: email,
                    body: 'bar',
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    setName('');
                    setEmail('');
                    setComentary("");
                });
        }
    }

    useEffect(()=>{
        if(showComentarys)
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response)=> response.json())
            .then((json)=>{
                setComentaries(json)
            })        
    },[showComentarys, postId])

    return(
        <S.PostBody>
            <S.PostInfo>
                <h2>{title}</h2>
                <S.Subtitle>
                    <p>Publicado por </p>
                    <p>{creator}</p>
                </S.Subtitle>
                <p>{body}</p>
                <Button label='Ver comentários' buttonFunction={()=>{setShowComentarys(!showComentarys)}}/>
            </S.PostInfo>

            {showComentarys &&  
                <>
                    <h4>Comentários</h4>
                    <S.Underline/>
                    {comentaries.map(coment =>{ return (
                        <S.Coment>
                            <S.Row>
                                <div>
                                    <img src={avatar} alt=''/>
                                </div>
                                <div>
                                    <h4>{coment.name}</h4>
                                    <p>{coment.body}</p>
                                </div>
                            </S.Row>
                            </S.Coment>
                    )})}
                    <S.ComentForm>
                        <h3>Deixe seu comentário</h3>
                        <S.RowInput>
                            <Textfield value={name} type='text' label='' placeholder='Nome' status='' errorMessage={nameError} setValue={setName}/>
                            <Textfield value={email} type='email' label='' placeholder='E-mail' status='' errorMessage={emailError} setValue={setEmail}/>
                        </S.RowInput>
                        <S.Row>
                            <textarea name="comentary" placeholder='Comentário' cols={40} rows={5} onChange={(e)=>{
                                setComentary(e.target.value)
                            }}/>
                        </S.Row>
                        <Button label='Enviar comentário' buttonFunction={()=>{createComentary()}}/>
                    </S.ComentForm>
                </>
            }
        </S.PostBody>
    )
}