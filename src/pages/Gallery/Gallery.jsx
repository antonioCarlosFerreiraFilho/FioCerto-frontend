//css
import "./Gallery.css";
//components
import GalleryBanner from "../../components/GalleryBanner/GalleryBanner";
import GalleryCards from "../../components/GalleryCards/GalleryCards";
import SidePackage from "../../components/SidePackage/SidePackage";
import BrokenBox from "../../components/BrokenBox/BrokenBox";

const Gallery = () => {
  return (
    <div className="Gallery">
      <section>
        <GalleryBanner />
      </section>

      <section className="Gallery_GelleryCards-SidePackage">
        <div className="Gallery_GelleryCards-SidePackage-container">
          <div className="Gallery_GelleryCards">
            <GalleryCards />
          </div>
          <div className="Gallery_SidePackage">
            <SidePackage />
            <BrokenBox />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
