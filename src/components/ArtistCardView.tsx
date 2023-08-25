import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileCard from './ProfileCard'
import Artist from '../interfaces/Artist';

const data: Array<Artist> = [
    {
        firstName: 'Diego', lastName: 'Dupont', imgUri: '', id: 1
    },
    {
        firstName: 'Nathan', lastName: 'Matthieu', imgUri: '', id: 2
    },
    {
        firstName: 'Paul', lastName: 'Bouli', imgUri: '', id: 3
    },
    {
        firstName: 'Antoine', lastName: 'Segl', imgUri: '', id: 4
    },
    {
        firstName: 'Diego', lastName: 'Dupont', imgUri: '', id: 5
    },
    {
        firstName: 'Nathan', lastName: 'Matthieu', imgUri: '', id: 6
    },
    {
        firstName: 'Paul', lastName: 'Bouli', imgUri: '', id: 7
    },
    {
        firstName: 'Antoine', lastName: 'Segl', imgUri: '', id: 8
    },
    {
        firstName: 'Diego', lastName: 'Dupont', imgUri: '', id: 9
    },
    {
        firstName: 'Nathan', lastName: 'Matthieu', imgUri: '', id: 10
    },
    {
        firstName: 'Paul', lastName: 'Bouli', imgUri: '', id: 11
    },
    {
        firstName: 'Antoine', lastName: 'Segl', imgUri: '', id: 12
    },
    {
        firstName: 'Diego', lastName: 'Dupont', imgUri: '', id: 13
    }

]


function ArtistCardView() {
    return (
        <Container>
            <Row>
                {data.map(artist => <Col key={artist.id}><ProfileCard firstName={artist.firstName} lastName={artist.lastName} imgUri={artist.imgUri} id={artist.id} ></ProfileCard></Col>)}
            </Row>
        </Container>
    );
}

export default ArtistCardView;