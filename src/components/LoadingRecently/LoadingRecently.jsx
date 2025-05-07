import "./LoadingRecently.css";

const LoadingRecently = () => {
  return (
    <div className="LoadingRecently">
      <div className="LoadingRecently_container">
        <div className="LoadingRecently_content">
          <div className="LoadingRecently_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingRecently;
