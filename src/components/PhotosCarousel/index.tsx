import { useState } from 'react'
import * as S from './styles'
import { photoInterface } from '../../types/photo';

interface carousel {
    photos: photoInterface[];
}

export function PhotosCarousel({photos}: carousel){
    const [photoSelected, setPhotoSelected] = useState<number>(1);

    return(
        <S.Carousel>
            <img src={photos[photoSelected]?.url} alt="Não foi possível carregar foto"/>
            {photos.length > 1 && 
            <S.Row>
                {photos.map((_, index)=>{
                    return (
                        <S.Buttons>
                            <S.SelectPhoto onClick={()=>{setPhotoSelected(index)}} selected={photoSelected === index}/>
                        </S.Buttons>
                    )
                })}
            </S.Row>
            }
        </S.Carousel>
    )
}