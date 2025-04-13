//css
import "./MessageError.css";

const MessageError = ({ errors, type }) => {
  return (
    <div className={`Message_content ${type}`}>
      <div className="Message-conteiner">
        <p>{errors}</p>
      </div>
    </div>
  );
};

export default MessageError;
