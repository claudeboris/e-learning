import React from 'react'
import { Link } from 'react-router-dom'
import '../Error.css'

const Error404 = () => {
  return (
    <div className="vh-100">
        <div className="authincation h-100">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-7">
                        <div className="form-input-content text-center error-page">
                            <h1 className="error-text fw-bold">404</h1>
                            <h4><i className="fa fa-exclamation-triangle text-warning"></i> La page recherchée est introuvable !</h4>
                            <p>Il se peut que vous ayez mal saisi l'adresse ou que la page ait été déplacée.</p>
                            <div>
                                <Link className="btn" style={{backgroundColor: '#ed563b', color: 'white'}} to="/">Retour à l'accueil</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error404