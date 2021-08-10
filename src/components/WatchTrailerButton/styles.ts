import styled from "styled-components";

export const Container = styled.button`
  width: 225px;
  height: 45px;
  background: transparent;
  border: #658e76 solid;

  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;


  position: relative;
  transform: skew(-20deg);
  top: 525px;
  left: 205px;
  cursor: pointer;
  text-transform: uppercase;
  transition: filter 0.2s;

  :hover {

    filter: brightness(0.9);
  
  }
`;
