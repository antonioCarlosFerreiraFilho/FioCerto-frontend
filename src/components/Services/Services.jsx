//css
import "./Services.css";
//react
import { NavLink } from "react-router-dom";
//hooks
import { useScroll } from "../../hooks/useScroll";
//react
import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { aboutArticle } from "../../slices/articleSlice";

const Services = () => {
  //Scroll top
  function ScrollTop() {
    const list = document.querySelectorAll(".ControllerLink-service");

    list.forEach((Element) => {
      Element.addEventListener("click", () => {
        useScroll(0, 0, 0);
      });
    });
  }

  //redux
  const dispatch = useDispatch();
  //slices
  const { about, loading } = useSelector((state) => state.article);

  //start
  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollTop();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  //Rederizando
  useEffect(() => {
    dispatch(aboutArticle());
  }, [dispatch]);

  return (
    <div className="Services">
      <div className="Services_container">
        <div className="Services_content">
          <div className="Services_content-boxes">
            {about.map((article) => (
              <div className="Services_content-box" key={article._id}>
                <div className="Services_content-box-Image">
                  <img
                    src={`${article.imgURL[0]}`}
                    alt={`${article.imgNAME[0]}`}
                  />
                </div>
                <div className="Services_content-box-descriprion">
                  <h1>{article.articleTitle}</h1>
                  <p>{article.miniDescri}</p>
                  <NavLink
                    className="ControllerLink-service"
                    to={`/article/${article._id}`}
                  >
                    Saiba mais.....
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Services_content-InfoProficional">
          <div className="Services_content-InfoProficional-box">
            <div className="Services_content-InfoProficional-box1">
              <div className="Services_content-InfoProficional-box1-content">
                <h1>Some words about us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Saepe voluptate adipisci nesciunt deserunt sed quasi ab
                  repudiandae, voluptatem inventore, non cupiditate, illum
                  obcaecati vel maiores maxime. Nisi blanditiis nihil
                  doloremque!
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita harum iusto officia repellat similique dolorem
                  corporis quidem repellendus, doloremque quod enim
                </p>
              </div>
            </div>

            <div className="Services_content-InfoProficional-box2">
              <div className="Services_content-InfoProficional-box2-content">
                <h1>Mission</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum adipisci recusandae animi necessitatibus nisi, aut iusto
                  temporibus laboriosam. Id reprehenderit maxime voluptas
                  incidunt ipsum magnam repudiandae, voluptate earum a
                  aspernatur.
                </p>
                <ul>
                  <li>Cum doctus civibus efficiantur in</li>
                  <li>Quot persecuti mel</li>
                  <li>Vix id dicam putent</li>
                </ul>
              </div>
            </div>

            <div className="Services_content-InfoProficional-box3">
              <div className="Services_content-InfoProficional-box3-content">
                <h1>10 Years of experience</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  enim deleniti, dolor similique repellendus labore quae quam
                  iure officia quisquam ullam corporis saepe veniam, id
                  reprehenderit, cum veritatis autem soluta.
                </p>
                <ul>
                  <li>cum doctus civibus efficiantur in</li>
                  <li>Quot persecuti mel</li>
                  <li>Vix id dicam putent mel</li>
                  <li>Vix id dicam putent mel</li>
                  <li>Quot persecuti mel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
