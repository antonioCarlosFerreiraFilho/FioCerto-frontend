//Css
import "./Search.css";
//Components
import SearchView from "../../components/SearchView/SearchView";
import BannerSearch from "../../components/BannerSearch/BannerSearch";
import ContactSidePackage from "../../components/ContactSidePackage/ContactSidePackage";
import SidePackage from "../../components/SidePackage/SidePackage";
import BrokenBox from "../../components/BrokenBox/BrokenBox";
import AboutInfo from "../../components/AboutInfo/AboutInfo";

const Search = () => {
  return (
    <div className="Search">
      <section>
        <BannerSearch />
      </section>

      <section className="Search_SearchView-SidePackage-BrokenBox">
        <div className="Search_SearchView-SidePackage-BrokenBox-container">
          <div className="Search_ContactSidePackage">
            <ContactSidePackage />
          </div>

          <div className="Search_SearchView">
            <SearchView />
          </div>

          <div className="Search_SidePackage-BrokenBox">
            <SidePackage />
            <BrokenBox />
          </div>
        </div>
      </section>

      <section>
        <AboutInfo />
      </section>
    </div>
  );
};

export default Search;
