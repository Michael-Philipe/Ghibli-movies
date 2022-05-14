import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;

  .content {
    max-width: 1170px;
    width: 100%;
    display: flex;
    align-items: center;

    h1 {
      font-size: 3rem;
      margin-left: 1rem;
    }
    img {
      position: fixed;
      height: 35%;
      right: 0px;
      bottom: 0vh;
      margin-left: 10px;
      transform: translatey(0px);
      animation: float 2.5s infinite;
    }

    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-10px);
      }
      100% {
        transform: translatey(0px);
      }
    }
  }
`;
