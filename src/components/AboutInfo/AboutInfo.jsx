import "./AboutInfo.css";
//react icons
import { GiElectricalSocket } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi2";
import { MdOutlineElectricCar } from "react-icons/md";
import { FaSolarPanel } from "react-icons/fa";


const AboutInfo = () => {
  return (
    <div className="AboutInfo">
      <div className="AboutInfo-container">
        <div className="AboutInfo-content">
          <div className="AboutInfo-boxes">
            <div className="AboutInfo-boxes-boxDescription">
              <div className="AboutInfo-boxes-boxDescription-card">
                <div className="AboutInfo-boxes-boxDescription-card-box">
                  <h1>Some Words About us</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel, id accusantium! Architecto, mollitia! Eum vel,
                    architecto corrupti provident deleniti reprehenderit, rerum
                    praesentium laudantium soluta impedit eligendi culpa
                    incidunt? Nemo, pariatur.
                  </p>
                </div>
              </div>
              <div className="AboutInfo-boxes-boxDescription-card">
                <div className="AboutInfo-boxes-boxDescription-card-box">
                  <h1>Some Words About us</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel, id accusantium! Architecto, mollitia! Eum vel,
                    architecto corrupti provident deleniti reprehenderit, rerum
                    praesentium laudantium soluta impedit eligendi culpa
                    incidunt? Nemo, pariatur.
                  </p>
                </div>
              </div>
              <div className="AboutInfo-boxes-boxDescription-card">
                <div className="AboutInfo-boxes-boxDescription-card-box">
                  <h1>Some Words About us</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel, id accusantium! Architecto, mollitia! Eum vel,
                    architecto corrupti provident deleniti reprehenderit, rerum
                    praesentium laudantium soluta impedit eligendi culpa
                    incidunt? Nemo, pariatur.
                  </p>
                </div>
              </div>
              <div className="AboutInfo-boxes-boxDescription-card">
                <div className="AboutInfo-boxes-boxDescription-card-box">
                  <h1>Some Words About us</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel, id accusantium! Architecto, mollitia! Eum vel,
                    architecto corrupti provident deleniti reprehenderit, rerum
                    praesentium laudantium soluta impedit eligendi culpa
                    incidunt? Nemo, pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="AboutInfo-boxes-boxProfessional">
              <div className="AboutInfo-boxes-boxProfessional-card">
                <div className="AboutInfo-boxes-boxProfessional-card-boxIcon">
                  <HiLightBulb  />
                </div>
                <div className="AboutInfo-boxes-boxProfessional-card-boxInfo">
                  <h1>Professional Service</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis perspiciatis autem sed eius! Porro, pariatur fugiat.
                    In, reiciendis. Aliquid, ea assumenda commodi nobis natus
                    maiores! Temporibus nobis accusamus repellat possimus!
                  </p>
                </div>
              </div>
              <div className="AboutInfo-boxes-boxProfessional-card">
                <div className="AboutInfo-boxes-boxProfessional-card-boxIcon">
                  <GiElectricalSocket />
                </div>
                <div className="AboutInfo-boxes-boxProfessional-card-boxInfo">
                  <h1>Professional Service</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis perspiciatis autem sed eius! Porro, pariatur fugiat.
                    In, reiciendis. Aliquid, ea assumenda commodi nobis natus
                    maiores! Temporibus nobis accusamus repellat possimus!
                  </p>
                </div>
              </div>
              <div className="AboutInfo-boxes-boxProfessional-card">
                <div className="AboutInfo-boxes-boxProfessional-card-boxIcon">
                  <MdOutlineElectricCar  />
                </div>
                <div className="AboutInfo-boxes-boxProfessional-card-boxInfo">
                  <h1>Professional Service</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis perspiciatis autem sed eius! Porro, pariatur fugiat.
                    In, reiciendis. Aliquid, ea assumenda commodi nobis natus
                    maiores! Temporibus nobis accusamus repellat possimus!
                  </p>
                </div>
              </div>
              <div className="AboutInfo-boxes-boxProfessional-card">
                <div className="AboutInfo-boxes-boxProfessional-card-boxIcon">
                  <FaSolarPanel  />
                </div>
                <div className="AboutInfo-boxes-boxProfessional-card-boxInfo">
                  <h1>Professional Service</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis perspiciatis autem sed eius! Porro, pariatur fugiat.
                    In, reiciendis. Aliquid, ea assumenda commodi nobis natus
                    maiores! Temporibus nobis accusamus repellat possimus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
