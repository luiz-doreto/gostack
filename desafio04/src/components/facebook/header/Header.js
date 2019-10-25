import React from 'react';
import './Header.css';

const facebookLogo = require('../../../assets/facebook-logo.png');
const profile = require('../../../assets/account-circle.png');

// "https://picsum.photos/40/?random"

function Header() {
    return (
        <div className="header">
            <img id="logo" src={facebookLogo}/>
            <div class="profile">
                <label>Meu perfil</label>
                <img src={profile}/>
            </div>
        </div>
    );
}

export default Header;