//Css
import "./Article.css";
//Components
import BannerArticle from "../../components/BannerArticle/BannerArticle";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import UpdateOrDelete from "../../components/UpdateOrDelete/UpdateOrDelete";
import ArticleService from "../../components/ArticleService/ArticleService";
import CommentsContent from "../../components/CommentsContent/CommentsContent";
import BrokenBox from "../../components/BrokenBox/BrokenBox";

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
                <UpdateOrDelete />
              </section>

              <section>
                <ArticleService />
              </section>

              <section>
                <CommentsContent />
              </section>
            </div>
            <div className="Article_content-BrokenBox">
              <BrokenBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
