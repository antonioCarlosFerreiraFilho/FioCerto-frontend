//Css
import "./SearchView.css";
//hooks
import { useQuery } from "../../hooks/useQuery";
import { useScroll } from "../../hooks/useScroll";
//react icons
import { MdDateRange } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SearchView = () => {
  //initial States
  const query = useQuery();
  const search = query.get("q");

  //Scroll top
  function ScrollTop() {
    useScroll(0, 0, 0);
  }

  return (
    <div className="SearchView">
      <div className="SearchView_container">
        <div className="SearchView_content">
          <p>
            Vocé procurou por: <strong>{search}</strong>
          </p>
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
                  <NavLink
                    to="/article"
                    className="ControllerLink-Gallery"
                    onClick={ScrollTop}
                  >
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
                  <NavLink
                    to="/article"
                    className="ControllerLink-Gallery"
                    onClick={ScrollTop}
                  >
                    Saber Mais...
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
