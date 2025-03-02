//css
import "./BoxService.css";
//react icons
import { FaPhoneVolume } from "react-icons/fa6";
import { useEffect } from "react";

const BoxService = () => {

  return (
    <div className="BoxService">
      <div className="BoxService_container">
        <div className="BoxService_content">
          <div className="BoxService_content-services">
            <div className="BoxService_content-services-service">
              <div className="BoxService_content-services-service-boxImage">
                <img src="/public/imagesIcons/broken-wire.png" alt="" />
              </div>
              <div className="BoxService_content-services-service-boxDescription">
                <h1>+1000 Happy Customers</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis laudantium, dolorem sequi ea sed similique! Optio sed
                  deserunt provident
                </p>
              </div>
            </div>

            <div className="BoxService_content-services-service">
              <div className="BoxService_content-services-service-boxImage">
                <img src="/public/imagesIcons/certificate.png" alt="" />
              </div>
              <div className="BoxService_content-services-service-boxDescription">
                <h1>+1000 Happy Customers</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis laudantium, dolorem sequi ea sed similique! Optio sed
                  deserunt provident
                </p>
              </div>
            </div>

            <div className="BoxService_content-services-service">
              <div className="BoxService_content-services-service-boxImage">
                <img src="/public/imagesIcons/electrical-panel.png" alt="" />
              </div>
              <div className="BoxService_content-services-service-boxDescription">
                <h1>+1000 Happy Customers</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis laudantium, dolorem sequi ea sed similique! Optio sed
                  deserunt provident
                </p>
              </div>
            </div>

            <div className="BoxService_content-services-service">
              <div className="BoxService_content-services-service-boxImage">
                <img src="/public/imagesIcons/charging-station.png" alt="" />
              </div>
              <div className="BoxService_content-services-service-boxDescription">
                <h1>+1000 Happy Customers</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis laudantium, dolorem sequi ea sed similique! Optio sed
                  deserunt provident
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="BoxService_content-description">
          <div className="BoxService_content-descriptionContainer">
            <h1>Meis impedit Labitur Voluptatum mea ut!</h1>
            <div className="BoxService_content-descriptionContainerCall">
              <FaPhoneVolume className="BoxService_content-descriptionContainerCall-iconCall" />
              <p>932 015 787</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxService;
