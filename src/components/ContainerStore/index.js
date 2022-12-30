import logo from "../../images/logo.svg";
import Score from "../Score";

export const styles = {
  background: "transparent",
  borderRadius: "20px",
  border: "3px solid #5C6E85",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80vw",
  marginTop: "50px",
};

const ContainerStore = () => {
  return (
    <div style={styles}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Score />
      </div>
    </div>
  );
};
export default ContainerStore;
