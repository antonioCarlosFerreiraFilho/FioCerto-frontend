//CSS
import "./Profile.css";
//Components
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import ProfileUserADM from "../../components/ProfileUserADM/ProfileUserADM";
import AboutProfile from "../../components/AboutProfile/AboutProfile";

const Profile = () => {
  return (
    <div>
      <section>
        <ProfileBanner />
      </section>
      <section>
        <ProfileUserADM />
      </section>
     
      <section>
        <AboutProfile />
      </section>
    </div>
  );
};

export default Profile;
