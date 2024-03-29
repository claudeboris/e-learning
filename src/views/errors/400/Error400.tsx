import React from 'react'
import { Link } from 'react-router-dom'
import '../Error.css'

const Error400 = () => {
  return (
    <div className='vh-100'>
        <div className="authincation h-100">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-5">
                        <div className="form-input-content text-center error-page">
                            <h1 className="error-text fw-bold">400</h1>
                            <h4><i className="fa fa-thumbs-down text-danger"></i> Bad Request</h4>
                            <p>Your Request resulted in an error</p>
                            <div>
                                <Link className="btn" style={{backgroundColor: '#ed563b', color: 'white'}} to="/">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error400