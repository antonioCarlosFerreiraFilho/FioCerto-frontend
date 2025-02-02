import "./BannerSlider.css";

const BannerSlider = () => {
  return (
    <div className="BannerSlider">
      <div className="BannerSlider_container">
        <div className="BannerSlider_content">
          <div className="BannerSlider_content-box-Slide">
            <div className="BannerSlider_content-SlideImage">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="BannerSlider_content-call">
          <div className="BannerSlider_content-call-box">
            <p>Looking for a quality and affordable eletrician service ?</p>
            <a href="">Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
