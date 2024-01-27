import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";

import { postInterface } from "../../types/post";
import { userInterface } from "../../types/user";

import * as S from './styles'
import { Checkbox } from "../../components/Checkbox";
import { useNavigate } from "react-router-dom";
import { PhotosCarousel } from "../../components/PhotosCarousel";
import { photoInterface } from "../../types/photo";

export function Feed(){
    const navigate = useNavigate();

    const [posts, setPosts] = useState<postInterface[]>([]);
    const [users, setUsers] = useState<userInterface[]>([]);
    const [photos, setPhotos] = useState<photoInterface[]>([]);

    function getPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((json)=>{
            setPosts(json)
        })
    }

    function getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=>{
            setUsers(json)
            console.log(json)
        })
    }

    function getPhotos(){
        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
        .then((response)=> response.json())
        .then((json)=>{
            setPhotos(json)
        })
        
    }

    function postCreator(userId: number){
        const userCreator = users.find((user: userInterface) => user.id === userId);
        if(userCreator){
            return userCreator.name
        }
        return 'Usuário não encontrado'
    }

    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(!user){
            navigate('/login')
            return
        }
        getPosts();
        getUsers();
        getPhotos();
        
    },[navigate])


    return(
        <>
            <Header image="src"/>
            <S.Row className="Container">
                <S.Posts>
                <PhotosCarousel photos={photos.slice(0, 5)} />
                    {posts.map((post: postInterface)=>{
                        return <Post 
                            postId={post.id}
                            creator={postCreator(post.userId)} 
                            title={post.title} 
                            body={post.body} 
                        />
                    })}
                </S.Posts>
                <S.Tasks>
                    <p className="Title">Tarefas</p>
                    <S.Underline/>
                    <Checkbox label="Completas"/>
                    <Checkbox label="Incompletas"/>
                </S.Tasks>
            </S.Row>
        </>
    );
}