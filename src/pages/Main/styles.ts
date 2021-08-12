import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #1a4855 20%, #628e75 100%);

  .logoImage {
    width: 100px;
    height: 48px;
    position: absolute;
    top: 41px;
    left: 165px;
  }
  .chichiro {
    width: 500px;
    height: 369px;
    position: absolute;
    left: 905px;
    top: 210px;
    animation-name: chichiro-main;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    -webkit-animation: chichiro-main 1s infinite  alternate;
    animation: chichiro-main 1s infinite  alternate;
  }

  @keyframes chichiro-main {
    0% { transform: translateY(20px); }
    100% { transform: translateY(0px); }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 850px;
  height: 395px;
  position: absolute;
  top: 165px;
  left: 165px;

  h1 {
    font-weight: 900;
    font-size: 68px;
    line-height: 74px;
    width: 445px;
    height: 168px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
    width: 445px;
    height: 50px;
    text-transform: uppercase;
  }

  p {
    width: 445px;
    height: 87px;
    font-weight: 400;
    font-size: 16px;
    width: 445px;
    line-height: 29px;
  }
`;
