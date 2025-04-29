//css
import "./GalleryCards.css";
//react icons
import { MdDateRange } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
//hooks
import { useScroll } from "../../hooks/useScroll";
import { useQuery } from "../../hooks/useQuery";
//react
import { useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { PaginationArticle, reset } from "../../slices/articleSlice";

const GalleryCards = () => {
  //redirect Home
  const navigate = useNavigate();

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

  //LOAD Articles
  useEffect(() => {
    dispatch(PaginationArticle());
  }, []);

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
          {loading ? (
            <p>Loading</p>
          ) : (
            <div className="GalleryCards_Boxes">
              {articles &&
                articles?.map((article) => (
                  <div className="GalleryCards_card" key={article._id}>
                    {/* CARD IMAGE */}
                    <div className="GalleryCards_card-image">
                      <img src={`${article.imgURL[1]}`} alt="" />
                    </div>
                    {/* CARD COMMENTS,DATA */}
                    <div className="GalleryCards_card-info">
                      <div className="GalleryCards_card-info-BoxIcons">
                        <div className="GalleryCards_card-info-BoxIconDada">
                          <MdDateRange className="GalleryCards_card-info-ICON" />
                          <p> {article.data} </p>
                        </div>
                        <div className="GalleryCards_card-info-BoxIconComments">
                          <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                          <p>{article.comments.length }</p>
                        </div>
                      </div>
                    </div>
                    {/* CARD DESCRIPTION */}
                    <div className="GalleryCards_card-description">
                      <div className="GalleryCards_card-description-boxInfo_card">
                        <h1>{article.articleTitle}</h1>
                        <p>
                        {article.miniDescri}
                        </p>
                      </div>
                    </div>
                    {/* CARD Link */}
                    <div className="GalleryCards_card-Link">
                      <div className="GalleryCards_card-Link-box">
                        <NavLink
                          to="/article"
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
