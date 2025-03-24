//Css
import "./ContainerAuth.css";
//react Icons
import { SiThunderstore } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const ContainerAuth = ({ stage }) => {
  function ScrollAuth() {}

  return (
    <div className={`ContainerAuth ${stage}`}>
      <div className="ContainerAuth_container">
        <div className="ContainerAuth_content">

          <div className="ContainerAuth_Container">
            <div className="ContainerAuth_box-Logo-Close">
              <div className="ContainerAuth_box-Logo-Close-content">
                <SiThunderstore className="Close-content-logo-icon" />
                <p>fiocerto</p>
              </div>

              <div className="ContainerAuth_box-Logo-Close-content-close">
                <IoClose />
              </div>
            </div>
            <div className="ContainerAuth_box-Register">
              <div className="ContainerAuth_box-Register-FirstLastName">
                <label htmlFor="">
                  <span>Primeiro Nome</span>
                  <input type="text" />
                </label>
                <label htmlFor="">
                  <span>Ultimo Nome</span>
                  <input type="text" />
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContainerAuth;
