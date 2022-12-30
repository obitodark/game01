import close from "../../images/icon-close.svg";
import "./stylesModal.css";
import rules from "../../images/image-rules.svg";
const Modal = ({ status, setStatus }) => {
  return (
    <div>
      {status && (
        <div className="container-modal">
          <div>
            <div className="header-modal">
              <div>
                <h1>RULES</h1>
              </div>
              <div>
                <img
                  src={close}
                  style={{ cursor: "pointer" }}
                  onClick={() => setStatus(false)}
                  alt=""
                />
              </div>
            </div>
            <img src={rules} alt="image_rules" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
