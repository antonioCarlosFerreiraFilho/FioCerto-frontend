//css
import "./LoadingComments.css";

const LoadingComments = () => {
  return (
    <div className="LoadingComments">
      <div className="LoadingComments_container">
        <div className="LoadingComments_content">
          <div className="LoadingComments_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComments;
