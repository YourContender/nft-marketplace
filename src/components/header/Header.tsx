import {FC} from 'react';
import logo from "../../img/logo.png";
import user from "../../img/user.png";
import "./header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
        <div className="header_logo">
            <img src={logo} alt="logo" />
            <span>NFT Marketplace</span>
        </div>

        <div className="header_nav">
            <span className="header_nav-item">Marketplace</span>
            <span className="header_nav-item">Rankings</span>
            <span className="header_nav-item">Connect a wallet</span>
            <button className="header_nav-btn">
                <img src={user} alt="user" />
                <span>Sign in</span>
            </button>
        </div>
    </header>
  )
}
