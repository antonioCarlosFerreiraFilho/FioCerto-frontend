//css
import "./GalleryCards.css";
//react icons
import { MdDateRange } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
//hooks
import { useScroll } from "../../hooks/useScroll";
//react
import { useEffect } from "react";

const GalleryCards = () => {
  //Scroll top
  function ScrollTop() {
    const list = document.querySelectorAll(".ControllerLink-Gallery");

    list.forEach((Element) => {
      Element.addEventListener("click", () => {
        useScroll(0, 0, 0);
      });
    });
  }

  //start
  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollTop();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="GalleryCards">
      <div className="GalleryCards_container">
        <div className="GalleryCards_content">
          <div className="GalleryCards_Boxes">
            <div className="GalleryCards_card">
              {/* CARD IMAGE */}
              <div className="GalleryCards_card-image">
                <img src="./public/background/bannerArticle.jpg" alt="" />
              </div>
              {/* CARD COMMENTS,DATA */}
              <div className="GalleryCards_card-info">
                <div className="GalleryCards_card-info-BoxIcons">
                  <div className="GalleryCards_card-info-BoxIconDada">
                    <MdDateRange className="GalleryCards_card-info-ICON" />
                    <p>22/10/25</p>
                  </div>
                  <div className="GalleryCards_card-info-BoxIconComments">
                    <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                    <p>10</p>
                  </div>
                </div>
              </div>
              {/* CARD DESCRIPTION */}
              <div className="GalleryCards_card-description">
                <div className="GalleryCards_card-description-boxInfo_card">
                  <h1>Duis Aute Irure Dolor in Reprehet</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas nostrum eius id. Provident minima perferendis sapiente
                    vitae dolor molestiae ipsam facere, reprehenderit sequi,
                    magni, harum cumque quibusdam quidem quas et.
                  </p>
                </div>
              </div>
              {/* CARD Link */}
              <div className="GalleryCards_card-Link">
                <div className="GalleryCards_card-Link-box">
                  <NavLink to="/article" className="ControllerLink-Gallery">
                    Saber Mais...
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="GalleryCards_card">
              {/* CARD IMAGE */}
              <div className="GalleryCards_card-image">
                <img src="./public/background/bannerArticle.jpg" alt="" />
              </div>
              {/* CARD COMMENTS,DATA */}
              <div className="GalleryCards_card-info">
                <div className="GalleryCards_card-info-BoxIcons">
                  <div className="GalleryCards_card-info-BoxIconDada">
                    <MdDateRange className="GalleryCards_card-info-ICON" />
                    <p>22/10/25</p>
                  </div>
                  <div className="GalleryCards_card-info-BoxIconComments">
                    <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                    <p>10</p>
                  </div>
                </div>
              </div>
              {/* CARD DESCRIPTION */}
              <div className="GalleryCards_card-description">
                <div className="GalleryCards_card-description-boxInfo_card">
                  <h1>Duis Aute Irure Dolor in Reprehet</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas nostrum eius id. Provident minima perferendis sapiente
                    vitae dolor molestiae ipsam facere, reprehenderit sequi,
                    magni, harum cumque quibusdam quidem quas et.
                  </p>
                </div>
              </div>
              {/* CARD Link */}
              <div className="GalleryCards_card-Link">
                <div className="GalleryCards_card-Link-box">
                  <NavLink className="ControllerLink-Gallery">
                    Saber Mais...
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="GalleryCards_card">
              {/* CARD IMAGE */}
              <div className="GalleryCards_card-image">
                <img src="./public/background/bannerArticle.jpg" alt="" />
              </div>
              {/* CARD COMMENTS,DATA */}
              <div className="GalleryCards_card-info">
                <div className="GalleryCards_card-info-BoxIcons">
                  <div className="GalleryCards_card-info-BoxIconDada">
                    <MdDateRange className="GalleryCards_card-info-ICON" />
                    <p>22/10/25</p>
                  </div>
                  <div className="GalleryCards_card-info-BoxIconComments">
                    <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                    <p>10</p>
                  </div>
                </div>
              </div>
              {/* CARD DESCRIPTION */}
              <div className="GalleryCards_card-description">
                <div className="GalleryCards_card-description-boxInfo_card">
                  <h1>Duis Aute Irure Dolor in Reprehet</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas nostrum eius id. Provident minima perferendis sapiente
                    vitae dolor molestiae ipsam facere, reprehenderit sequi,
                    magni, harum cumque quibusdam quidem quas et.
                  </p>
                </div>
              </div>
              {/* CARD Link */}
              <div className="GalleryCards_card-Link">
                <div className="GalleryCards_card-Link-box">
                  <NavLink>Saber Mais...</NavLink>
                </div>
              </div>
            </div>

            <div className="GalleryCards_card">
              {/* CARD IMAGE */}
              <div className="GalleryCards_card-image">
                <img src="./public/background/bannerArticle.jpg" alt="" />
              </div>
              {/* CARD COMMENTS,DATA */}
              <div className="GalleryCards_card-info">
                <div className="GalleryCards_card-info-BoxIcons">
                  <div className="GalleryCards_card-info-BoxIconDada">
                    <MdDateRange className="GalleryCards_card-info-ICON" />
                    <p>22/10/25</p>
                  </div>
                  <div className="GalleryCards_card-info-BoxIconComments">
                    <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                    <p>10</p>
                  </div>
                </div>
              </div>
              {/* CARD DESCRIPTION */}
              <div className="GalleryCards_card-description">
                <div className="GalleryCards_card-description-boxInfo_card">
                  <h1>Duis Aute Irure Dolor in Reprehet</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas nostrum eius id. Provident minima perferendis sapiente
                    vitae dolor molestiae ipsam facere, reprehenderit sequi,
                    magni, harum cumque quibusdam quidem quas et.
                  </p>
                </div>
              </div>
              {/* CARD Link */}
              <div className="GalleryCards_card-Link">
                <div className="GalleryCards_card-Link-box">
                  <NavLink>Saber Mais...</NavLink>
                </div>
              </div>
            </div>

            <div className="GalleryCards_card">
              {/* CARD IMAGE */}
              <div className="GalleryCards_card-image">
                <img src="./public/background/bannerArticle.jpg" alt="" />
              </div>
              {/* CARD COMMENTS,DATA */}
              <div className="GalleryCards_card-info">
                <div className="GalleryCards_card-info-BoxIcons">
                  <div className="GalleryCards_card-info-BoxIconDada">
                    <MdDateRange className="GalleryCards_card-info-ICON" />
                    <p>22/10/25</p>
                  </div>
                  <div className="GalleryCards_card-info-BoxIconComments">
                    <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                    <p>10</p>
                  </div>
                </div>
              </div>
              {/* CARD DESCRIPTION */}
              <div className="GalleryCards_card-description">
                <div className="GalleryCards_card-description-boxInfo_card">
                  <h1>Duis Aute Irure Dolor in Reprehet</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas nostrum eius id. Provident minima perferendis sapiente
                    vitae dolor molestiae ipsam facere, reprehenderit sequi,
                    magni, harum cumque quibusdam quidem quas et.
                  </p>
                </div>
              </div>
              {/* CARD Link */}
              <div className="GalleryCards_card-Link">
                <div className="GalleryCards_card-Link-box">
                  <NavLink>Saber Mais...</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="GalleryCards_Pagination">
            <div className="GalleryCards_Pagination-container">
              <div className="GalleryCards_Pagination-content">
                <p className="ControllerLink-Gallery">1</p>
                <p className="ControllerLink-Gallery">2</p>
                <p className="ControllerLink-Gallery">3</p>
                <p className="ControllerLink-Gallery">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
