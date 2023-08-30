import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Artist from '../interfaces/Artist';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ArtistDetailsView() {

    const { id } = useParams()
    if (id != undefined) {
        const artist: Artist = {
            id: +id ? +id : 0,
            firstName: 'Léo',
            lastName: 'Davière',
            imgUri: 'https://hellomybusiness.fr/wp-content/uploads/2020/06/jacek-sniecikowski-WZbHIyrtkCI-unsplash-scaled-1-768x513.jpg',
            description: "Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
        }
        return (
            <Container>
                <Row className="justify-content-md-left">
                    <Col xs={6} md={6}>
                        <Image src={artist.imgUri} rounded fluid />
                    </Col>
                    <Col xs={6} md={6}>
                        <h4>{artist.firstName} {artist.lastName}</h4>
                    </Col>
                </Row>

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