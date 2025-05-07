//css
import "./LoadingAbout.css";

const LoadingAbout = () => {
  return (
    <div className="LoadingAbout">
      <div className="LoadingAbout_container">
        <div className="LoadingAbout_content">
          <div className="LoadingAbout_content-loading">
            <img src="/loading/loading.gif" alt="gif Loading" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingAbout
