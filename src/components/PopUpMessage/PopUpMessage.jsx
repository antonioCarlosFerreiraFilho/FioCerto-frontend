//Css
import "./PopUpMessage.css";
//react Icons
import { TbAlertCircleFilled } from "react-icons/tb";
import { TbAlertTriangleFilled } from "react-icons/tb";
//components
import MessageError from "../MessageError/MessageError";

const PopUpMessage = ({error, type}) => {
  return (
    <div className="PopUpMessage">
      <div className="PopUpMessage_container">
        <div className="PopUpMessage_content">
          <div className="PopUpMessage_box">
            <div className="PopUpMessage_box-icon">
              <TbAlertTriangleFilled className="PopUpMessage_box-icon-style"/>
              <p>[ Atenção !. ]</p>
            </div>
            <div className="PopUpMessage_box-MessageError">
              <div className="PopUpMessage_box-MessageError-content">
                <MessageError/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpMessage;
