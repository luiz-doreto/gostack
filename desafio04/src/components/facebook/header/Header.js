import React from 'react';

const facebookLogo = require('../../../assets/facebook-logo.png');
const profile = require('../../../assets/account-circle.png');

function Header() {
    return (
        <div className="header">
            <img id="logo" src={facebookLogo}/>
            <div className="profile">
                <label>Meu perfil</label>
                <img src={profile}/>
            </div>
        </div>
    );
}

export default Header;