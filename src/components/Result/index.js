import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import "./stylesResult.css";
const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};
export const mobile = (inner) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;
export const Btn = styled.button`
  padding: 10px;
  background: white;
  border-radius: 10px;
  width: 200px;
  text-transform: uppercase;
  color: #b94058;
  font-weight: bold;
  height: 50px;
  z-index: 2;
`;
export const Text = styled.h4`
  color: white;
  font-size: 22px;
  font-weight: 500;
  text-shadow: 2px 2px 5px black;
  text-transform: uppercase;
  z-index: 2;
`;
export const TextTitle = styled(Text)`
  font-size: 50px;
  font-weight: 900;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Result = ({ elements, index, setBandera, setStore }) => {
  const [textStatus, setTextStatus] = useState("");
  const [houseValue, setHouseValue] = useState(null);

  const getRandom = (max) => {
    const value = Math.floor(Math.random() * max);

    setHouseValue(value);
    gameLogic(index, value);
    if (textStatus === "you win") {
      console.log("you win");
    }
    return value;
  };
  const handleBack = () => {
    setBandera(false);
  };

  const addStore = async () => {
    const store = 1 + Number(localStorage.getItem("store"));
    await localStorage.setItem("store", store);

    const value = Number(localStorage.getItem("store"));
    await setStore(value);
  };
  const gameLogic = async (user, house) => {
    const value = user + house;
    if (user === house) {
      return setTextStatus("it is tie");
    }

    if (user > house) {
      if (value === 2) {
        return setTextStatus("you lose");
      }
      await addStore();
      return setTextStatus("you win");
    } else {
      if (value === 2) {
        await addStore();
        return setTextStatus("you win");
      }
      return setTextStatus("you lose");
    }
  };

  useEffect(() => {
    getRandom(3);
  }, []);
  return (
    <div className="container-result">
      <Container>
        <div>
          <Text>You Picked</Text>
        </div>
        {elements[index]}
      </Container>
      <div className="container-btn">
        <div>
          <TextTitle style={{ margin: 0, padding: 0 }}>{textStatus}</TextTitle>
        </div>
        <Btn onClick={handleBack}>Play Again</Btn>
      </div>

      <Container>
        <div>
          <Text>THE HOUSE PICKED</Text>
        </div>
        {elements[houseValue]}
      </Container>
    </div>
  );
};

export default Result;
