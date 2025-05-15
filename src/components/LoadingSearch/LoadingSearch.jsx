import "./LoadingSearch.css";

const LoadingSearch = () => {
  return (
    <div className="LoadingSearch">
      <div className="LoadingSearch_container">
        <div className="LoadingSearch_content">
          <div className="LoadingSearch_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSearch;
