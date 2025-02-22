//css
import "./ArticleService.css";
//react icons
import { Ri24HoursFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineElectricalServices } from "react-icons/md";

const ArticleService = () => {
  return (
    <div className="ArticleService">
      <div className="ArticleService_container">
        <div className="ArticleService_content">
          <div className="ArticleService_container-boxes">

            <div className="ArticleService_container-box1">
              <div className="ArticleService_container-box1-icon">
                <Ri24HoursFill className="ArticleService_container-box1-icon-Content" />
              </div>
              <div className="ArticleService_container-box1-description">
                <h1>Serviço e Atendimento 24h</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum, optio? Quos quo inventore rerum nulla minus explicabo
                  laudantium atque ipsa ex eligendi facilis dolore ullam esse,
                  aspernatur sit veniam minima!
                </p>
              </div>
            </div>

            <div className="ArticleService_container-box1">
              <div className="ArticleService_container-box1-icon">
                <RiCustomerService2Fill className="ArticleService_container-box1-icon-Content" />
              </div>
              <div className="ArticleService_container-box1-description">
                <h1>Serviço e Atendimento 24h</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum, optio? Quos quo inventore rerum nulla minus explicabo
                  laudantium atque ipsa ex eligendi facilis dolore ullam esse,
                  aspernatur sit veniam minima!
                </p>
              </div>
            </div>

            <div className="ArticleService_container-box1">
              <div className="ArticleService_container-box1-icon">
                <GrCertificate className="ArticleService_container-box1-icon-Content" />
              </div>
              <div className="ArticleService_container-box1-description">
                <h1>Serviço e Atendimento 24h</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum, optio? Quos quo inventore rerum nulla minus explicabo
                  laudantium atque ipsa ex eligendi facilis dolore ullam esse,
                  aspernatur sit veniam minima!
                </p>
              </div>
            </div>

            <div className="ArticleService_container-box1">
              <div className="ArticleService_container-box1-icon">
                <MdOutlineElectricalServices className="ArticleService_container-box1-icon-Content" />
              </div>
              <div className="ArticleService_container-box1-description">
                <h1>Serviço e Atendimento 24h</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum, optio? Quos quo inventore rerum nulla minus explicabo
                  laudantium atque ipsa ex eligendi facilis dolore ullam esse,
                  aspernatur sit veniam minima!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleService;
