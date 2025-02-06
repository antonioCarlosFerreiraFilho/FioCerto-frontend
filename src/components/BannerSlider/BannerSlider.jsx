//css
import "./BannerSlider.css";
//react
import { useEffect } from "react";
//reactIcons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const BannerSlider = () => {
  function BannerArray() {
    //Stages Images
    const Images = document.querySelectorAll(
      ".BannerSlider_content-SlideImage"
    );
    const maxImages = Images.length;
    let imageCurrent = 0;

    //Function Image
    const nextImage = () => {
      Images[imageCurrent].classList.remove("activeBanner");

      imageCurrent++;

      if (imageCurrent >= maxImages) {
        imageCurrent = 0;
      }

      Images[imageCurrent].classList.add("activeBanner");
    };

    //Stages Controller Banner
    const Banner = document.querySelector(".BannerSlider_content");

    const ArrowLeft = document.querySelector(
      ".BannerSlider_content-box-Slide-ArrowLeft"
    );
    const ArrowRight = document.querySelector(
      ".BannerSlider_content-box-Slide-ArrowRight"
    );

    Banner.addEventListener("click", () => {
      ArrowLeft.classList.add("BannerSlider_content-box-Slide-ArrowLeftActive");
      ArrowRight.classList.add(
        "BannerSlider_content-box-Slide-ArrowRightActive"
      );

      setTimeout(() => {
        ArrowLeft.classList.remove(
          "BannerSlider_content-box-Slide-ArrowLeftActive"
        );
        ArrowRight.classList.remove(
          "BannerSlider_content-box-Slide-ArrowRightActive"
        );
      }, 9000);
    });

    //Stage ImageCurrent
    const boxes = document.querySelectorAll(
      ".BannerSlider_content-box-Slide-counter"
    );
    const maxBoxes = boxes.length;
    let BoxCounter = 0;

    const nextBox = () => {
      boxes[BoxCounter].classList.remove("activeCurrent");

      BoxCounter++;

      if (BoxCounter >= maxBoxes) {
        BoxCounter = 0;
      }

      boxes[BoxCounter].classList.add("activeCurrent");
    };

    setInterval(() => {
      nextImage();
      nextBox();
    }, 4000);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      BannerArray();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="BannerSlider">
      <div className="BannerSlider_container">
        <div className="BannerSlider_content">
          <div className="BannerSlider_content-box-Slide-ArrowLeft">
            <IoIosArrowBack className="BannerSlider_content-box-Slide-ArrowLeft-icon" />
          </div>
          <div className="BannerSlider_content-box-Slide">
            <img
              src="./public/banner/image_00.png"
              alt=""
              className="BannerSlider_content-SlideImage activeBanner"
            />
            <img
              src="./public/banner/image_01.png"
              alt=""
              className="BannerSlider_content-SlideImage"
            />
            <img
              src="./public/banner/image_02.png"
              alt=""
              className="BannerSlider_content-SlideImage"
            />
            <img
              src="./public/banner/image_03.png"
              alt=""
              className="BannerSlider_content-SlideImage"
            />
          </div>
          <div className="BannerSlider_content-box-Slide-ArrowRight">
            <IoIosArrowForward className="BannerSlider_content-box-Slide-ArrowRight-icon" />
          </div>
          <div className="BannerSlider_content-box-Slide-BoxCounter">
            <div className="BannerSlider_content-box-Slide-accountants">
              <div className="BannerSlider_content-box-Slide-counter activeCurrent"></div>
              <div className="BannerSlider_content-box-Slide-counter"></div>
              <div className="BannerSlider_content-box-Slide-counter"></div>
              <div className="BannerSlider_content-box-Slide-counter"></div>
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
