//css
import "./CommentsContent.css";
//react icons
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
//react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import {
  CommentsArticle,
  DelCommentsArticle,
  reset,
} from "../../slices/articleSlice";
import { profile } from "../../slices/userSlice";
//components
import MessageError from "../MessageError/MessageError";
import LoadingComments from "../LoadingComments/LoadingComments";
//Hooks
import { useAuth } from "../../hooks/useAuth";

const CommentsContent = () => {
  // Redux
  const dispatch = useDispatch();
  // Use Params
  const { id } = useParams();
  // Auth
  const { auth } = useAuth();

  // States Input FormcommentData
  const [commentText, setCommentText] = useState("");
  const [valueFirstChecking, setValueFirstChecking] = useState("");
  const [valueLastChecking, setValueLastChecking] = useState("");
  const [valueSum, setValueSum] = useState("");
  const [errorValue, setErrorValue] = useState("");
  // States User OR Adm
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");
  const [idUser, setIdUser] = useState("");
  // ADM
  const [ADM, setADM] = useState(false);

  //Slices
  const { article, message, errors, loading } = useSelector(
    (state) => state.article
  );
  const { user } = useSelector((state) => state.user);

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  //Rederizando
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
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setPassword(user.password);
      setPermissions(user.permissions);
      setIdUser(user._id);
    }
  }, [user]);

  // Number Random
  function namberRandom() {
    let namberFirst = Math.floor(Math.random() * 10);
    let namberLast = Math.floor(Math.random() * 10);

    setValueFirstChecking(namberFirst);
    setValueLastChecking(namberLast);
  }

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

  // Send newComment
  function newComment(e) {
    e.preventDefault();

    if (valueFirstChecking + valueLastChecking != valueSum) {
      setTimeout(() => {
        setErrorValue("");
      }, 4000);

      return setErrorValue(
        ` Tente novamente a soma de ${valueFirstChecking} + ${valueLastChecking} = ? `
      );
    } else {
      const commentData = {
        id: id,
        comments: commentText,
      };

      dispatch(CommentsArticle(commentData));
      setCommentText("");

      setTimeout(() => {
        dispatch(reset());
        namberRandom();
      }, 4000);
    }
  }

  // Delete Comment
  function commentDelete(id, commentId) {
    const dataComment = {
      id,
      commentId,
    };

    dispatch(DelCommentsArticle(dataComment));
    window.location.reload(true);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      AdmInfo();
    }, 1000);

    return () => clearTimeout(Time);
  }, [user, dispatch]);

  // Comments VIe
  useEffect(() => {
    const time = setTimeout(() => {
      arrowView();
      namberRandom();
    }, 1000);

    return (e) => clearTimeout(time);
  }, [dispatch]);

  return (
    <div className="CommentsContent">
      <div className="CommentsContent_container">
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
                {loading ? (
                  <LoadingComments />
                ) : (
                  <div>
                    {article.comments &&
                      article.comments.map((comment) => (
                        <div
                          className="CommentsContent_box-viewsComments-comment"
                          key={comment.idComment}
                        >
                          <div className="CommentsContent_box-viewsComments-comment-box">
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
                              {ADM && (
                                <div className="CommentsContent-DeleteBox">
                                  <FaTrash
                                    className="CommentsContent-DeleteIcon"
                                    onClick={() =>
                                      commentDelete(
                                        article._id,
                                        comment.idComment
                                      )
                                    }
                                  />
                                </div>
                              )}
                            </div>
                            <div className="CommentsContent_box-viewsComments-comment-box-description">
                              <p>{comment.comments}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
                {article.comments && article.comments.length === 0 && (
                  <p className="CommentsContent_box-LengthNull">
                    Não existem comentarios
                  </p>
                )}
              </div>
            </div>
          </div>

          {auth && (
            <div className="CommentsContent_box-Form">
              <div className="CommentsContent_box-Form-content">
                <h1>Deixe Sua Opinião.</h1>
                <form
                  className="CommentsContent_box-Form-container"
                  onSubmit={newComment}
                >
                  {/* Comment */}
                  <div className="CommentsContent_box-Form-container-comment">
                    <label>
                      <span>Comentario</span>
                      <textarea
                        placeholder="Qual sua opinião sobre ?"
                        onChange={(e) => setCommentText(e.target.value)}
                        value={commentText || ""}
                        maxLength={300}
                      ></textarea>
                    </label>
                  </div>
                  {/* Captcha */}
                  <div className="CommentsContent_box-Form-container-captcha">
                    <label>
                      <span>Vocé é Humano ?</span>
                      <input
                        type="text"
                        placeholder={`${valueFirstChecking} + ${valueLastChecking} = ?`}
                        onChange={(e) => setValueSum(e.target.value)}
                        value={valueSum || ""}
                        maxLength={5}
                      />
                    </label>
                  </div>
                  {/* Submit */}
                  <div className="CommentsContent_box-Form-container-Submit">
                    <input type="submit" value="Comentar" />
                  </div>
                  {/* MessageError */}
                  {errors && (
                    <div className="CommentsContent_box-Form-container-MessageError">
                      <div className="CommentsContent_box-Form-container-MessageError-content">
                        <MessageError errors={errors} type="error" />
                      </div>
                    </div>
                  )}

                  {errorValue && (
                    <div className="CommentsContent_box-Form-container-MessageError">
                      <div className="CommentsContent_box-Form-container-MessageError-content">
                        <MessageError errors={errorValue} type="error" />
                      </div>
                    </div>
                  )}

                  {message && (
                    <div className="CommentsContent_box-Form-container-MessageError">
                      <div className="CommentsContent_box-Form-container-MessageError-content">
                        <MessageError errors={message} type="sucess" />
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsContent;
