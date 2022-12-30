import { useState } from "react";
import {
  ViewModal,
  ViewElement,
  ViewContainerStore,
  ViewResult,
} from "../../components";
import "./css.css";
import stone from "../../images/icon-rock.svg";
import hand from "../../images/icon-paper.svg";

import scissors from "../../images/icon-scissors.svg";

export const stylesRules = {
  background: "transparent",
  border: "1px solid white",
  padding: "10px 30px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
  margin: "0 50px",
};

const Home = () => {
  const [index, setIndex] = useState(null);
  const [bandera, setBandera] = useState(false);

  const elements = [
    <ViewElement
      image={hand}
      color={"#4562F2"}
      colorShadow={"#2A46BE"}
      value={0}
      setIndex={setIndex}
      setBandera={setBandera}
      bandera={bandera}
    />,
    <ViewElement
      image={scissors}
      color={"#EBA010"}
      colorShadow={"#C66C1D"}
      value={1}
      setIndex={setIndex}
      setBandera={setBandera}
      bandera={bandera}
    />,
    <ViewElement
      value={2}
      image={stone}
      color={"#D02F4A"}
      colorShadow={"#9C1531"}
      setIndex={setIndex}
      setBandera={setBandera}
      bandera={bandera}
    />,
  ];
  const [status, setStatus] = useState(false);

  return (
    <div>
      {" "}
      <div className="container">
        <ViewModal status={status} setStatus={setStatus} />

        <ViewContainerStore />
        {bandera ? (
          <ViewResult
            index={index}
            elements={elements}
            setBandera={setBandera}
          />
        ) : (
          <div className="container-element">
            <div>
              <div>{elements[0]}</div>
              <div>{elements[1]}</div>
            </div>
            <div>{elements[2]}</div>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "50px",
        }}
      >
        <button style={stylesRules} onClick={() => setStatus(true)}>
          RULES
        </button>
      </div>
    </div>
  );
};

export default Home;
