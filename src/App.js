import React from 'react';
import { Button, Alert, Card, Navbar, Nav, Container, Form, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <ThemeSwitcher />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-4">
        <h1>React Bootstrap Custom Theme</h1>
        <div className="mb-3">
          <Button variant="primary" className="me-2">Primary Button</Button>
          <Button variant="secondary" className="me-2">Secondary Button</Button>
          <Button variant="success" className="me-2">Success Button</Button>
          <Button variant="danger" className="me-2">Danger Button</Button>
          <Button variant="warning" className="me-2">Warning Button</Button>
          <Button variant="info" className="me-2">Info Button</Button>
          <Button variant="light" className="me-2">Light Button</Button>
          <Button variant="dark" className="me-2">Dark Button</Button>
          <Button variant="link" className="me-2">Link Button</Button>
        </div>

        <div className="mb-3">
          <Alert variant="primary">This is a primary alert!</Alert>
          <Alert variant="secondary">This is a secondary alert!</Alert>
          <Alert variant="success">This is a success alert!</Alert>
          <Alert variant="danger">This is a danger alert!</Alert>
          <Alert variant="warning">This is a warning alert!</Alert>
          <Alert variant="info">This is an info alert!</Alert>
          <Alert variant="light">This is a light alert!</Alert>
          <Alert variant="dark">This is a dark alert!</Alert>
        </div>

        <div className="mb-3">
          <Card className="bg-primary mb-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Primary Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="light">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="bg-secondary mb-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Secondary Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="light">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="bg-success mb-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Success Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="light">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <Form className="mb-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <InputGroup className="mb-3">
          <InputGroup.Text>@</InputGroup.Text>
          <FormControl placeholder="Username" aria-label="Username" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl placeholder="Recipient's username" aria-label="Recipient's username" />
          <InputGroup.Text>@example.com</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-1">
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
          <FormControl aria-label="Text input with dropdown button" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl placeholder="Text input with dropdown button" aria-label="Text input with dropdown button" />
          <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-2" align="end">
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
    </div>
  );
};

export default App;
