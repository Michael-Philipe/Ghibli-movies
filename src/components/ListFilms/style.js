import styled from 'styled-components';

export const FilmsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 1170px;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 1170px;
  margin: 0 auto;

  input {
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
  }
  input[required]:focus {
    border-color: #00bafa;
  }
`;
