//css
import "./LateralMenu.css";
//React
import { NavLink } from "react-router-dom";
//react icons
import { SiThunderstore } from "react-icons/si";

const LateralMenu = () => {
  return (
    <div className="LateralMenu">
      <div className="LateralMenu_container">
        <div className="LateralMenu_content">
          <div className="LateralMenu_boxMenu">
            <NavLink to="/">Ínicio</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/gallery">Galeria</NavLink>
            <NavLink to="/contact">Contato</NavLink>
            <NavLink to="#" >Logar / Cadastrar</NavLink>
          </div>
          <div className="LateralMenu_boxLogo">
            <div className="LateralMenu_boxLogo-container">

              <div className="LateralMenu_box-logo">
                <SiThunderstore className="LateralMenu_box-logo-icon" />
                <p>fiocerto</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
