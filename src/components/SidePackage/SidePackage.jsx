import "./SidePackage.css";

const SidePackage = () => {
  return (
    <div className="SidePackage">
      <div className="SidePackage_container">
        <div className="SidePackage_content">
          <div className="SidePackage_boxSearch">
            <input type="text" maxLength={25} placeholder="Procurar...." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePackage;
