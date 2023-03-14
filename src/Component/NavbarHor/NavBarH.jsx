import React from 'react';
import "./NavBarH.scss"
import logo from "../../Assets/Image/logo.png"

const NavBarH = () => {
    return (
        <div className="container-nav-horizontal">
            <div className="logo">
                <img src={logo} alt="logo_sport_see"/>
            </div>
            <div className="nav-items">
                <span>Accueil</span><span>Profil</span><span>Réglage</span><span>Communauté</span>
            </div>
        </div>
    );
};

export default NavBarH;