import React from 'react';
import "./NavBarVert.scss"
import iconZen from "../../Assets/Image/iconZen.svg";
import iconSwimming from "../../Assets/Image/iconSwimming.svg";
import iconBike from "../../Assets/Image/iconBike.svg";
import iconBodyBuilding from "../../Assets/Image/iconBodyBuilding.svg";

const NavBarVert = () => {
    return (
        <div className="container-nav-vertical">
            <div className="nav-items">
                <span className="item"> <img src={iconZen} alt=""/></span><span className="item"><img src={iconSwimming}
                                                                                                      alt=""/></span><span
                className="item"><img src={iconBike} alt=""/></span><span
                className="item"><img src={iconBodyBuilding} alt=""/></span>
            </div>
        </div>
    );
};

export default NavBarVert;