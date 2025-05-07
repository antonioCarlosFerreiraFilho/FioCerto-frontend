//CSS
import "./LoadingGallery.css";

const LoadingGallery = () => {
  return (
    <div className="LoadingGallery">
      <div className="LoadingGallery_container">
        <div className="LoadingGallery_content">
          <div className="LoadingGallery_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingGallery;
