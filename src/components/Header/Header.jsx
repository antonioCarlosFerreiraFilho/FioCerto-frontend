//css
import "./Header.css";
//react icons
import { SiThunderstore } from "react-icons/si";
import { IoMdLogOut } from "react-icons/io";
//react
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//hooks
import { useScroll } from "../../hooks/useScroll";
//Components
import LateralMenu from "../LateralMenu/LateralMenu";
import ContainerAuth from "../ContainerAuth/ContainerAuth";
//Hooks
import { useAuth } from "../../hooks/useAuth";
//Slices
import { logout, reset } from "../../slices/authSlice";
//redux
import { useDispatch } from "react-redux";

const Header = () => {
  // Auth
  const { auth, loading } = useAuth();
  //Redux
  const dispatch = useDispatch();
  //redirect Home
  const navigate = useNavigate();

  //LOGOUT
  function EventLogout() {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    window.location.reload(true);
  }

  function DescktopTop() {
    const list = document.querySelectorAll(".linkController");

    list.forEach((Element) => {
      Element.addEventListener("click", () => {
        useScroll(0, 0, 0);
      });
    });
  }

  function OpenCloseMenu() {
    const Box = document.querySelector(".Header_box-menu-Icon");
    const Menu = document.querySelector(".Header_container-MenuLateral");
    const ListLink = document.querySelector(".LateralMenu_boxMenu");
    const IconAnimation = document.querySelector(".Navbar_content-Line");

    Box.addEventListener("click", () => {
      Menu.classList.toggle("Header_container-MenuLateralJS");
      IconAnimation.classList.toggle("active");
    });

    ListLink.addEventListener("click", () => {
      if (Menu.classList.contains("Header_container-MenuLateralJS")) {
        Menu.classList.remove("Header_container-MenuLateralJS");
      }

      if (IconAnimation.classList.contains("active")) {
        IconAnimation.classList.remove("active");
      }

      useScroll(0, 0, 0);
    });
  }

  function controllerAuthForm() {
    const Menu = document.querySelector(".controllerPupPop");
    const MobileMenu = document.querySelector(".controllerPupPopMenu");
    const AuthForm = document.querySelector(".ContainerAuth");

    if (Menu && MobileMenu) {
      Menu.addEventListener("click", () => {
        AuthForm.classList.remove("hidden");
        AuthForm.classList.add("visible");
      });

      MobileMenu.addEventListener("click", () => {
        AuthForm.classList.remove("hidden");
        AuthForm.classList.add("visible");
      });
    }
  }

  // Start Events JS
  useEffect(() => {
    const Time = setTimeout(() => {
      DescktopTop();
      OpenCloseMenu();
      controllerAuthForm();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

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
              <div className="Header_box-menu-Icon">
                <span className="Navbar_content-Line"></span>
              </div>
            </div>
            <div className="Header_box-linksDescktop">
              <div className="Header_box-linksDescktop-list">
                <NavLink className="linkController" to="/">
                  Ínicio
                </NavLink>
                <NavLink className="linkController" to="/about">
                  Sobre
                </NavLink>
                <NavLink className="linkController" to="/gallery">
                  Galeria
                </NavLink>
                <NavLink className="linkController" to="/contact">
                  Contato
                </NavLink>

                {!auth && (
                  <NavLink
                    className="linkController controllerPupPop"
                    id="controllerLink"
                    to="#"
                  >
                    Logar / Cadastrar
                  </NavLink>
                )}

                {auth && (
                  <NavLink className="linkController" to="/profile">
                    Configurações
                  </NavLink>
                )}

                {auth && (
                  <NavLink
                    className="linkController"
                    id="logoutBox"
                    to="#"
                    onClick={EventLogout}
                  >
                    Sair
                    <IoMdLogOut className="boxLogoutIcon" />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Header_container-MenuLateral">
        <div className="Header_container-MenuLateral-Container">
          <LateralMenu auth={auth} />
        </div>
      </div>
      {!auth && (
        <div>
          <ContainerAuth />
        </div>
      )}
    </div>
  );
};

export default Header;
