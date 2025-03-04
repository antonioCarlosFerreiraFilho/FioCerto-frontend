//css
import "./SidePackage.css";
//react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidePackage = () => {
  //initial States
  const [Query, setQuery] = useState("");

  //react router dom
  const navigate = useNavigate();

  //Search
  const HandleSearch = (e) => {
    e.preventDefault();

    if (Query) {
      return navigate(`/search?q=${Query}`);
    }
  };

  return (
    <div className="SidePackage">
      <div className="SidePackage_container">
        <div className="SidePackage_content">
          <form className="SidePackage_boxSearch" onSubmit={HandleSearch}>
            <input
              type="text"
              maxLength={25}
              placeholder="Procurar...."
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SidePackage;
