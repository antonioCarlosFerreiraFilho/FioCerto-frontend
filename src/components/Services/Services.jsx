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
            
            <div className="Services_content-InfoProficional-box1">
              <div className="Services_content-InfoProficional-box1-content">
                <h1>Some words about us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Saepe voluptate adipisci nesciunt deserunt sed quasi ab
                  repudiandae, voluptatem inventore, non cupiditate, illum
                  obcaecati vel maiores maxime. Nisi blanditiis nihil
                  doloremque!
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita harum iusto officia repellat similique dolorem
                  corporis quidem repellendus, doloremque quod enim
                </p>
              </div>
            </div>

            <div className="Services_content-InfoProficional-box2">
              <div className="Services_content-InfoProficional-box2-content">
                <h1>Mission</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum adipisci recusandae animi necessitatibus nisi, aut iusto
                  temporibus laboriosam. Id reprehenderit maxime voluptas
                  incidunt ipsum magnam repudiandae, voluptate earum a
                  aspernatur.
                </p>
                <ul>
                  <li>Cum doctus civibus efficiantur in</li>
                  <li>Quot persecuti mel</li>
                  <li>Vix id dicam putent</li>
                </ul>
              </div>
            </div>

            <div className="Services_content-InfoProficional-box3">
              <div className="Services_content-InfoProficional-box3-content">
                <h1>10 Years of experience</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  enim deleniti, dolor similique repellendus labore quae quam
                  iure officia quisquam ullam corporis saepe veniam, id
                  reprehenderit, cum veritatis autem soluta.
                </p>
                <ul>
                  <li>cum doctus civibus efficiantur in</li>
                  <li>Quot persecuti mel</li>
                  <li>Vix id dicam putent mel</li>
                  <li>Vix id dicam putent mel</li>
                  <li>Quot persecuti mel</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
