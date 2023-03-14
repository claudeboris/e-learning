import React from "react";
import { Link } from "react-router-dom";
import './login.css'
import '../../../../assets/js/main'
import image1 from '../../../../assets/images/vectorpaint (1).png'
import image2 from '../../../../assets/images/avatar.svg'
import image3 from '../../../../assets/images/image.png'

const AdminLogin = () => {
    return (
        <>
            <img className="wave" src={image3} alt="" />
            <div className="containers">
                <div className="img">
                    <img src={image1} alt="" />
                </div>
                <div className="login-content">
                    <form action="index.html" className="form">
                        <img src={image2} alt="" />
                        <h4 className="title mt-2">Bienvenu sur votre page de connexion</h4>
                        <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                    <h5>Address Email</h5>
                                    <input type="text" className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i"> 
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    <h5>Mot de passe</h5>
                                    <input type="password" className="input" />
                            </div>
                        </div>
                        <Link to="#">Mot de passe oublié?</Link>
                        <input type="submit" className="btns" value="Se connecter" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin