import './ProfileCard.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Artist from '../interfaces/Artist';

function ProfileCard({ firstName, lastName, imgUri, id, description }: Artist) {
    var title = description;
    if (description.length > 150) {       
        description = description.substring(0, 150) + "...";
    }

    return (

        <Card className='profilCard' bg='light' style={{ width: '18rem' }}>
            <Card.Link href={"/artist/" + id}>
            <Card.Img alt='photo de profil' variant="top" src={imgUri}  />
            <Card.Body>
                <Card.Title>{firstName} {lastName}</Card.Title>
                <Card.Text title={title}>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>25€/heure</ListGroup.Item>
                <ListGroup.Item>ProTools</ListGroup.Item>
                <ListGroup.Item>Paris</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={"/artist/" + id}>Voir les details de l'artiste</Card.Link>
            </Card.Body>
            </Card.Link>
        </Card>)
}

export default ProfileCard;