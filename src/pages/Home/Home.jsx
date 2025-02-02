//CSS
import "./Home.css";
//components
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import BoxService from "../../components/BoxService/BoxService";
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
        <Services />
      </section>
    </div>
  );
};

export default Home;
