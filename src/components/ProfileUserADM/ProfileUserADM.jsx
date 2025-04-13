//css
import "./ProfileUserADM.css";
//react icons
import { FaEdit } from "react-icons/fa";
//react
import { useEffect, useState } from "react";
//componets
import PanelADM from "../PanelADM/PanelADM";
import PopUpMessage from "../PopUpMessage/PopUpMessage";
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
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errorImageFormat, setErrorImageFormat] = useState("");

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
  }

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  function reloadUser() {

    setTimeout(() => {
      dispatch(profile());
    }, 3000);
  }

  //SET USER
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <div className="ProfileUserADM">
      <div className="ProfileUserADM-container">
        <div className="ProfileUserADM-content">
          <h1>Configurações de Usuario</h1>
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
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password || ""}
                    placeholder="******"
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
        </div>
      </div>
      {auth && (
        <div className="ProfileUserADM-ADMPermissions">
          <PanelADM />
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
