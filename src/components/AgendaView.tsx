import Container from 'react-bootstrap/Container';
import './AgendaView.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MouseEvent } from 'react';

const dayOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const hourOfDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

function AgendaView() {
    return (
        <Container onContextMenu={(e) => showContext(e)} className='agendaBlock' >
            <Row className='topRow'>
                {dayOfWeek.map(day =>
                    <Col className='dayCalendar'>
                        <p>{day}</p>
                    </Col>)}
            </Row>
            {hourOfDay.map(hour => 
            <Row className='insideRow'>
              
                    {dayOfWeek.map(day =>
                    <Col className='hourCol'></Col>
                    )}

                
            </Row>
            )}


        </Container>
    )

    function showContext(e: MouseEvent<HTMLElement, globalThis.MouseEvent>) {
        e.preventDefault();
    }

}

export default AgendaView;