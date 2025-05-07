//css
import "./ProfileUserADM.css";
//react icons
import { FaEdit } from "react-icons/fa";
//react
import { useEffect, useState } from "react";
//componets
import PanelADM from "../PanelADM/PanelADM";
import PopUpMessage from "../PopUpMessage/PopUpMessage";
import LoadingUsers from "../LoadingUsers/LoadingUsers";
//Hooks
import { useAuth } from "../../hooks/useAuth";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { profile, updateUser, reset } from "../../slices/userSlice";

const ProfileUserADM = () => {
  // Auth
  const { auth, loading } = useAuth();
  //Redux
  const dispatch = useDispatch();
  const {
    user,
    loading: loadingUser,
    errors,
    message,
  } = useSelector((state) => state.user);

  // First data User
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");
  const [idUser, setIdUser] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errorImageFormat, setErrorImageFormat] = useState("");
  // ADM
  const [ADM, setADM] = useState(false);

  //UPDATE User DATA
  const handleUpdate = async (e) => {
    e.preventDefault();

    //objeto indefinido
    let userData = {
      firstName,
      lastName,
    };

    if (password) {
      userData.password = password;
    }

    if (phone) {
      userData.phone = phone;
    }

    if (profileImage) {
      userData.file = file;
    }

    //upload image e data
    const userFormData = Object.keys(userData).reduce((formData, key) => {
      formData.append(key, userData[key]);
      return formData;
    }, new FormData());

    dispatch(updateUser(userFormData));

    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  };

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  function reloadUser() {
    setTimeout(() => {
      dispatch(profile());
    }, 3000);
  }

  //Rederizando
  function AdmInfo() {
    const AdmPermissions = import.meta.env.VITE_API_ADM_PERMISSIONS;
    const AdmPhone = import.meta.env.VITE_API_ADM_PHONE;
    const AdmEmail = import.meta.env.VITE_API_ADM_EMAIL;
    const AdmPass = import.meta.env.VITE_API_ADM_PASS;
    const AdmId = import.meta.env.VITE_API_ADM_ID;

    if (
      permissions == AdmPermissions &&
      phone == AdmPhone &&
      email == AdmEmail &&
      idUser == AdmId
    ) {
      setADM(true);
    }
  }

  //SET USER
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setPassword(user.password);
      setPermissions(user.permissions);
      setIdUser(user._id);
    }
  }, [user]);

  useEffect(() => {
    const Time = setTimeout(() => {
      AdmInfo();
    }, 2000);

    return () => clearTimeout(Time);
  }, [user]);

  return (
    <div className="ProfileUserADM">
      <div className="ProfileUserADM-container">
        <div className="ProfileUserADM-content">
          <h1>Configurações de Usuario</h1>
          {loadingUser ? (
            <LoadingUsers />
          ) : (
            <div className="ProfileUserADM-boxesProfile">
              <form
                className="ProfileUserADM-boxesProfile-container"
                onSubmit={handleUpdate}
              >
                <div className="ProfileUserADM-box FirstInfos">
                  <label htmlFor="">
                    <span>Primeiro Nome</span>
                    <input
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName || ""}
                    />
                  </label>
                  <label htmlFor="">
                    <span>Ultimo Nome</span>
                    <input
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName || ""}
                    />
                  </label>

                  <input
                    type="submit"
                    className="ProfileUserADM-submitForm ControllerButton"
                    value="Atualizar"
                  />
                </div>

                <div className="ProfileUserADM-box FirstInfos">
                  <label htmlFor="">
                    <span>Numero</span>
                    <input
                      type="text"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone || ""}
                      placeholder="Insira Seu contacto."
                    />
                  </label>
                  <label htmlFor="">
                    <span>Senha</span>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={"**********"}
                      maxLength={10}
                    />
                  </label>
                  <input
                    type="submit"
                    className="ProfileUserADM-submitForm ControllerButton"
                    value="Atualizar"
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      {ADM && (
        <div className="ProfileUserADM-ADMPermissions">
          <PanelADM ADM={ADM} />
        </div>
      )}
      {errors && (
        <div className="ProfileUserADM-MessageError">
          <PopUpMessage errors={errors} type="error" />
        </div>
      )}
      {errors && reloadUser()}
      {message && (
        <div className="ProfileUserADM-MessageError">
          <PopUpMessage errors={message} type="sucess" />
        </div>
      )}
      {message && reloadUser()}
    </div>
  );
};

export default ProfileUserADM;
