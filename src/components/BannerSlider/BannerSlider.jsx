//css
import "./BannerSlider.css";
//react
import { useEffect, useState } from "react";
//reactIcons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const BannerSlider = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [count, setCount] = useState(0);
  const [toggleCount, setToggleCount] = useState(0);

  function All() {
    //Banner Image Array
    const Images = document.querySelectorAll(
      ".BannerSlider_content-SlideImage"
    );
    const boxes = document.querySelectorAll(
      ".BannerSlider_content-box-Slide-counter"
    );
    const maxImages = Images.length;
    let imageCurrent = 0;

    //Arrow
    const controllersArrow = document.querySelectorAll(".Controllers");
    const ArrowRight = document.querySelector(
      ".BannerSlider_content-box-Slide-ArrowRight"
    );
    const ArrowLeft = document.querySelector(
      ".BannerSlider_content-box-Slide-ArrowLeft"
    );
    const Banner = document.querySelector(".BannerSlider_content");

    controllersArrow.forEach((arrows) => {
      arrows.addEventListener("click", () => {
        if (
          arrows.classList.contains(
            "BannerSlider_content-box-Slide-ArrowLeft-icon"
          )
        ) {
          boxes[imageCurrent].classList.remove("activeCurrent");
          Images[imageCurrent].classList.remove("activeBanner");

          if (imageCurrent <= 0) {
            imageCurrent = maxImages;
          }
          imageCurrent = imageCurrent - 1;

          boxes[imageCurrent].classList.add("activeCurrent");
          Images[imageCurrent].classList.add("activeBanner");
        } else {
          boxes[imageCurrent].classList.remove("activeCurrent");
          Images[imageCurrent].classList.remove("activeBanner");

          imageCurrent++;

          if (imageCurrent >= maxImages) {
            imageCurrent = 0;
          }

          Images[imageCurrent].classList.add("activeBanner");
          boxes[imageCurrent].classList.add("activeCurrent");
        }
      });
    });

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
  }

  useEffect(() => {
    //Banner Image Array
    const Images = document.querySelectorAll(
      ".BannerSlider_content-SlideImage"
    );
    const boxes = document.querySelectorAll(
      ".BannerSlider_content-box-Slide-counter"
    );
    const maxImages = Images.length;
    let imageCurrent = 0;

   

    Images[count].classList.remove("activeBanner");
  }, [count]);

  function controllerBanner() {
    //Play | Pause
    const buttonPause = document.querySelector(
      ".BannerSlider_content-box-Pause-icon"
    );
    const buttonPlay = document.querySelector(
      ".BannerSlider_content-box-Play-icon"
    );
    const PlayPause = document.querySelectorAll(".buttonController");

    PlayPause.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.classList.contains("BannerSlider_content-box-Pause-icon")) {
          buttonPause.classList.add("BannerSlider_content-box-Pause-iconJS");
          buttonPlay.classList.add("BannerSlider_content-box-Play-iconJS");

          setIsRunning(false);
        } else {
          buttonPlay.classList.remove("BannerSlider_content-box-Play-iconJS");
          buttonPause.classList.remove("BannerSlider_content-box-Pause-iconJS");
          setIsRunning(true);
        }
      });
    });
  }

  useEffect(() => {
    if (!isRunning) return;

    const Images = document.querySelectorAll(
      ".BannerSlider_content-SlideImage"
    );

  
    if (count >= 3) {
      setCount((prev) => {
        return (prev = 0);
      });
    }

    const interval = setInterval(() => {
    
      setCount((prev) => {
        return prev + 1;
      });

     
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning, count]);

  useEffect(() => {
    //Banner Image Array
    const Images = document.querySelectorAll(
      ".BannerSlider_content-SlideImage"
    );
    const boxes = document.querySelectorAll(
      ".BannerSlider_content-box-Slide-counter"
    );
    const maxImages = Images.length;
    let imageCurrent = 0;

   

    Images[count].classList.add("activeBanner");
  }, [count]);

  //start
  useEffect(() => {
    const Time = setTimeout(() => {
      controllerBanner();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="BannerSlider">
      <div className="BannerSlider_container">
        <div className="BannerSlider_content">
          <div className="BannerSlider_content-box-Slide-ArrowLeft">
            <IoIosArrowBack className="BannerSlider_content-box-Slide-ArrowLeft-icon Controllers" />
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
            <IoIosArrowForward className="BannerSlider_content-box-Slide-ArrowRight-icon Controllers" />
          </div>
          <div className="BannerSlider_content-box-Slide-BoxCounter">
            <div className="BannerSlider_content-box-Slide-accountants">
              <div className="BannerSlider_content-box-Slide-Pause">
                <FaPause className="BannerSlider_content-box-Pause-icon buttonController" />
                <FaPlay className="BannerSlider_content-box-Play-icon buttonController" />
              </div>
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
