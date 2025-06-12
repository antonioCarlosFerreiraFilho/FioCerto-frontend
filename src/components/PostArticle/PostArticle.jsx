import "./PostArticle.css";

const PostArticle = () => {
  return (
    <div className="PostArticle-container">
      <div className="PostArticle-content">
        <div className="PostArticle-boxArticle">
          <form className="PostArticle-boxArticle-form">
            {/* FILES */}
            <div className="PostArticle-boxArticle-formContentFILES">
              <div className="PostArticle-Files">
                {/* box Images */}
                <div className="PostArticle-Files-contentImages">
                  
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
