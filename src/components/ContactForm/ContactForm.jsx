import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <div className="ContactForm_container">
        <div className="ContactForm_content">
          <div className="ContactForm_boxForm">
            <form className="ContactForm_Form">
              {/* Description */}
              <div className="ContactForm_Form-Description">
                <label htmlFor="">
                  <span>Trabalho a ser Resolvido</span>
                  <textarea
                    name=""
                    id=""
                    placeholder="Descreva o Trabalho a ser resolvido."
                    maxLength={200}
                  ></textarea>
                </label>
              </div>
              {/* First Name / Last Name  */}
              <div className="ContactForm_Form-FirstLastName">
                <label
                  htmlFor=""
                  className="ContactForm_Form-FirstLastName-Label"
                >
                  <span>Primeiro Nome</span>
                  <input
                    type="text"
                    placeholder="Seu primeiro nome"
                    maxLength={15}
                  />
                </label>

                <label
                  htmlFor=""
                  className="ContactForm_Form-FirstLastName-Label"
                >
                  <span>Ultimo Nome</span>
                  <input
                    type="text"
                    placeholder="Seu ultimo nome"
                    maxLength={15}
                  />
                </label>
              </div>
              {/* Email / Phone */}
              <div className="ContactForm_Form-EmailPhone">
                <label htmlFor="" className="ContactForm_Form-EmailPhone-label">
                  <span>E-mail / Gmail</span>
                  <input
                    type="text"
                    placeholder="seuGmail@gmail.com"
                    maxLength={40}
                  />
                </label>

                <label htmlFor="" className="ContactForm_Form-EmailPhone-label">
                  <span>Numero de Contato</span>
                  <input type="tel" placeholder="xxx xxx xxx" maxLength={12} />
                </label>
              </div>
              {/* CAPTCHA */}
              <div className="ContactForm_Form-Captha">
                <label htmlFor="" className="ContactForm_Form-Captha-label">
                  <span>Vocé e Humano ?</span>
                  <input type="text" placeholder="7 + 2 =" maxLength={5} />
                </label>
              </div>
              {/* SUBMIT */}
              <div className="ContactForm_Form-Submit">
                <label htmlFor="" className="ContactForm_Form-Submit-label">
                  <input type="submit" value="Pedir Orçamento." />
                </label>
              </div>
              {/* Message Error */}
              <div className="ContactForm_Form-MessageError">

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
