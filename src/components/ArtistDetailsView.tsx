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
            imgUri: './../assets/profil/photo-profil_test.jpg',
            description: "Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
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