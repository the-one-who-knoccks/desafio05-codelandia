import styled from "styled-components";

export const Container = styled.button`
  width: 225px;
  height: 45px;
  background: transparent;
  border: #658e76 solid;


  border-radius: 0 50px 0px 50px;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;


  position: absolute;
  top: 525px;
  left: 405px;
  cursor: pointer;
  text-transform: uppercase;
  transition: filter 0.2s;

  :hover {

    filter: brightness(0.9);
  
  }
`;
