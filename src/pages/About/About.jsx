//css
import "./About.css";
//components
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import AboutProfessional from "../../components/AboutProfessional/AboutProfessional";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import AboutProfile from "../../components/AboutProfile/AboutProfile";

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
      <section>
        <AboutProfile />
      </section>
    </div>
  );
};

export default About;
