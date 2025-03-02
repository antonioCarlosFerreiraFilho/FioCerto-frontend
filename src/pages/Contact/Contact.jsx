//css
import "./Contact.css";
//Components
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactSidePackage from "../../components/ContactSidePackage/ContactSidePackage";
import AboutProfile from "../../components/AboutProfile/AboutProfile";

const Contact = () => {
  return (
    <div>
      <section>
        <ContactBanner />
      </section>
      <section className="Contact_ContactForm-ContactSidePackage">
        <div className="Contact_ContactForm-ContactSidePackage-content">
          <div className="Contact_ContactForm">
            <ContactForm />
          </div>
          <div className="Contact_ContactSidePackage">
            <ContactSidePackage />
          </div>
        </div>
      </section>
      <section>
        <AboutProfile />
      </section>
    </div>
  );
};

export default Contact;
