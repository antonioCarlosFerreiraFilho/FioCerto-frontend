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
  const [articleTitle, setArticleTitle] = useState('');
  const [miniDescri, setMiniDescri] = useState('');

  const [firstTitle, setFirstTitle] = useState('');
  const [firstDescri, setFirstDescri] = useState('');

  const [lastTitle, setLastTitle] = useState('');
  const [lastDescri, setLastDescri] = useState('');
  
  const [images, setImages] = useState([]);
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewImage2, setPreviewImage2] = useState("");
  const [previewImage3, setPreviewImage3] = useState("");

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 3) {
      alert("Você só pode enviar no máximo 3 imagens.");
      return;
    }
    setImages(selectedFiles);

    setTimeout(()=> {
      
      setPreviewImage1(selectedFiles[0]);
      setPreviewImage2(selectedFiles[1]);
      setPreviewImage3(selectedFiles[2]);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    const newPost = {

      files: images, 
      articleTitle,
      miniDescri,
      firstTitle,
      firstDescri,
      lastTitle,
      lastDescri,
    }

    // Adiciona imagens
    await images.forEach((file) => {
      formData.append('files', file); // mesma chave para array de imagens
    });

    // Campos de texto
    formData.append('articleTitle', articleTitle);
    formData.append('miniDescri', miniDescri);
    formData.append('firstTitle', firstTitle);
    formData.append('firstDescri', firstDescri);
    formData.append('lastTitle', lastTitle);
    formData.append('lastDescri', lastDescri);

    await dispatch(publishArticle(formData));

    setTimeout(()=> {

      dispatch(reset());
    }, 4000);

    //const DataJsonPost = JSON.stringify(jsonData);
  };

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
          <form className="PostArticle-boxArticle-form" onSubmit={handleSubmit} >

            {/* FILES */}
            <div className="PostArticle-boxArticle-formContentFILES">
              <div className="PostArticle-Files">
                <div className="PostArticle-contentFiles">
                  {/* Box image01 */}
                  <div className="PostArticle-Boxview-Image">
                    <div className="PostArticle-Boxview-Image-content">
                      <img src={
                        previewImage1
                          ? URL.createObjectURL(previewImage1)
                          : `./background/defaultImage.png`
                      } 
                      alt="" 
                      />
                    </div>
                  </div>
                  {/* Box image02 */}
                  <div className="PostArticle-Boxview-Image">
                    <div className="PostArticle-Boxview-Image-content">
                      <img src={
                         previewImage2
                          ? URL.createObjectURL(previewImage2)
                          : `./background/defaultImage.png`
                      } 
                      alt="" 
                      />
                    </div>
                  </div>
                  {/* Box image03 */}
                  <div className="PostArticle-Boxview-Image">
                    <div className="PostArticle-Boxview-Image-content">
                      <img src={
                         previewImage3
                          ? URL.createObjectURL(previewImage3)
                          : `./background/defaultImage.png`
                      } 
                      alt="" 
                      />
                    </div>
                  </div>
                  {/* Box inputFile */}
                  <div className="PostArticle_content">
                    <label htmlFor="selectFiles">
                      <FaCirclePlus className="iconSelectFiles"/>
                    </label>
                    <input
                    type="file"
                    multiple
                    id="selectFiles"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="selectFilesInputfile"
                    />
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
                    onChange={(e)=> setArticleTitle(e.target.value)}
                    value={articleTitle || ""}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>Mini-Descrição</span>
                  <textarea
                    name="miniDescri"
                    onChange={(e)=> setMiniDescri(e.target.value)}
                    value={miniDescri || ""}
                  ></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>2º Titulo</span>
                  <input type="text"
                    name="firstTitle"
                    onChange={(e)=> setFirstTitle(e.target.value)}
                    value={firstTitle || ""}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>2º Descrição</span>
                  <textarea
                    name="firstDescri"
                    onChange={(e)=> setFirstDescri(e.target.value)}
                    value={firstDescri || ""}
                  ></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>3º Titulo</span>
                  <input type="text"
                    name="lastTitle"
                    onChange={(e)=> setLastTitle(e.target.value)}
                    value={lastTitle || ""}
                  />
                </label>

                <label className="PostArticle-Descri">
                  <span>3º Descrição</span>
                  <textarea
                    name="lastDescri"
                    onChange={(e)=> setLastDescri(e.target.value)}
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