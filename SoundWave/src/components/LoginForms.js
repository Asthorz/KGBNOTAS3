// src/components/LoginForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import InputField from './InputUsuario';
import { apilocal } from '../apilocal';

import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa'; // Importação dos ícones
import Logotipo from '../assets/Logotipo.png';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  a{
    text-decoration-line:none ;
 color: #fff;
  }
  .Logotipo {
    height: 12rem;
  }

  .cores1{
    background: #000;
  }
  .cores2{
    background: #1877f2;
  }
  .cores3{
    background: rgb(207, 14, 14);;
  }
  .cores4{
    background: rgb(14, 207, 111);
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  async function ButtonEntraLogin(e) {
   if( !email || !password){
    alert('Todos os caompos são obrigatório!!')
   }
   try{
    await apilocal.post('/Entra',{email,password})
    alert('Logado')
   } catch (err) {
    alert('Senha ou Email, Errado.')
   }

  }

  return (
    <FormContainer>
      <img src={Logotipo} alt="Logotipo" className="Logotipo" />
      <LoginButton  className='cores1'>
        <IconWrapper><FaApple /></IconWrapper> Sign in with Apple
      </LoginButton>
      <LoginButton  className='cores2'>
        <IconWrapper><FaFacebookF /></IconWrapper> Sign in with Facebook
      </LoginButton>
      <LoginButton   className='cores3'>
        <IconWrapper><FaGoogle /></IconWrapper> Sign in with Google
      </LoginButton>
      <p>OR</p>
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to='/Recovery'><p>Forgot password?</p></Link>      
      <LoginButton className='cores4' onClick={ButtonEntraLogin}>Log in</LoginButton>
      <Link to='/Cadastra'><p>Sign up</p></Link>      

    </FormContainer>
  );
}
