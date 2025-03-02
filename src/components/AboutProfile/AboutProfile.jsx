import "./AboutProfile.css";

const AboutProfile = () => {
  return (
    <div className="AboutProfile">
      <div className="AboutProfile_container">
        <div className="AboutProfile_content">
          <div className="AboutProfile_box-description">
            <div className="AboutProfile_box-description-title">
              <h1>What Clients Say</h1>
              <p>
                Id tale utinam ius, an mei omnium recusabo iracundia omnium
                recusabo
              </p>
            </div>
            <div className="AboutProfile_box-description-profile">
              <div className="AboutProfile_box-description-profile-image">
                <div className="AboutProfile_box-description-profile-image-background"></div>
                <div className="AboutProfile_box-description-profile-nameProfissional">
                  <h1>Carlos Ferreira</h1>
                  <p>Eletricista Certificado</p>
                </div>
              </div>

              <div className="AboutProfile_box-description-profile-InfoBio">
                <div className="AboutProfile_box-description-profile-InfoBio-TXT">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore similique maiores alias voluptatibus voluptates quo
                    aut ipsum consectetur voluptas ipsam necessitatibus esse
                    delectus explicabo, hic officia id expedita quibusdam quas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
