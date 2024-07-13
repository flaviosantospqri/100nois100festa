import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  height: 45px;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  font-style: normal;
  background-color: rgba(0, 0, 0, 0.85);
  color: #ffff;
  justify-content: flex-end;
  box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);

  > ul {
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > li {
      margin: 10px;
      list-style-type: none;
    }
    > li a {
      list-style-type: none;
      text-decoration: none;
      color: #ffff;
    }
  }
`;
