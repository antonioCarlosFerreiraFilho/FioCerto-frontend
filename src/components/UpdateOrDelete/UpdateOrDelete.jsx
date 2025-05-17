//CSS
import "./UpdateOrDelete.css";
//react icons
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { LuOctagonAlert } from "react-icons/lu";
//react
import { useParams } from "react-router-dom";

const UpdateOrDelete = () => {
  //react
  const { id } = useParams();

  function EventDeleteArticle() {
    alert(id);
  }

  return (
    <div className="UpdateOrDelete">
      <div className="UpdateOrDelete_container">
        <div className="UpdateOrDelete_content">
          <div className="UpdateOrDelete_box-updateORdelete">
            <div className="UpdateOrDelete_content-Event">
              <CiEdit className="UpdateOrDelete_content-Event-icon UpdateOrDelete-iconUpdate" />
            </div>
            <div className="UpdateOrDelete_content-Event">
              <LuOctagonAlert className="UpdateOrDelete_content-Event-icon alertUP-DEl" />
            </div>
            <div className="UpdateOrDelete_content-Event">
              <CiTrash
                className="UpdateOrDelete_content-Event-icon UpdateOrDelete-iconDelete"
                onClick={EventDeleteArticle}
              />
            </div>
          </div>
          <div className="UpdateOrDelete_box-UpdateView">
            <form action="">
              <label htmlFor="">
                <span>1º Descrição</span>
                <textarea
                  name=""
                  id=""
                  placeholder="Primeira Descrição."
                ></textarea>
              </label>
              <label htmlFor="">
                <span>2º Descrição</span>
                <textarea
                  name=""
                  id=""
                  placeholder="Segunda Descrição."
                ></textarea>
              </label>
              <label htmlFor="">
                <span>3º Descrição</span>
                <textarea
                  name=""
                  id=""
                  placeholder="Terceira Descrição."
                ></textarea>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrDelete;
