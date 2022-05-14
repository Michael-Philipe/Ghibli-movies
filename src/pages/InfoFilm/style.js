import styled from 'styled-components';

export const Background = styled.div`
  width: 900px;
  height: 500px;
  background-image: url(${(props) => props.image || ''});
  background-size: cover;
  margin: 0 auto;
  background-color: #fff;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    h1 {
      font-size: 3rem;
    }
  }
`;

export const DescriptionWrapper = styled.div`
  width: 900px;
  margin: 10px auto;
  background-color: #fff;
  background-color: #dedede;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    h1 {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.6rem;
    margin: 10px 15px;
  }

  .description {
    text-indent: 1.5rem;
  }
`;
