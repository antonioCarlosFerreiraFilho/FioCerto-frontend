//css
import "./GalleryCards.css";
//react icons
import { MdDateRange } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
//hooks
import { useScroll } from "../../hooks/useScroll";
//react
import { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { PaginationArticle, ViewsArticle } from "../../slices/articleSlice";
//components
import LoadingGallery from "../LoadingGallery/LoadingGallery";

const GalleryCards = () => {
  const dispatch = useDispatch();
  const { articles, loading } = useSelector((state) => state.article);

  //Scroll top
  function ScrollTop() {
    const list = document.querySelectorAll(".ControllerLink-Gallery");

    list.forEach((Element) => {
      Element.addEventListener("click", () => {
        useScroll(0, 0, 0);
      });
    });
  }

  //New Page
  function nextPage() {
    const LinksPages = document.querySelectorAll(".controllerNextPage");
    let page = "";

    LinksPages.forEach((element) => {
      element.addEventListener("click", (e) => {
        page = e.target.textContent;

        dispatch(PaginationArticle(page));
      });
    });
  }

  function addViews(articleID) {
    dispatch(ViewsArticle(articleID));
  }

  //LOAD Articles
  useEffect(() => {
    dispatch(PaginationArticle(0));
  }, []);

  //start
  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollTop();
      nextPage();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="GalleryCards">
      <div className="GalleryCards_container">
        <div className="GalleryCards_content">
          {loading ? (
            <LoadingGallery />
          ) : (
            <div className="GalleryCards_Boxes">
              {articles &&
                articles?.map((article) => (
                  <div
                    className="GalleryCards_card"
                    key={article._id}
                    onClick={() => addViews(article._id)}
                  >
                    {/* CARD IMAGE */}
                    <div className="GalleryCards_card-image">
                      <img
                        src={`${article.imgURL[0]}`}
                        alt={`${article.imgNAME[0]}`}
                      />
                    </div>
                    {/* CARD COMMENTS,DATA */}
                    <div className="GalleryCards_card-info">
                      <div className="GalleryCards_card-info-BoxIcons">
                        <div className="GalleryCards_card-info-BoxIconDada">
                          <MdDateRange className="GalleryCards_card-info-ICON" />

                          <p>{article.data}</p>
                        </div>

                        <div className="GalleryCards_card-info-BoxIconComments">
                          <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                          <p>{article.comments.length}</p>
                        </div>
                      </div>
                    </div>
                    {/* CARD DESCRIPTION */}
                    <div className="GalleryCards_card-description">
                      <div className="GalleryCards_card-description-boxInfo_card">
                        <h1>{article.articleTitle}</h1>
                        <p>{article.miniDescri}</p>
                      </div>
                    </div>
                    {/* CARD Link */}
                    <div className="GalleryCards_card-Link">
                      <div className="GalleryCards_card-Link-box">
                        <NavLink
                          to={`/article/${article._id}`}
                          className="ControllerLink-Gallery"
                        >
                          Saber Mais...
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="GalleryCards_Pagination">
            <div className="GalleryCards_Pagination-container">
              <div className="GalleryCards_Pagination-content controllersLinks">
                <p className="ControllerLink-Gallery controllerNextPage">0</p>
                <p className="ControllerLink-Gallery controllerNextPage">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
