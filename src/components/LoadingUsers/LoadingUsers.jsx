import "./LoadingUsers.css";

const LoadingUsers = () => {
  return (
    <div className="LoadingUsers">
      <div className="LoadingUsers_container">
        <div className="LoadingUsers_content">
          <div className="LoadingUsers_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingUsers;
