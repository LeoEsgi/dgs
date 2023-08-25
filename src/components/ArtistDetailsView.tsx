import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ProfileCard from './ProfileCard'
import Artist from '../interfaces/Artist';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


function ArtistDetailsView() {

    const { id } = useParams()
    if (id != undefined) {
        const artist: Artist = {
            id: +id ? +id : 0,
            firstName: 'Léo',
            lastName: 'Davière',
            imgUri: '../assets/profil/photo-profil_test.jpg'
        }
        return (
            <Container>
                <Image src={artist.imgUri} roundedCircle />
                {artist.id}
                {artist.firstName}
                {artist.lastName}


            </Container>
        );
    }
    else {
        return (
            <></>
        )
    }
}

export default ArtistDetailsView;