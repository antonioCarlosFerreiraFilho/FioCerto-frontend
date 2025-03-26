//Css
import "./ContainerAuth.css";
//react Icons
import { SiThunderstore } from "react-icons/si";
import { IoClose } from "react-icons/io5";
//react
import { useEffect, useState } from "react";

const ContainerAuth = () => {
  function ScrollAuth() {
    const registerOrLogin = document.getElementById("ControllerAuth");
    const register = document.querySelector(".ContainerAuth_box-Register");
    const login = document.querySelector(".ContainerAuth_box-Login");
    const contentButton = document.getElementById("ControllerContent");
    
    registerOrLogin.addEventListener("click", ()=> {

      register.classList.toggle("ContainerAuth_box-RegisterJS");
      login.classList.toggle("ContainerAuth_box-LoginJS");

      if(login.classList.contains("ContainerAuth_box-LoginJS")) {

        contentButton.innerHTML = "Cadastrar";
      }else {

        contentButton.innerHTML = "logar";
      }

    });
  }

  function CloseAuth() {
    const iconClose = document.getElementById("ControllerClose");
    const boxAuth = document.querySelector(".ContainerAuth");

    iconClose.addEventListener("click", () => {
      if (boxAuth.classList.contains("visible")) {
        boxAuth.classList.remove("visible");
        boxAuth.classList.add("hidden"); 
      }
    });
  }

  //start
  useEffect(() => {
    const Time = setTimeout(() => {
      CloseAuth();
      ScrollAuth();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <div className="ContainerAuth">
      <div className="ContainerAuth_container">
        <div className="ContainerAuth_content">
          <div className="ContainerAuth_Container">
            <div className="ContainerAuth_box-Logo-Close">
              <div className="ContainerAuth_box-Logo-Close-content">
                <SiThunderstore className="Close-content-logo-icon" />
                <p>fiocerto</p>
              </div>

              <div className="ContainerAuth_box-Logo-Close-content-close">
                <IoClose id="ControllerClose" />
              </div>
            </div>
            <div className="ContainerAuth_box-Register-Login">
              <div className="ContainerAuth_box-Register">
                <form className="ContainerAuth_box-Register-form">
                  {/* Frist Name / Last Name */}
                  <div className="ContainerAuth_box-Register-form-boxName">
                    <label htmlFor="">
                      <span>Primeiro Nome</span>
                      <input type="text" />
                    </label>
                    <label htmlFor="">
                      <span>Ultimo Nome</span>
                      <input type="text" />
                    </label>
                  </div>
                  {/* Pass / Confirm Pass */}
                  <div className="ContainerAuth_box-Register-form-boxPass">
                    <label htmlFor="">
                      <span>Email / Gmail</span>
                      <input type="text" />
                    </label>
                    <label htmlFor="">
                      <span>Senha</span>
                      <input type="text" />
                    </label>
                    <label htmlFor="">
                      <span>Confirme Sua Senha</span>
                      <input type="text" />
                    </label>
                  </div>
                  {/* Submit */}
                  <div className="ContainerAuth_box-Register-form-boxSubmit">
                    <div className="ContainerAuth_box-Register-form-boxSubmit-content">
                      <input type="submit" value="Cadastrar" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="ContainerAuth_box-Login">
                <form className="ContainerAuth_box-Register-form">
                  {/* Frist Name / Last Name */}
                  <div className="ContainerAuth_box-Register-form-boxName">
                    <label htmlFor="">
                      <span>Primeiro Nome</span>
                      <input type="text" />
                    </label>
                    <label htmlFor="">
                      <span>Ultimo Nome</span>
                      <input type="text" />
                    </label>
                  </div>
                  {/* Pass / Confirm Pass */}
                  <div className="ContainerAuth_box-Register-form-boxPass">
                    <label htmlFor="">
                      <span>Email / Gmail</span>
                      <input type="text" />
                    </label>
                    <label htmlFor="">
                      <span>Senha</span>
                      <input type="text" />
                    </label>
                  </div>
                  {/* Submit */}
                  <div className="ContainerAuth_box-Register-form-boxSubmit">
                    <div className="ContainerAuth_box-Register-form-boxSubmit-content">
                      <input type="submit" value="Logar" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="ContainerAuth_box-registerORlogin">
              <div className="ContainerAuth_box-registerORlogin-content">
                <p id="ControllerAuth">
                  {" "}
                  já tem uma conta ? <strong id="ControllerContent">Logar</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerAuth;
