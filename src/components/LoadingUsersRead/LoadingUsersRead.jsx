import "./LoadingUsersRead.css";

const LoadingUsersRead = () => {
  return (
    <div className="LoadingUsersRead">
      <div className="LoadingUsersRead_container">
        <div className="LoadingUsersRead_content">
          <div className="LoadingUsersRead_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingUsersRead;
