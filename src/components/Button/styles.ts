import styled from "styled-components";

export const Container = styled.button`
  background-color: #1e192c;
  width: 100%;
  height: auto;
  color: #ffffff;
  border-radius: 15px;
  font-size: 18px;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:not(:disabled):hover {
    opacity: 0.8;
    transition: 0.5s;
  }
`;
