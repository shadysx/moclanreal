import React, {useState, useEffect} from 'react'
import { getLinkList } from '../Firebase';

//Carousel
import styled from 'styled-components';

const ImageContainer = styled.div`
    display: grid;
    margin: 20px;
    height: auto;
    grid-template-columns: auto auto auto auto auto;
    column-gap: 10px;
    row-gap: 15px;
`

const Image = styled.img`
    width: 100%;
    filter: grayscale(80%);
`
//images for test 
const images = [
    "https://scontent.cdninstagram.com/v/t51.29350-15/248694082_143314961359239_7429460886882716207_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=gxepy136PPMAX-gT-H2&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=45bd0c10dc149fa690c876afe622cbdd&oe=61871E68",
    "https://scontent.cdninstagram.com/v/t51.29350-15/246833371_930244207870717_2318598121818626388_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=UVbaS898u60AX_wbOX7&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=b85d6c2d49eeca18abcd8a036708405f&oe=61872837",
    "https://scontent.cdninstagram.com/v/t51.29350-15/247375896_118740057229563_9084838775418094117_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=8jyJW2zL90QAX9fFteA&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=7fbe0a75cf464029a1dfe8d3675c2e5b&oe=61877400",
    "https://scontent.cdninstagram.com/v/t51.29350-15/247058730_1709822985873921_4569238320394030652_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=z0aSP4ilBrUAX8jAYAz&_nc_oc=AQnUe8kLCBb6FBWNpeWzns8EVsgEL0Zxp0rUCZJ3oBduMYcFC5G4hMWfGLmZEpizmdpCcIewKgpTrUpYPXTjWkQ0&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=11a57c899f6cd3fc167084f77b5e028a&oe=61879D5F",
    "https://scontent.cdninstagram.com/v/t51.29350-15/245496729_1307774413013681_1195662014244946641_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=l2he1nnnnpoAX9lrt-K&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=57ab811e4f511008a2a3b3da1994049f&oe=618692FF"
]

const InstagramSection = () => {
    const [linkList, setLinkList] = useState([])

    const renderImages = (nb) => {
        const imageList = []
        let key = 0

        for (let i = 0; i < nb; i++) {
            imageList.push(<Image key={key} src={linkList[i]}/>) 
            key += 1
        }
        return imageList
    }


    useEffect(() => {
        const test = getLinkList().then(data => setLinkList(data[0].links))
    },[])

    return (
        <ImageContainer>
           {renderImages(5)} 
        </ImageContainer>
    )
}

export default InstagramSection
