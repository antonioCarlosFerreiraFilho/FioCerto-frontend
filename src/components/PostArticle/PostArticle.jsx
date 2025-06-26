//css
import "./PostArticle.css";
//react icons
import { FaTrashAlt } from "react-icons/fa";
//react icons
import { FaCirclePlus } from "react-icons/fa6";
//Hooks
import { useAuth } from "../../hooks/useAuth";
//react
import { useEffect, useState } from "react";
//Slice
import { publishArticle, reset } from "../../slices/articleSlice";
//redux
import { useSelector, useDispatch } from "react-redux";
//components
import MessageError from "../MessageError/MessageError";

const PostArticle = () => {

  //Redux
  const dispatch = useDispatch();
  const {
    article,
    articles,
    loading: loadingArticle,
    errors,
    message,
  } = useSelector((state) => state.article);

  // Article params
  const [articleData, setArticleData] = useState({});

  function onFileChange(e) {

    setArticleData({ ...articleData, file: [...e.target.files] });
  }

  function handleChange(e) {

    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  }

  async function submitNewArticle(e) {

    e.preventDefault();

    const formData = new FormData;

    await Object.keys(articleData).forEach((key) => {
      if (key === 'file') {
        console.log("ola")
      } else {
        formData.append(key, articleData[key]);
      }
    })

    console.log(formData);

    setTimeout(() => {

      dispatch(reset());
    }, 4000);
  }

  return (
    <div className="PostArticle-container">
      <div className="PostArticle-content">
        <div className="PostArticle-content-TitleForm">
          <div className="PostArticle-content-TitleForm-content">
            <h1>Permição de ADM:</h1>
            <h2>Postagem de Artigos.</h2>
            <p>Todos os Campos são <strong>Obrigatorios.</strong></p>
          </div>
        </div>
        <div className="PostArticle-boxArticle">
          <form className="PostArticle-boxArticle-form" onSubmit={submitNewArticle} >

            {/* FILES */}
            <div className="PostArticle-boxArticle-formContentFILES">

              <div className="PostArticle-Files">
                <div className="PostArticle-contentFiles">
                  <div className="PostArticle_content">
                    <input
                      text="Artigos images"
                      type="file"
                      name="file"
                      onChange={onFileChange}
                      multiple={true}

                    />
                    <br />
                  </div>
                </div>
              </div>

            </div>

            {/* DATA */}
            <div className="PostArticle-boxArticle-containerDATA">
              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>Titulo Artigo</span>
                  <input type="text"
                    name="articleTitle"
                    onChange={handleChange}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>Mini-Descrição</span>
                  <textarea
                    name="miniDescri"
                    onChange={handleChange}

                  ></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>2º Titulo</span>
                  <input type="text"
                    name="firstTitle"
                    onChange={handleChange}

                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>2º Descrição</span>
                  <textarea
                    name="firstDescri"
                    onChange={handleChange}

                  ></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>3º Titulo</span>
                  <input type="text"
                    name="lastTitle"
                    onChange={handleChange}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>3º Descrição</span>
                  <textarea
                    name="lastDescri"
                    onChange={handleChange}
                  ></textarea>
                </label>
              </div>

              {/* Submit */}
              <div className="PostArticle-boxArticle-formContent">
                <div className="PostArticle-Submit">
                  <input type="submit" />
                </div>
              </div>
            </div>
          </form>
          {errors && (
            <div className="PostArticle_MessageError-container">
              <div className="PostArticle_MessageError-content">
                <MessageError errors={errors} type="error" />
              </div>
            </div>
          )}
          {message && (
            <div className="PostArticle_MessageError-container">
              <div className="PostArticle_MessageError-content">
                <MessageError errors={message} type="sucess" />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PostArticle;