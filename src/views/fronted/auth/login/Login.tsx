import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Login.css'
import image from "../../../../assets/images/image01.jpg"
import { Link } from 'react-router-dom';

function Login() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <MDBContainer fluid>
      <MDBRow>

        <MDBCol className='first-row' sm='6'>

            <div className='d-flex flex-row ps-5 pt-5' style={{margin: "0 auto"}}>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">It's Easy</span>
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3 text-center" style={{letterSpacing: '1px'}}>Se connecter</h3>


            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <p className="small" style={{display: 'flex', justifyContent: 'end'}}><Link className="text-muted" to="#!" onClick={handleShow}>Mot de passe oublié?</Link></p>
            <MDBBtn className="mb-4 px-5 mx-5 w-100 button-login" size='lg'>Se connecter</MDBBtn>
            <p className='ms-5 '>Vous n'avez pas un compte? <a href="inscription" className="link-infos">S'inscrire</a></p>

            </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0 fixed'>
          <img src={image}
            alt="Loginimage" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Mot de passe oublié</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adress Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
          />
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

export default Login;