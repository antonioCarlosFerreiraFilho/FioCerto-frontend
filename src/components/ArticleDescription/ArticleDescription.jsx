//Css
import "./ArticleDescription.css";
//react
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
//slices
import { GetArticle } from "../../slices/articleSlice";

const ArticleDescription = () => {
  //react
  const { id } = useParams();

  //redux
  const dispatch = useDispatch();
  const { article, loading } = useSelector((state) => state.article);

  //renderizando
  useEffect(() => {
    dispatch(GetArticle(id));
  }, [dispatch, id]);

  return (
    <div className="ArticleDescription">
      <div className="ArticleDescription_container">
        {/* ARTICLE */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="ArticleDescription_content">
            <div className="ArticleDescription_box-Article">
              <div className="ArticleDescription_box-Article-box1">
                <div className="ArticleDescription_box-Article-box1-content">
                  {article.imgURL && <img src={article.imgURL[0]} alt="" />}
                  <h1>{article.articleTitle}</h1>
                  <p>{article.miniDescri}</p>
                </div>
              </div>

              <div className="ArticleDescription_box-Article-box2-box3">
                <div className="ArticleDescription_box-Article-box2">
                  <div className="ArticleDescription_box-Article-box2-content">
                    {article.imgURL && <img src={article.imgURL[1]} alt="" />}
                    <h1>{article.firstTitle}</h1>
                    <p>{article.firstDescri}</p>
                  </div>
                </div>

                <div className="ArticleDescription_box-Article-box3">
                  <div className="ArticleDescription_box-Article-box3-content">
                    {article.imgURL && <img src={article.imgURL[2]} alt="" />}
                    <h1>{article.lastTitle}</h1>
                    <p>{article.lastDescri}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLE */}
      </div>
    </div>
  );
};

export default ArticleDescription;
