//Css
import "./Article.css";
//Components
import BannerArticle from "../../components/BannerArticle/BannerArticle";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ArticleService from "../../components/ArticleService/ArticleService";

const Article = () => {
  return (
    <div>
      <section>
        <BannerArticle />
      </section>

      <section>
        <ArticleDescription />
      </section>

      <section>
        <ArticleService />
      </section>
    </div>
  );
};

export default Article;
