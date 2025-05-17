//css
import "./PanelADM.css";
//react icons
import { FaTrashAlt } from "react-icons/fa";
//react icons
import { FaEdit } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
//Hooks
import { useAuth } from "../../hooks/useAuth";
//react
import { useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import {
  profile,
  deleteUser,
  updateUser,
  showUser,
  searchUser,
  reset,
} from "../../slices/userSlice";
//components
import LoadingUsersRead from "../LoadingUsersRead/LoadingUsersRead";

const PanelADM = ({ ADM }) => {
  // Auth
  const { auth, loading } = useAuth();
  //Redux
  const dispatch = useDispatch();
  const {
    user,
    users,
    loading: loadingUser,
    errors,
    message,
  } = useSelector((state) => state.user);

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  };

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

  //DELETE
  function EventDlete(id) {
    dispatch(deleteUser(id));

    resetComponentMessage();
  }

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  useEffect(() => {
    const Time = setTimeout(() => {
      dispatch(showUser());
    }, 1000);

    return () => clearTimeout(Time);
  }, [dispatch]);

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
                        {loadingUser ? (
                          <LoadingUsersRead />
                        ) : (
                          <>
                            {users.map((user) => (
                              <div
                                className="PanelADM_box-Show-User"
                                key={user._id}
                              >
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
                                      <h1>{user.firstName}</h1>
                                      <p>{user.email}</p>
                                      <p>
                                        Permisão:{" "}
                                        <strong>{user.permissions}</strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="PanelADM_box-Show-User-ContentEvents">
                                  {user.permissions === "ADM" ? (
                                    <BsFillShieldLockFill className="PanelADM_box-Show-User-icon-ADM" />
                                  ) : (
                                    <FaTrashAlt
                                      className="PanelADM_box-Show-User-icon-delete"
                                      onClick={() => EventDlete(user._id)}
                                    />
                                  )}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
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
