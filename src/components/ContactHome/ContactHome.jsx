import "./ContactHome.css";

const ContactHome = () => {
  return (
    <div className="ContactHome">
      <div className="ContactHome_container">
        <div className="ContactHome_content">

          <div className="ContactHome_content-title">
            <div className="ContactHome_content-title-box">
              <h1>Fill the form below for Aquotation</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                porro ducimus similique repellendus delectus voluptas quasi,
                labore expedita maiores laudantium quae? Mollitia possimus
                quisquam excepturi dolores quaerat nam ab rerum.
              </p>
            </div>
          </div>

          <div className="ContactHome_content-form">
            <div className="ContactHome_content-form-box">
              <form action="" className="ContactHome_content-form-content">
                {/* First Name Last Name */}
                <div className="ContactHome_content-form-boxes">
                  <label htmlFor="">
                    <span>Primeiro Nome</span>
                    <input type="text" />
                  </label>
                  <label htmlFor="">
                    <span>Ultimo Nome</span>
                    <input type="text" />
                  </label>
                </div>
                {/* Email Phone */}
                <div className="ContactHome_content-form-boxes">
                  <label htmlFor="">
                    <span>Email</span>
                    <input type="text" />
                  </label>
                  <label htmlFor="">
                    <span>Numero</span>
                    <input type="text" />
                  </label>
                </div>
                {/* Description */}
                <div className="ContactHome_content-form-boxes-description">
                  <label htmlFor="">
                    <span>Descreva o trabalho a ser Resolvido.</span>
                    <textarea name="" id=""></textarea>
                  </label>
                </div>
                {/* Submit */}
                <div className="ContactHome_content-form-boxes-submit">
                  <div className="ContactHome_content-form-boxes-submit-box">
                    <input type="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactHome;
