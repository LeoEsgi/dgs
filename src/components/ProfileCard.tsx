import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Artist from '../interfaces/Artist';

function ProfileCard({ firstName, lastName, imgUri, id }: Artist) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgUri} />
            <Card.Body>
                <Card.Title>{firstName} {lastName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={"/artist/" + id}>View Artist Details</Card.Link>
            </Card.Body>
        </Card>)
}

export default ProfileCard;