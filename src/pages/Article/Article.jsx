//Css
import "./Article.css";
//Components
import BannerArticle from "../../components/BannerArticle/BannerArticle";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ArticleService from "../../components/ArticleService/ArticleService";

const Article = () => {
  return (
    <div>
      <section className="Article_content">
        <section>
          <BannerArticle />
        </section>
        <div className="Article_content-container">
          <div className="Article_content-Description">
            <div className="Article_content-BrokenBox-boxes">
              <section>
                <ArticleDescription />
              </section>

              <section>
                <ArticleService />
              </section>
            </div>
            <div className="Article_content-BrokenBox"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
