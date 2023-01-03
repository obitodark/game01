import styled, { keyframes, css } from "styled-components";

import "./stylesElement.css";

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
const Element = ({
  bandera,
  image,
  color,
  colorShadow,
  value,
  setIndex,
  setBandera,
}) => {
  const handleSelect = (e) => {
    if (!bandera) setIndex(value);

    setBandera(true);
    return console.log("code ", value);
  };

  const mover = keyframes`
  0%{
    box-shadow: inset 0 7px 0 0 #babfd3, 0 0 0 20px ${color},
    0 12px 0 18px ${colorShadow}}

  
25% 
{   box-shadow: inset 0 7px 0 0 #babfd3, 0 0 0 20px ${color},
  0 12px 0 18px ${colorShadow}}

  50% 
  {   box-shadow: inset 0 7px 0 0 #babfd3, 0 0 0 20px ${color},
    0 12px 0 18px ${colorShadow},0 0 0 50px #283150;}

75%
{  box-shadow: inset 0 7px 0 0 #babfd3, 0 0 0 20px ${color},
  0 12px 0 18px ${colorShadow},0 0 0 50px #283150,0 0 0 80px #212A48;}

100%
{
  box-shadow: inset 0 7px 0 0 #babfd3, 0 0 0 20px ${color},
  0 12px 0 18px ${colorShadow},0 0 0 50px #283150,0 0 0 80px #212A48,0 0 0 110px #1D2647 ;
}

`;

  const Elements = styled.div`
    background: white;
    margin: 30px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    cursor: pointer;

    align-items: center;
    box-shadow: inset 0 7px 0 0 #babfd3, 0 0 0 20px ${({ color }) => color},
      0 12px 0 18px ${({ colorShadow }) => colorShadow};
    ${mobile(css`
      width: 100px;
      height: 100px;

      box-shadow: inset 0 7px 0 0 #babfd3, 0 0 0 15px ${({ color }) => color},
        0 12px 0 13px ${({ colorShadow }) => colorShadow};
    `)};

    // animation: ${mover} 1s ease-in infinite alternate;
  `;

  return (
    <Elements onClick={handleSelect} color={color} colorShadow={colorShadow}>
      <img src={image} alt="" />
    </Elements>
  );
};
export default Element;
