//css
import "./Header.css";
//react icons
import { SiThunderstore } from "react-icons/si";
import { IoMenuOutline } from "react-icons/io5";
//react
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_container">
        <div className="Header_content">
          <div className="Header_box">
            <div className="Header_box-logo">
              <SiThunderstore className="Header_box-logo-icon" />
              <p>fiocerto</p>
            </div>
            <div className="Header_box-menu">
              <IoMenuOutline className="Header_box-menu-Icon" />
            </div>
            <div className="Header_box-linksDescktop">
              <div className="Header_box-linksDescktop-list">
                <NavLink to="/">Ínicio</NavLink>
                <NavLink to="/about">Sobre</NavLink>
                <NavLink to="/galery">Galeria</NavLink>
                <NavLink to="/contact">Contato</NavLink>
                <NavLink to="/services">Serviços</NavLink>
                <NavLink to="/registerORlogin">Logar / Cadastrar</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
