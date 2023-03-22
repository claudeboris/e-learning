import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import './Footer.css'
import image from "../../../assets/images/image01.jpg"

 const Footer = () => {
  return (
    <div className='footer'>
      <div className="newletter">
        <div className="bbb-wrapper fl-wrap">
          <div className="subcribe-form fl-wrap">
            <div className="content-body">
              <div className="icon-box">
                <div className="d-flex" style={{alignItems: 'center'}}>
                  <i className="material-icons">&#xE151;</i> 
                  <p className='title-newsletter'> Newsletter</p>
                </div>
              </div>
              <form id="subscribe">
                  <input className="enteremail" name="EMAIL" id="subscribe-email" placeholder="Email" spellCheck="false" type="text" />
                  <button type="submit" id="subscribe-button" className="subscribe-button color-bg"><i className="fa fa-rss"></i> S'abonner</button>
                  <label htmlFor="subscribe-email" className="subscribe-message"></label>
              </form>
            </div>
          </div>
        </div>
      </div>
       <div className="container-fluid shadow" style={{position: 'relative'}}>
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark title-logo">
                <img alt="logo" src={image} width="30px" />
                <span className="ml-3 h5  font-weight-bold" style={{textDecoration: 'none', color: "#ed563b", marginLeft: "10px", marginTop: "5px"}}>It's EASY</span>
              </a>
              <p className="my-3" style={{ width: '250px' }}>
                We are creating High Quality Resources and tools to Aid developers during the
                developement of their projects
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Devwares
              </p>
              <CDBBox className='column'>
                <a href="/">Resources</a>
                <a href="/">About Us</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Help
              </p>
              <CDBBox className='column'>
                <a href="/">Support</a>
                <a href="/">Sign Up</a>
                <a href="/">Sign In</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Products
              </p>
              <CDBBox className='column'>
                <a href="/">Windframe</a>
                <a href="/">Loop</a>
                <a href="/">Contrast</a>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <div className="copy">
            <small className="text-center mt-1">&copy; développé par BORIS, 2023. Tout droit est reservé.</small>
          </div>
    </div>
    </div>
  );
};

export default Footer