//CSS
import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading">
      <div className="Loading_container">
        <div className="Loading_content">
          <div className="Loading_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
