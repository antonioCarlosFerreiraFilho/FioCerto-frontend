//CSS
import "./Home.css";
//components
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import BoxService from "../../components/BoxService/BoxService";
import ContactHome from "../../components/ContactHome/ContactHome";
import Services from "../../components/Services/Services";
const Home = () => {
  return (
    <div>
      <section>
        <BannerSlider />
      </section>

      <section>
        <BoxService />
      </section>

      <section>
        <ContactHome />
      </section>

      <section>
        <Services />
      </section>
    </div>
  );
};

export default Home;
