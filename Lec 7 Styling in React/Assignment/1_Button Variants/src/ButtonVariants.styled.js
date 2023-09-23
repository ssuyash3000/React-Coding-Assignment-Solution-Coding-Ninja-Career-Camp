import styled, { css } from "styled-components";

export const ButtonView = styled.button`
  outline: none;

  height: 50px;

  width: 250px;

  font-size: 1.5rem;

  font-weight: bold;

  text-transform: uppercase;

  cursor: pointer;

  background-color: ${(props) => (props.filled ? props.bg || "#000" : "#fff")};
  color: ${(props) => (props.filled ? props.color || "#fff" : "#000")};
  border: ${(props) => (props.filled ? "none" : "3px solid #000")};
`;
// color: ${(props) => (props.color === undefined ? "black" : props.color)};

// background-color: ${(props) => (props.bg === undefined ? "white" : props.bg)};

// export default function ButtonVariants(props) {
//   const { filled, bg, colour } = props;
//   return (
//     <StyledButton filled={filled} bg={bg} color={colour}>
//       {filled}
//     </StyledButton>
//   );
// }
