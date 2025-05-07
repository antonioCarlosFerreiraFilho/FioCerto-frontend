//CSS
import "./LoadingArticle.css";

const LoadingArticle = () => {
  return (
    <div className="LoadingArticle">
      <div className="LoadingArticle_container">
        <div className="LoadingArticle_content">
          <div className="LoadingArticle_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingArticle;
