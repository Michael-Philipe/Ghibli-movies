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
  }
`;
