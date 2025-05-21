//CSS
import "./UpdateOrDelete.css";
//react icons
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { LuOctagonAlert } from "react-icons/lu";
//react
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//components
import MessageError from "../MessageError/MessageError";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { UpdateArticle, DeleteArticle, reset } from "../../slices/articleSlice";

const UpdateOrDelete = () => {
  //react
  const { id } = useParams();

  //Redux
  const dispatch = useDispatch();
  const { article, loading, errors, message } = useSelector(
    (state) => state.article
  );

  // States Update Article
  const [miniDescri, setMiniDescri] = useState("");
  const [firstDescri, setFirstDescri] = useState("");
  const [lastDescri, setLastDescri] = useState("");

  //redirect Gallery
  const navigate = useNavigate();
  //Delete Article
  function EventDeleteArticle(id) {
    dispatch(DeleteArticle(id));
    dispatch(reset());
    navigate("/gallery");
  }

  //Update Article
  function EventUpdateArticle(e) {
    e.preventDefault();

    const updateData = {
      miniDescri,
      firstDescri,
      lastDescri,
      id,
    };

    dispatch(UpdateArticle(updateData));

    setTimeout(() => {
      dispatch(reset());
      window.location.reload(true);
    }, 4000);
  }

  //Open Or Close View box update
  function EventOpenOrClose() {
    const Button = document.querySelector(".UpdateOrDelete-iconUpdate");
    const Box = document.querySelector(".UpdateOrDelete_box-UpdateView");

    //Add Class View Box-Update
    Button.addEventListener("click", () => {
      Box.classList.toggle("UpdateOrDelete_box-UpdateViewJS");
    });
  }

  //Start Events JS Dom
  useEffect(() => {
    const time = setTimeout(() => {
      EventOpenOrClose();
    }, 1000);

    return () => clearTimeout(time);
  });

  return (
    <div className="UpdateOrDelete">
      <div className="UpdateOrDelete_container">
        <div className="UpdateOrDelete_content">
          <div className="UpdateOrDelete_box-updateORdelete">
            <div className="UpdateOrDelete_content-Event">
              <CiEdit className="UpdateOrDelete_content-Event-icon UpdateOrDelete-iconUpdate" />
            </div>
            <div className="UpdateOrDelete_content-Event">
              <LuOctagonAlert className="UpdateOrDelete_content-Event-icon alertUP-DEl" />
            </div>
            <div className="UpdateOrDelete_content-Event">
              <CiTrash
                className="UpdateOrDelete_content-Event-icon UpdateOrDelete-iconDelete"
                onClick={() => EventDeleteArticle(id)}
              />
            </div>
          </div>
          {errors && (
            <div className="UpdateOrDelete_box-MessageError">
              <div className="UpdateOrDelete_box-MessageError-box">
                <MessageError errors={errors} type="error" />
              </div>
            </div>
          )}
          {message && (
            <div className="UpdateOrDelete_box-MessageError">
              <div className="UpdateOrDelete_box-MessageError-box">
                <MessageError errors={message} type="sucess" />
              </div>
            </div>
          )}

          <div className="UpdateOrDelete_box-UpdateView">
            <form
              className="UpdateOrDelete-boxForm"
              onSubmit={EventUpdateArticle}
            >
              <div className="UpdateOrDelete-boxForm-Description">
                {/* 1º Description */}
                <div className="UpdateOrDelete-FirstDescription">
                  <label htmlFor="">
                    <span>1º Descrição</span>
                    <textarea
                      name=""
                      id=""
                      placeholder="Primeira Descrição."
                      onChange={(e) => setMiniDescri(e.target.value)}
                      value={miniDescri || ""}
                    ></textarea>
                  </label>
                </div>
                {/* 2º Description and 3º Description */}
                <div className="UpdateOrDelete-MiddlewareANDlastDescription">
                  <label htmlFor="">
                    <span>2º Descrição</span>
                    <textarea
                      name=""
                      id=""
                      placeholder="Segunda Descrição."
                      onChange={(e) => setFirstDescri(e.target.value)}
                      value={firstDescri || ""}
                    ></textarea>
                  </label>
                  <label htmlFor="">
                    <span>3º Descrição</span>
                    <textarea
                      name=""
                      id=""
                      placeholder="Terceira Descrição."
                      onChange={(e) => setLastDescri(e.target.value)}
                      value={lastDescri || ""}
                    ></textarea>
                  </label>
                </div>
              </div>
              <div className="UpdateOrDelete-boxForm-Submit">
                <div className="UpdateOrDelete-boxForm-Submit-box">
                  <input type="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrDelete;
