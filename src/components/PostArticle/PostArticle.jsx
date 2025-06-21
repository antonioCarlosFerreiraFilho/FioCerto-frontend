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

const PostArticle = () => {

  // Stage Profile Image
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewImage2, setPreviewImage2] = useState("");
  const [previewImage3, setPreviewImage3] = useState("");

  //imagem user Escolhida
  const HandleFiles = (e) => {
    const images = e.target.files;

    if (images.length > 3 || images.length < 3) {
      alert("Somente 3 imagens");

      setTimeout(() => {

        setPreviewImage1("");
        setPreviewImage2("");
        setPreviewImage3("");
      }, 2000);

      return
    } else {

      setPreviewImage1(images[0]);
      setPreviewImage2(images[1]);
      setPreviewImage3(images[2]);
    }
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
          <form className="PostArticle-boxArticle-form">

            {/* FILES */}
            <div className="PostArticle-boxArticle-formContentFILES">

              <div className="PostArticle-Files">
                <div className="PostArticle-contentFiles">
                  <div className="PostArticle_content">

                    <div className="PostArticle_ImagesUP">
                      <img
                        src={
                          previewImage1
                            ? URL.createObjectURL(previewImage1)
                            : `./background/defaultImage.png`
                        }
                        alt=""
                      />
                    </div>

                    <div className="PostArticle_ImagesUP">
                      <img
                        src={
                          previewImage2
                            ? URL.createObjectURL(previewImage2)
                            : `./background/defaultImage.png`
                        }
                        alt=""
                      />
                    </div>

                    <div className="PostArticle_ImagesUP">
                      <img
                        src={
                          previewImage3
                            ? URL.createObjectURL(previewImage3)
                            : `./background/defaultImage.png`
                        }
                        alt=""
                      />
                    </div>

                    <div className="PostArticle-box-upload-image">
                      <div className="PostArticle-boxInputFile">
                        <label htmlFor="inFiles">
                          <FaCirclePlus className="PostArticle-boxInputFile-icon-update" />
                        </label>
                        <input
                          type="file"
                          id="inFiles"
                          name="images[]"
                          multiple
                          onChange={HandleFiles}
                          className="PostArticle-InputFile"
                        />
                      </div>
                    </div>
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
                  <input type="text" />
                </label>

                <label className="PostArticle-Descri">
                  <span>Mini-Descrição</span>
                  <textarea></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>2º Titulo</span>
                  <input type="text" />
                </label>

                <label className="PostArticle-Descri">
                  <span>2º Descrição</span>
                  <textarea></textarea>
                </label>
              </div>

              {/* articleTitle & miniDescri */}
              <div className="PostArticle-boxArticle-formContent">
                <label className="PostArticle-ArticleTitle">
                  <span>3º Titulo</span>
                  <input type="text" />
                </label>

                <label className="PostArticle-Descri">
                  <span>3º Descrição</span>
                  <textarea></textarea>
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
        </div>
      </div>
    </div>
  );
};

export default PostArticle;