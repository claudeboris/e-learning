import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Register.css'
import image from "../../../../assets/images/image01.jpg"

function Register() {
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol className='first-row' sm='6'>

          <div className='d-flex flex-row ps-5 pt-5' style={{margin: "0 auto"}}>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">It's Easy</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3 text-center" style={{letterSpacing: '1px'}}>S'inscrire</h3>

            <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Nom' id='form1' type='text' size="lg"/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Prénom' id='form2' type='text' size="lg"/>
                </MDBCol>
              </MDBRow>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Adress email' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Mot de passe' id='formControlLg' type='password' size="lg"/>

            <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="j'accepte la politique de confidentialité" />
              </div>

            <MDBBtn className="mb-4 px-5 mx-5 w-100 button-login" size='lg'>S'inscrire</MDBBtn>
            <p className='ms-5 '>Vous avez un compte? <a href="connexion" className="link-infos">Se connecter</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0 fixed'>
          <img src={image}
            alt="Loginimage" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;