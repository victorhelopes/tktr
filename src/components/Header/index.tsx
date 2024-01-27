import { useNavigate } from 'react-router-dom';
import * as S from './styles'

interface headerInterface {
    image: string;
}

export function Header({image}: headerInterface){
    const navigate = useNavigate();

    function Logout(){
        localStorage.removeItem('user');
        navigate('/Login')
        return ;
    }


    return(
        <S.Header className='Container'>
                <h2>
                    LOGO
                    <S.Underline/>
                </h2>
                <S.ImageAndLogout>
                    <img src={image} alt=''/>
                    <p onClick={Logout}>SAIR</p>
                </S.ImageAndLogout>
        </S.Header>
    )
}