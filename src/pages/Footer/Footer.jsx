//css
import { NavLink } from "react-router-dom";
import "./Footer.css";
//react icons
import { SiThunderstore } from "react-icons/si";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_container">

        <div className="Footer_content">
          <div className="Footer_content-box">

            <div className="Footer_content-box-logo">
              <div className="Footer_content-box-logo-FioCerto">
                <SiThunderstore className="Footer_content-box-logo-FioCerto-icon" />
                <p className="Footer_content-box-logo-FioCerto-name">
                  fiocerto
                </p>
              </div>
              <div className="Footer_content-box-description">
                <div className="Footer_content-box-description-TXT">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum sunt atque, quo culpa quod sint aperiam eveniet hic
                    iste dolore consequuntur? Alias perferendis aut cumque, odio
                    omnis soluta ullam aspernatur.
                  </p>
                </div>
              </div>
            </div>

            <div className="Footer_content-box-navigate">
              <div className="Footer_content-box-navigate-List">
                <h1>Descobrir</h1>
                <NavLink>Ínicio</NavLink>
                <NavLink>Sobre</NavLink>
                <NavLink>Galeria</NavLink>
                <NavLink>Contato</NavLink>
                <NavLink>Logar / Cadastrar</NavLink>
              </div>
            </div>

            <div className="Footer_content-box-contacts">
              <h1>Contato</h1>
              <div className="Footer_content-box-contacts-list">
                <div className="Footer_content-box-contacts-contact">
                  <IoMdPhonePortrait className="Footer_content-box-contacts-contact-icon" />
                  <p>+351 934 897 540</p>
                </div>

                <div className="Footer_content-box-contacts-contact">
                  <MdEmail className="Footer_content-box-contacts-contact-icon" />
                  <p>fioCerto.info.PT@gmail.com</p>
                </div>
              </div>
            </div>

           

          </div>
        </div>

        <div className="Footer_content-Allrights">
          <div className="Footer_content-Allrights-box">
            <p>@ FioCerto 2025 - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
