//css
import "./Services.css";
//react
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="Services">
      <div className="Services_container">
        <div className="Services_content">
          <div className="Services_content-boxes">
            <div className="Services_content-box">
              <div className="Services_content-box-Image">
                <img src="./public/background/service_home_1.jpg" alt="" />
              </div>
              <div className="Services_content-box-descriprion">
                <h1>Air condition installatioin</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  facere repudiandae ipsum architecto vel quaerat commodi sed
                  consectetur, dolorem aliquam
                </p>
                <NavLink>Saiba mais.....</NavLink>
              </div>
            </div>

            <div className="Services_content-box">
              <div className="Services_content-box-Image">
                <img src="./public/background/service_home_1.jpg" alt="" />
              </div>
              <div className="Services_content-box-descriprion">
                <h1>Air condition installatioin</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  facere repudiandae ipsum architecto vel quaerat commodi sed
                  consectetur, dolorem aliquam
                </p>
                <NavLink>Saiba mais.....</NavLink>
              </div>
            </div>

            <div className="Services_content-box">
              <div className="Services_content-box-Image">
                <img src="./public/background/service_home_1.jpg" alt="" />
              </div>
              <div className="Services_content-box-descriprion">
                <h1>Air condition installatioin</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  facere repudiandae ipsum architecto vel quaerat commodi sed
                  consectetur, dolorem aliquam
                </p>
                <NavLink>Saiba mais.....</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="Services_content-InfoProficional">
          <div className="Services_content-InfoProficional-box">
            <div className="Services_content-InfoProficional-box1"></div>
            <div className="Services_content-InfoProficional-box2"></div>
            <div className="Services_content-InfoProficional-box3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
