// src/components/InputField.js
import styled from 'styled-components';

const InputField = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #1c1c1c;
  color: white;
border-radius: 10px;
  &::placeholder {
    color: #aaa;
  }
`;

export default InputField;
