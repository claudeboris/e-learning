import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css'

function Header() {

  const [navColor, setNavColor] = useState("white")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ToggleBut = () => {
    setNavColor("black")
  }
  
  const CloseBut = () => {
    setNavColor("white")
  }
  


  return (
    <>
      {['md'].map((expand) => (
          <Navbar key={expand} className="header_area"  expand={expand} >
            <Container fluid>
              <Navbar.Brand className='title_header' href="#">It's Easy</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={ToggleBut}/>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton onClick={CloseBut}>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{color: "#ed563b"}}>
                  It's Easy
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='link_header' href="/" style={{color: navColor}}>Accueil</Nav.Link>
                    <Nav.Link className='link_header' href="/cours" style={{color: navColor}}>Cours</Nav.Link>
                   {/*  <Nav.Link className='link_header' href="/bibliotheque" style={{color: navColor}}>Bibliothèque</Nav.Link> */}
                    <Nav.Link className='link_header' href="/communaute" style={{color: navColor}}>Communauté</Nav.Link>
                    <Nav.Link className='link_header' href="" style={{color: navColor}} onClick={handleShow}>Contact</Nav.Link>
                    <Button className="button_header" href='/connexion' target='_blank'>Se connecter</Button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nom&Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="nom&prenom"
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Objet</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="objet"
                  />
              </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adress Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
             Envoyer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;