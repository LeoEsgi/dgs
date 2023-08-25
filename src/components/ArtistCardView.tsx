import './ArtistCardView.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileCard from './ProfileCard'
import Artist from '../interfaces/Artist';

const data: Array<Artist> = [
    {
        firstName: 'Diego', lastName: 'Dupont', imgUri: 'https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg', id: 1, description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },
    {
        firstName: 'Nathan', lastName: 'Matthieu', imgUri: '', id: 2,description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },
    {
        firstName: 'Paul', lastName: 'Bouli', imgUri: '', id: 3,description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },
    {
        firstName: 'Antoine', lastName: 'Segl', imgUri: '', id: 4,description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },
    {
        firstName: 'Diego', lastName: 'Dupont', imgUri: '', id: 5,description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },
    {
        firstName: 'Nathan', lastName: 'Matthieu', imgUri: '', id: 6,description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },
    {
        firstName: 'Paul', lastName: 'Bouli', imgUri: '', id: 7,description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },
    {
        firstName: 'Antoine', lastName: 'Segl', imgUri: '', id: 8, description:"Passionné par l'univers de l'ingénierie du son, je suis rigoureux, prévenant et intuitif. Je possède également une véritable capacité d'analyse et de synthèse. Curieux, réactif, j'ai eu á faire mes preuves en Belgique, en France et maintenant aux États-Unis. Animé d'une volonté quotidienne de m'améliorer, je sais gérer les situations de crise avec sang-froid et j'aime relever des défis."
    },


]


function ArtistCardView() {
    return (
        <Container>
            <Row>
                {data.map(artist => <Col key={artist.id}><ProfileCard firstName={artist.firstName} lastName={artist.lastName} imgUri={artist.imgUri} id={artist.id} description={artist.description}></ProfileCard></Col>)}
            </Row>
        </Container>
    );
}

export default ArtistCardView;