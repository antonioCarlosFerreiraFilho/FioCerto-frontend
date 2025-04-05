//css
import "./PanelADM.css";
//react icons
import { FaTrashAlt } from "react-icons/fa";
//react icons
import { FaEdit } from "react-icons/fa";
//react
import { useEffect, useState } from "react";

const PanelADM = () => {
  // Stage Profile Image
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errorImageFormat, setErrorImageFormat] = useState("");

  //imagem user Escolhida
  const HandleFile = (e) => {
    let ButtonSubmit = document.querySelector(".InputPostPhotos");
    const image = e.target.files[0];

    setPreviewImage(image);

    if (image.type == "image/png") {
      setProfileImage(image);
    } else {
      ButtonSubmit.disabled = true;

      setErrorImageFormat("So aceitamos imagems no formato: (.png)");
      setTimeout(() => {
        setPreviewImage("");
        setErrorImageFormat("");

        ButtonSubmit.disabled = false;
      }, 3000);
    }
  };

  return (
    <div className="PanelADM">
      <div className="PanelADM_container">
        <div className="PanelADM_content">
          <div className="PanelADM_box-title">
            <div className="PanelADM_box-title-container">
              <h1>Permições de ADM</h1>
            </div>
          </div>
          <div className="PanelADM_box-containerProfileADM">

            <div className="PanelADM_box-events">
              <div className="PanelADM_box-events-container">
                <div className="PanelADM_box-events-content">
                  <div className="PanelADM_box-Show">
                    <div className="PanelADM_box-Show-SearchBox">
                      <form className="PanelADM_box-Show-SearchBox-content">
                        <input
                          type="text"
                          placeholder="Procurar por Usuarios...."
                        />
                      </form>
                    </div>
                    <div className="PanelADM_box-Show-allUsers">
                      <div className="PanelADM_box-Show-Users">
                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>

                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>

                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>

                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>

                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>

                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>

                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>

                        <div className="PanelADM_box-Show-User">
                          <div className="PanelADM_box-Show-User-ContentImage-ContentInfo">
                            <div className="PanelADM_box-Show-User-ContentImage-ContenImage">
                              <div className="PanelADM_box-Show-User-ContentImage-box">
                                <img
                                  src="./ImageUserDefault/User02.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="PanelADM_box-Show-User-ContentImage-ContenInfos">
                              <div className="PanelADM_box-Show-User-ContentImage-ContenInfos-Description">
                                <h1>Antonio Carlos</h1>
                                <p>25/04/2025</p>
                                <p>
                                  Permisão: <strong>User</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="PanelADM_box-Show-User-ContentEvents">
                            <FaTrashAlt className="PanelADM_box-Show-User-icon-delete" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="PanelADM_box-ADMIMAGE">
              <div className="ADMProfile">
                <div className="Profile_content">
                  <div className="Profile_ImageUser">
                    <img
                      src={
                        previewImage
                          ? URL.createObjectURL(previewImage)
                          : `./ImageUserDefault/User02.png`
                      }
                      alt=""
                    />
                  </div>

                  <div className="Profile-box-upload-image">
                    <div className="Profile-boxInputFile">
                      <label htmlFor="inFile">
                        <FaEdit className="Profile-boxInputFile-icon-update" />
                      </label>
                      <input
                        type="file"
                        id="inFile"
                        onChange={HandleFile}
                        className="Profile-InputFile"
                      />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Atualizar" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelADM;
