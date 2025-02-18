//css
import "./BannerSlider.css";
//react
import { useEffect, useState } from "react";
//reactIcons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BannerSlider = () => {
  const [isRunning, setIsRunning] = useState(true);
  let [counter, setCounter] = useState(0);

  //Pause | Start Banner
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

  function adc() {}

  //Loop
  useEffect(() => {
    const Banner = document.querySelector(".BannerSlider_content");
    const ArrowRight = document.querySelector(
      ".BannerSlider_content-box-Arroow-Right"
    );
    const ArrowLeft = document.querySelector(
      ".BannerSlider_content-box-Arroow-Left"
    );
    if (!isRunning) {
      Banner.addEventListener("click", () => {
        ArrowLeft.classList.add("ArrowLeftActive");
        ArrowRight.classList.add("ArrowRightActive");
      });

      //Arrow
      //Loop Images
      const Images = document.querySelectorAll(
        ".BannerSlider_content-SlideImage"
      );
      const boxesDescription = document.querySelectorAll(
        ".BannerSlider_content-box-Description-content"
      );
      const boxes = document.querySelectorAll(
        ".BannerSlider_content-box-Slide-counter"
      );
      const controllersArrow = document.querySelectorAll(".controller");
      controllersArrow.forEach((arrows) => {
        arrows.addEventListener("click", () => {
          if (
            arrows.classList.contains("BannerSlider_content-box-Arroow-Left")
          ) {
            Images[counter].classList.remove("activeBanner");
            boxesDescription[counter].classList.remove("CurrentDescription");
            boxes[counter].classList.remove("activeCurrent");

            setCounter((counter = counter - 1));
            if (counter < 0) {
              setCounter((counter = 3));
            }

            Images[counter].classList.add("activeBanner");
            boxesDescription[counter].classList.add("CurrentDescription");
            boxes[counter].classList.add("activeCurrent");
          } else {
            Images[counter].classList.remove("activeBanner");
            boxesDescription[counter].classList.remove("CurrentDescription");
            boxes[counter].classList.remove("activeCurrent");
            setCounter((counter = counter + 1));
            if (counter > 3) {
              setCounter((counter = 0));
            }
            Images[counter].classList.add("activeBanner");
            boxesDescription[counter].classList.add("CurrentDescription");
            boxes[counter].classList.add("activeCurrent");
          }
        });
      });

      return;
    }

    //Loop Images
    const Images = document.querySelectorAll(
      ".BannerSlider_content-SlideImage"
    );
    const boxesDescription = document.querySelectorAll(
      ".BannerSlider_content-box-Description-content"
    );
    const boxes = document.querySelectorAll(
      ".BannerSlider_content-box-Slide-counter"
    );

    function nextImage() {
      setCounter((counter = counter + 1));

      boxesDescription[counter].classList.add("CurrentDescription");
      boxes[counter].classList.add("activeCurrent");
      Images[counter].classList.add("activeBanner");
    }

    const interval = setInterval(() => {
      if (
        ArrowLeft.classList.contains("ArrowLeftActive") &&
        ArrowRight.classList.contains("ArrowRightActive")
      ) {
        ArrowLeft.classList.remove("ArrowLeftActive");
        ArrowRight.classList.remove("ArrowRightActive");
      }

      Images[counter].classList.remove("activeBanner");
      boxesDescription[counter].classList.remove("CurrentDescription");
      boxes[counter].classList.remove("activeCurrent");

      if (counter >= 3) {
        setCounter((counter = -1));
      }

      nextImage();
    }, 9000);

    return () => clearInterval(interval);
  }, [isRunning, counter]);

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
          <div className="BannerSlider_content-box-Arroow-ArrowLeftBox">
            <IoIosArrowBack className="BannerSlider_content-box-Arroow-Left controller" />
          </div>

          <div className="BannerSlider_content-box-Slide">
            <img
              src="./public/banner/slide_1.jpg"
              alt=""
              className="BannerSlider_content-SlideImage activeBanner"
            />
            <img
              src="./public/banner/slide_2.jpg"
              alt=""
              className="BannerSlider_content-SlideImage"
            />
            <img
              src="./public/banner/slide_3.jpg"
              alt=""
              className="BannerSlider_content-SlideImage"
            />
            <img
              src="./public/banner/slide_4.jpg"
              alt=""
              className="BannerSlider_content-SlideImage"
            />
          </div>

          <div className="BannerSlider_content-box-form-container">
            <div className="BannerSlider_content-box-form-container-content">
              <form
                action=""
                className="BannerSlider_content-box-form-container-contentForm"
              >
                <div className="BannerSlider_content-box-form-container-contentForm-title">
                  <h1>Quick Contact</h1>
                </div>
                {/* NAME */}
                <div className="BannerSlider_content-box-form-container-contentForm-inputs">
                  <label htmlFor="">
                    <span>Name</span>
                    <input type="text" />
                  </label>
                </div>
                {/* PHONE */}
                <div className="BannerSlider_content-box-form-container-contentForm-inputs">
                  <label htmlFor="">
                    <span>Numero</span>
                    <input type="text" />
                  </label>
                </div>
                {/* CITY */}
                <div className="BannerSlider_content-box-form-container-contentForm-inputs">
                  <label htmlFor="">
                    <span>Localidade</span>
                    <input type="text" />
                  </label>
                </div>
                {/* Description */}
                <div className="BannerSlider_content-box-form-container-contentForm-textarea">
                  <label htmlFor="">
                    <span>Descrição do Trabalho</span>
                    <textarea name="" id=""></textarea>
                  </label>
                </div>
                {/* Submit */}
                <div className="BannerSlider_content-box-form-container-contentForm-submit">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>

          <div className="BannerSlider_content-box-Arroow-ArrowRigthBox">
            <IoIosArrowForward className="BannerSlider_content-box-Arroow-Right controller" />
          </div>

          <div className="BannerSlider_content-box-Description">
            <div className="BannerSlider_content-box-Description-container">
              <div className="BannerSlider_content-box-Description-content CurrentDescription">
                <h1>Proteção contra Curtos</h1>
                <p>Our professional provide Services</p>
                <NavLink>Saber Mais..</NavLink>
              </div>

              <div className="BannerSlider_content-box-Description-content">
                <h1>Projeto elétrico Certificado</h1>
                <p>Our professional provide Services</p>
                <NavLink>Saber Mais..</NavLink>
              </div>

              <div className="BannerSlider_content-box-Description-content">
                <h1>Manutenção preventiva</h1>
                <p>Our professional provide Services</p>
                <NavLink>Saber Mais..</NavLink>
              </div>

              <div className="BannerSlider_content-box-Description-content">
                <h1>Portinhola é Aterramentos</h1>
                <p>Our professional provide Services</p>
                <NavLink>Saber Mais..</NavLink>
              </div>
            </div>
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
