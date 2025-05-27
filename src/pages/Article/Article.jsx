//Css
import "./Article.css";
//Components
import BannerArticle from "../../components/BannerArticle/BannerArticle";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import UpdateOrDelete from "../../components/UpdateOrDelete/UpdateOrDelete";
import ArticleService from "../../components/ArticleService/ArticleService";
import CommentsContent from "../../components/CommentsContent/CommentsContent";
import BrokenBox from "../../components/BrokenBox/BrokenBox";
//react
import { useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slices
import { profile } from "../../slices/userSlice";

const Article = () => {
  //redux
  const dispatch = useDispatch();
  //Slices
  const { user } = useSelector((state) => state.user);

  // States User OR Adm
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");
  const [idUser, setIdUser] = useState("");
  // ADM
  const [ADM, setADM] = useState(false);

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // Verify User OR ADM
  function AdmInfo() {
    const AdmPermissions = import.meta.env.VITE_API_ADM_PERMISSIONS;
    const AdmPhone = import.meta.env.VITE_API_ADM_PHONE;
    const AdmEmail = import.meta.env.VITE_API_ADM_EMAIL;
    const AdmId = import.meta.env.VITE_API_ADM_ID;

    setTimeout(() => {
      if (
        permissions == AdmPermissions &&
        phone == AdmPhone &&
        email == AdmEmail &&
        idUser == AdmId
      ) {
        setADM(true);
      }
    }, 1000);
  }

  //SET USER
  useEffect(() => {
    if (user) {
      setPhone(user.phone);
      setEmail(user.email);
      setPermissions(user.permissions);
      setIdUser(user._id);
    }
  }, [user]);

  // Start Verify
  useEffect(() => {
    const Time = setTimeout(() => {
      AdmInfo();
    }, 1000);

    return () => clearTimeout(Time);
  }, [user, dispatch]);

  return (
    <div>
      <section className="Article_content">
        <section>
          <BannerArticle />
        </section>
        <div className="Article_content-container">
          <div className="Article_content-Description">
            <div className="Article_content-BrokenBox-boxes">
              <section>
                <ArticleDescription />
              </section>

              {ADM && (
                <section>
                  <UpdateOrDelete />
                </section>
              )}

              <section>
                <ArticleService />
              </section>

              <section>
                <CommentsContent />
              </section>
            </div>
            <div className="Article_content-BrokenBox">
              <BrokenBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
