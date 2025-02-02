//css
import "./Header.css";
//react icons
import { SiThunderstore } from "react-icons/si";

import { IoMenuOutline } from "react-icons/io5";

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
              <IoMenuOutline className="Header_box-menu-Icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
