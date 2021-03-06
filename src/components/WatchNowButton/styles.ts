import styled from "styled-components";

export const Container = styled.button`
  width: 225px;
  height: 45px;
  background: #658e76;
  border: none;

  
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;


  position: relative;
  transform: skew(-20deg);
  top: 525px;
  left: 155px;
  cursor: pointer;
  text-transform: uppercase;
  transition: filter 0.2s;

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 33px;
    
  }

  :hover {

    filter: brightness(0.9);
  
  }
`;
