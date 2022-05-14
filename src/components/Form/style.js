import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: calc(3em + 2px);
  margin: 0 0 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  background: #dedede;
  resize: none;
  outline: none;
  margin-left: 10%;

  :focus {
    border-color: #00bafa;
  }
`;
