//css
import "./CommentsContent.css";
//react icons
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
//react
import { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { CommentsArticle, reset } from "../../slices/articleSlice";
import { profile } from "../../slices/userSlice";
//hooks
import { useAuth } from "../../hooks/useAuth";
//components
import MessageError from "../MessageError/MessageError";

const CommentsContent = () => {
  //users
  const { auth, loading } = useAuth();

  //redux
  const dispatch = useDispatch();
  const {
    article,
    message,
    error,
    loading: LoadingArticle,
  } = useSelector((state) => state.article);
  const { user } = useSelector((state) => state.user);

  // Comments Views
  function arrowView() {
    const boxArrow = document.querySelector(
      ".CommentsContent_box-lengthComments-Arrow"
    );

    const arrowUp = document.querySelector(
      ".CommentsContent_box-lengthComments-Arrow-Up"
    );
    const arrowDown = document.querySelector(
      ".CommentsContent_box-lengthComments-Arrow-Down"
    );

    const boxView = document.querySelector(
      ".CommentsContent_box-viewsCommentsJS"
    );

    if (boxArrow) {
      boxArrow.addEventListener("click", () => {
        arrowUp.classList.toggle(
          "CommentsContent_box-lengthComments-Arrow-UpJS"
        );
        arrowDown.classList.toggle(
          "CommentsContent_box-lengthComments-Arrow-DownJS"
        );

        boxView.classList.toggle("CommentsContent_box-viewsComments");
      });
    }
  }

  // Arrow Comments Event
  useEffect(() => {
    const Time = setTimeout(() => {
      arrowView();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="CommentsContent">
      <div className="CommentsContent_container">
        {LoadingArticle ? (
          <p>Loading...</p>
        ) : (
          <div className="CommentsContent_content">
            <div className="CommentsContent_box-lengthComments">
              <div className="CommentsContent_box-content-title-arrow">
                <div className="CommentsContent_box-lengthComments-title">
                  <p>{article.comments && article.comments.length}</p>
                  <p>Comentarios</p>
                </div>
                <div className="CommentsContent_box-lengthComments-Arrow">
                  <FaArrowUp className="CommentsContent_box-lengthComments-Arrow-Up" />
                  <FaArrowDown className="CommentsContent_box-lengthComments-Arrow-Down" />
                </div>
              </div>
            </div>

            <div className="CommentsContent_box-viewsCommentsJS">
              <div className="CommentsContent_box-viewsComments-container">
                <div className="CommentsContent_box-viewsComments-content">
                  {article.comments && article.comments.length === 0 ? (
                    <p className="CommentsContent_box-LengthNull">
                      Não ha comentarios aqui !.
                    </p>
                  ) : (
                    <div className="CommentsContent_box-viewsComments-comment">
                      {article.comments &&
                        article.comments.map((comment) => (
                          <div className="CommentsContent_box-viewsComments-comment-box" key={comment.idComment}>
                            <div className="CommentsContent_box-viewsComments-comment-box-InfoUser">
                              <div className="CommentsContent_box-viewsComments-comment-box-InfoUser-ImageBox">
                                <img
                                  src="/ImageUserDefault/User02.png"
                                  alt="imageUser"
                                />
                              </div>
                              <div className="CommentsContent_box-viewsComments-comment-box-InfoUser-NameUserData">
                                <h1>{comment.userName}</h1>
                                <p>{comment.dataComment}</p>
                              </div>
                            </div>
                            <div className="CommentsContent_box-viewsComments-comment-box-description">
                              <p>
                              {comment.comments}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="CommentsContent_box-Form">
              <div className="CommentsContent_box-Form-content">
                <h1>Deixe Sua Opinião.</h1>
                <form className="CommentsContent_box-Form-container">
                  {/* Comment */}
                  <div className="CommentsContent_box-Form-container-comment">
                    <label>
                      <span>Comentario</span>
                      <textarea placeholder="Qual sua opinião sobre ?"></textarea>
                    </label>
                  </div>
                  {/* Captcha */}
                  <div className="CommentsContent_box-Form-container-captcha">
                    <label>
                      <span>Vocé é Humano ?</span>
                      <input type="text" placeholder="8 + 9 = ?" />
                    </label>
                  </div>
                  {/* Submit */}
                  <div className="CommentsContent_box-Form-container-Submit">
                    <input type="submit" value="Comentar" />
                  </div>
                  {/* MessageError */}
                  <div className="CommentsContent_box-Form-container-MessageError">
                    <div className="CommentsContent_box-Form-container-MessageError-content">
                      <MessageError />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsContent;
