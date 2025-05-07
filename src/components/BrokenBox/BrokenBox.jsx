//css
import { NavLink } from "react-router-dom";
import "./BrokenBox.css";
//react icons
import { IoIosArrowForward } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa6";
//hooks
import { useScroll } from "../../hooks/useScroll";
//react
import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { RecentlyPostedArticle } from "../../slices/articleSlice";
//components
import LoadingRecently from "../LoadingRecently/LoadingRecently";

const BrokenBox = () => {
  //Scroll top
  function ScrollTop() {
    const list = document.querySelectorAll(".ControllerLink-BrokenBox");

    list.forEach((Element) => {
      Element.addEventListener("click", () => {
        useScroll(0, 0, 0);
      });
    });
  }

  //redux
  const dispatch = useDispatch();
  //slices
  const { articles, recently, loading } = useSelector((state) => state.article);

  //start
  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollTop();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  //Rederizando
  useEffect(() => {
    dispatch(RecentlyPostedArticle());
  }, [dispatch]);

  return (
    <div className="BrokenBox">
      <div className="BrokenBox_container">
        <div className="BrokenBox_content">
          {loading ? (
            <LoadingRecently/>
          ) : (
            <div className="BrokenBox_box-title-links">
              {recently.map((recent) => (
                <div className="BrokenBox_box-title-links-content" key={recent._id}>
                  <NavLink className="BrokenBox_box-title-links-content-link ControllerLink-BrokenBox" to={`/article/${recent._id}`} >
                    <h1>{recent.firstTitle}</h1>
                    <div className="BrokenBox_box-title-links-content-link-Arrow">
                      <IoIosArrowForward />
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="BrokenBox_content-content">
          <div className="BrokenBox_content-content-LinkContact">
            <h1>Peça um oraçamento sem Custos !</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ea
              fuga natus, qui labore veniam unde facilis.
            </p>
            <NavLink to="/contact" className="ControllerLink-BrokenBox">
              Contate-me
            </NavLink>
          </div>
        </div>
        <div className="BrokenBox_content-infoProfessional">
          <div className="BrokenBox_content-infoProfessional-title">
            <AiFillThunderbolt className="BrokenBox_content-infoProfessional-title-icon" />
            <h1>Seu proficional !.</h1>
          </div>
        </div>
        <div className="BrokenBox_content-Services">
          <div className="BrokenBox_content-Services-boxTitle">
            <FaRegLightbulb className="BrokenBox_content-Services-boxTitle-icon" />
            <h1>Power Saving Tips</h1>
          </div>
          <div className="BrokenBox_content-Services-boxList">
            <ul className="BrokenBox_content-Services-List">
              <li>
                <p>Nec no eros probatus, consetetur theophrastus</p>
              </li>
              <li>
                <p>Nec no eros probatus, consetetur theophrastus</p>
              </li>
              <li>
                <p>Nec no eros probatus, consetetur theophrastus</p>
              </li>
              <li>
                <p>Nec no eros probatus, consetetur theophrastus</p>
              </li>
              <li>
                <p>Nec no eros probatus, consetetur theophrastus</p>
              </li>
              <li>
                <p>Nec no eros probatus, consetetur theophrastus</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokenBox;
