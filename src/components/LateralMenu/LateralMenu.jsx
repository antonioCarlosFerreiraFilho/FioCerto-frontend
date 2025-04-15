//css
import "./LateralMenu.css";
//React
import { NavLink, useNavigate } from "react-router-dom";
//react icons
import { SiThunderstore } from "react-icons/si";
//Slices
import { logout, reset } from "../../slices/authSlice";
//redux
import { useDispatch } from "react-redux";

const LateralMenu = ({ auth }) => {
  //Redux
  const dispatch = useDispatch();
  //redirect Home
  const navigate = useNavigate();

  //Logout
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    window.location.reload(true);
  };

  return (
    <div className="LateralMenu">
      <div className="LateralMenu_container">
        <div className="LateralMenu_content">
          <div className="LateralMenu_boxMenu">
            <NavLink to="/">Ínicio</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/gallery">Galeria</NavLink>
            <NavLink to="/contact">Contato</NavLink>
            {!auth && (
              <NavLink to="#" className="controllerPupPopMenu" id="ContentLink">
                Logar / Cadastrar
              </NavLink>
            )}

            {auth && <NavLink to="/profile">Configurações</NavLink>}
            {auth && (
              <NavLink to="#" id="ControllerLogout" onClick={handleLogout}>
                Sair
              </NavLink>
            )}
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
