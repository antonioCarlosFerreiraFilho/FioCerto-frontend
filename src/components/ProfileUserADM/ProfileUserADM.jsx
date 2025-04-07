//css
import "./ProfileUserADM.css";
//react icons
import { FaEdit } from "react-icons/fa";
//react
import { useEffect, useState } from "react";
//componets
import PanelADM from "../PanelADM/PanelADM";
import PopUpMessage from "../PopUpMessage/PopUpMessage";

const ProfileUserADM = () => {
  const [userAuth, setUserAuth] = useState(true);

  return (
    <div className="ProfileUserADM">
      <div className="ProfileUserADM-container">
        <div className="ProfileUserADM-content">
          <h1>Configurações de Usuario</h1>
          <div className="ProfileUserADM-boxesProfile">
            <form className="ProfileUserADM-boxesProfile-container">
              <div className="ProfileUserADM-box FirstInfos">
                <label htmlFor="">
                  <span>Primeiro Nome</span>
                  <input type="text" placeholder="Antonio" />
                </label>
                <label htmlFor="">
                  <span>Ultimo Nome</span>
                  <input type="text" placeholder="carlos" />
                </label>

                <input
                  type="submit"
                  className="ProfileUserADM-submitForm"
                  value="Atualizar"
                />
              </div>

              <div className="ProfileUserADM-box FirstInfos">
                <label htmlFor="">
                  <span>Numero</span>
                  <input type="text" placeholder="932015787" />
                </label>
                <label htmlFor="">
                  <span>Senha</span>
                  <input type="text" placeholder="*********" />
                </label>
                <input
                  type="submit"
                  className="ProfileUserADM-submitForm"
                  value="Atualizar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {userAuth && (
        <div className="ProfileUserADM-ADMPermissions">
          <PanelADM />
        </div>
      )}
      {userAuth && (
        <div className="ProfileUserADM-MessageError">
          <PopUpMessage />
        </div>
      )}
    </div>
  );
};

export default ProfileUserADM;
