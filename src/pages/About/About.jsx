//css
import "./About.css";
//components
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import AboutProfessional from "../../components/AboutProfessional/AboutProfessional";
import AboutInfo from "../../components/AboutInfo/AboutInfo";

const About = () => {
  return (
    <div>
      <section>
        <AboutBanner />
      </section>
      <section>
        <AboutProfessional />
      </section>
      <section>
        <AboutInfo />
      </section>
    </div>
  );
};

export default About;
