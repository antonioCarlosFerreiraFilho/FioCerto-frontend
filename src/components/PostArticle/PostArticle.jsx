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
  const [articleTitle, setArticleTitle] = useState("");
  const [miniDescri, setMiniDescri] = useState("");
  const [firstTitle, setFirstTitle] = useState("");
  const [firstDescri, setFirstDescri] = useState("");
  const [lastTitle, setLastTitle] = useState("");
  const [lastDescri, setLastDescri] = useState("");
  const [images, setImages] = useState({ image1: null, image2: null, image3: null });


  const handleChange = (e) => {
    const { name, files } = e.target;
    setImages((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataStrig = new FormData();
    const formDataFiles = new FormData();
    formDataFiles.append('image1', images.image1);
    formDataFiles.append('image2', images.image2);
    formDataFiles.append('image3', images.image3);

    const newPost = {

      files: formDataFiles,
      articleTitle,
      miniDescri,
      firstTitle,
      firstDescri,
      lastTitle,
      lastDescri
    }

    const photoFormData = Object.keys(newPost).foeEach((key) => formDataStrig.append(key, newPost[key]));

    formDataStrig.append("article", photoFormData);

    await dispatch(publishArticle(formDataStrig));

    setTimeout(() => {

      dispatch(reset());
    }, 4000);
  };

  // Upload Article
  const postArticle = async (e) => {


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
          <form className="PostArticle-boxArticle-form" onSubmit={handleSubmit}>

            {/* FILES */}
            <div className="PostArticle-boxArticle-formContentFILES">

              <div className="PostArticle-Files">
                <div className="PostArticle-contentFiles">
                  <div className="PostArticle_content">
                    <input type="file" name="image1" accept="image/*" onChange={handleChange} required />
                    <br />
                    <input type="file" name="image2" accept="image/*" onChange={handleChange} required />
                    <br />
                    <input type="file" name="image3" accept="image/*" onChange={handleChange} required />
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
                    onChange={(e) => setArticleTitle(e.target.value)}
                    value={articleTitle || ""}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>Mini-Descrição</span>
                  <textarea
                    onChange={(e) => setMiniDescri(e.target.value)}
                    value={miniDescri || ""}
                  ></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>2º Titulo</span>
                  <input type="text"
                    onChange={(e) => setFirstTitle(e.target.value)}
                    value={firstTitle || ""}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>2º Descrição</span>
                  <textarea
                    onChange={(e) => setFirstDescri(e.target.value)}
                    value={firstDescri || ""}
                  ></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>3º Titulo</span>
                  <input type="text"
                    onChange={(e) => setLastTitle(e.target.value)}
                    value={lastTitle || ""}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>3º Descrição</span>
                  <textarea
                    onChange={(e) => setLastDescri(e.target.value)}
                    value={lastDescri || ""}
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