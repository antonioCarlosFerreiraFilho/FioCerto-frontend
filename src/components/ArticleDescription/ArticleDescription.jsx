//Css
import "./ArticleDescription.css";
//react
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//react Icons
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";
//redux
import { useSelector, useDispatch } from "react-redux";
//slices
import { GetArticle, LikesArticle, reset } from "../../slices/articleSlice";
import { profile } from "../../slices/userSlice";
//components
import LoadingArticle from "../LoadingArticle/LoadingArticle";
//Hooks
import { useAuth } from "../../hooks/useAuth";

const ArticleDescription = () => {
  // Auth
  const { auth, loading: loadingAuth } = useAuth();

  //react
  const { id } = useParams();

  //redux
  const dispatch = useDispatch();
  const { article, loading } = useSelector((state) => state.article);
  const { user } = useSelector((state) => state.user);

  // States User OR Adm
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");
  const [idUser, setIdUser] = useState("");
  // ADM
  const [ADM, setADM] = useState(false);

  function addLikes() {
    dispatch(LikesArticle(id));

    setTimeout(()=> {

      dispatch(reset());
    }, 4000);
  }

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // Verify User OR ADM
  function AdmInfo() {
    const AdmPermissions = import.meta.env.VITE_API_ADM_PERMISSIONS;
    const AdmPhone = import.meta.env.VITE_API_ADM_PHONE;
    const AdmEmail = import.meta.env.VITE_API_ADM_EMAIL;
    const AdmId = import.meta.env.VITE_API_ADM_ID;

    setTimeout(() => {
      if (
        permissions == AdmPermissions &&
        phone == AdmPhone &&
        email == AdmEmail &&
        idUser == AdmId
      ) {
        setADM(true);
      }
    }, 1000);
  }

  //SET USER
  useEffect(() => {
    if (user) {
      setPhone(user.phone);
      setEmail(user.email);
      setPermissions(user.permissions);
      setIdUser(user._id);
    }
  }, [user]);

  // Start Verify
  useEffect(() => {
    const Time = setTimeout(() => {
      AdmInfo();
    }, 1000);

    return () => clearTimeout(Time);
  }, [user, dispatch]);

  //renderizando
  useEffect(() => {
    dispatch(GetArticle(id));
  }, [dispatch, id]);

  return (
    <div className="ArticleDescription">
      <div className="ArticleDescription_container">
        {/* ARTICLE */}
        {loading ? (
          <LoadingArticle />
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

              {auth && (
                <div className="ArticleDescription_box-Likes-Views">
                  <div className="ArticleDescription_box-Likes-Views-Container">
                    <div className="ArticleDescription_box-Container-Likes">
                      <div className="ArticleDescription_box-Container-Likes-content">
                        <FaRegHeart
                          className="ArticleDescription_box-Icons iconHeart"
                          onClick={addLikes}
                        />
                        <p>{article.likes && article.likes.length}</p>
                      </div>
                    </div>

                    <div className="ArticleDescription_box-Container-Views">
                      <div className="ArticleDescription_box-Container-Views-content">
                        <IoEyeOutline className="ArticleDescription_box-Icons" />
                        <p>{article.views && article.views.length}</p>
                      </div>
                    </div>

                    <div className="ArticleDescription_box-Container-Commets">
                      <div className="ArticleDescription_box-Container-Commets-content">
                        <FaRegCommentAlt className="ArticleDescription_box-Icons" />

                        <p>{article.comments && article.comments.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ARTICLE */}
      </div>
    </div>
  );
};

export default ArticleDescription;
