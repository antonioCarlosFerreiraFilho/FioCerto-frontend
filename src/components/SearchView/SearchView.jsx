//Css
import "./SearchView.css";
//hooks
import { useQuery } from "../../hooks/useQuery";
import { useScroll } from "../../hooks/useScroll";
//react icons
import { MdDateRange } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
//react
import { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { SearchArticle } from "../../slices/articleSlice";
//Components
import LoadingSearch from "../LoadingSearch/LoadingSearch";

const SearchView = () => {
  //initial States
  const query = useQuery();
  const search = query.get("q");

  //Redux
  const dispatch = useDispatch();
  const { articles, loading, errors } = useSelector((state) => state.article);

  //LOAD Articles
  useEffect(() => {
    dispatch(SearchArticle(search));
  }, [dispatch, search]);

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
            {errors ? (
              <p className="MessageErrorSearch">{errors}</p>
            ) : (
              <>
                {loading ? (
                  <LoadingSearch />
                ) : (
                  <>
                    {articles &&
                      articles.map((post) => (
                        <div className="GalleryCards_card" key={post._id}>
                          {/* CARD IMAGE */}
                          <div className="GalleryCards_card-image">
                            <img
                              src={`${post.imgURL[0]}`}
                              alt={`${post.imgNAME[0]}`}
                            />
                          </div>
                          {/* CARD COMMENTS,DATA */}
                          <div className="GalleryCards_card-info">
                            <div className="GalleryCards_card-info-BoxIcons">
                              <div className="GalleryCards_card-info-BoxIconDada">
                                <MdDateRange className="GalleryCards_card-info-ICON" />
                                <p>{post.data}</p>
                              </div>
                              <div className="GalleryCards_card-info-BoxIconComments">
                                <FaRegCommentAlt className="GalleryCards_card-info-ICON" />
                                <p>{post.comments.length}</p>
                              </div>
                            </div>
                          </div>
                          {/* CARD DESCRIPTION */}
                          <div className="GalleryCards_card-description">
                            <div className="GalleryCards_card-description-boxInfo_card">
                              <h1>{post.articleTitle}</h1>
                              <p>{post.miniDescri}</p>
                            </div>
                          </div>
                          {/* CARD Link */}
                          <div className="GalleryCards_card-Link">
                            <div className="GalleryCards_card-Link-box">
                              <NavLink
                                to={`/article/${post._id}`}
                                className="ControllerLink-Gallery"
                                onClick={ScrollTop}
                              >
                                Saber Mais...
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
