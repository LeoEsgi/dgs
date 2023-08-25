import Container from "react-bootstrap/esm/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/esm/Button";

function LoginForm() {

    return (
        <Container>
            <Tabs
                defaultActiveKey="login"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="login" title="Login">
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="register" title="Register">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupFirstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupLastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Tab>

            </Tabs>
        </Container>
    )

}

export default LoginForm;   