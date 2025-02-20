//css
import "./TopContact.css";
//react icons
import { FaPhoneVolume } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { RiAlarmWarningFill } from "react-icons/ri";



const TopContact = () => {
  return (
    <div className="TopContact">
      <dir className="TopContact_container">
        <div className="TopContact_content">

          <div className="TopContact_box">
            <div className="TopContact_box-Phone">
              <FaPhoneVolume className="TopContact_Icon iconPhone-Event"/>
              <a href="">932 015 787</a>
            </div>
            <div className="TopContact_box-Time">
              <IoTimeSharp  className="TopContact_Icon"/>
              <p>Atendimento 24H</p>
            </div>
            <div className="TopContact_box-Time desck">
              <RiAlarmWarningFill   className="TopContact_Icon"/>
              <p>Serviços de Emergencia 24H</p>
            </div>
          </div>

        </div>
      </dir>
    </div>
  );
};

export default TopContact;
