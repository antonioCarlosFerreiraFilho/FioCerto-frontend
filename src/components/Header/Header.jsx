//css
import "./Header.css";
//react icons
import { SiThunderstore } from "react-icons/si";
import { IoMenuOutline } from "react-icons/io5";
//react
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
//hooks
import { useScroll } from "../../hooks/useScroll";

const Header = () => {
  function DescktopTop() {
    const list = document.querySelectorAll(".linkController");

    list.forEach((Element) => {
      Element.addEventListener("click", () => {
        useScroll(0, 0, 0);
      });
    });
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      DescktopTop();
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
              <IoMenuOutline className="Header_box-menu-Icon" />
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
                <NavLink className="linkController" to="#">
                  Logar / Cadastrar
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
