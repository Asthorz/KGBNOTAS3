import React, { useState } from 'react'
import styled from 'styled-components'
import Logotipo from '../assets/Logotipo.png';
import InputField from './InputUsuario';
import RecoveryButton from './ReconveryButton';
import { apilocal } from '../apilocal';
import { Link } from 'react-router-dom';



const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #121212;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  .Logotipo {
    height: 12rem;
  }
  a{
    text-decoration-line:none ;
    color: #fff;
  }
`

export default function CraateLoginForms() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirPassword, setConfirPassword] = useState('');


 const validatePasswords =() =>{
  if (password !== ConfirPassword){
    alert('As senhas não coincidem!');
      return false;
  }
  return true
 }





  async function handleRegister() {
    
    if (!nome || !email || !password || !ConfirPassword) {
      alert('Todos os campos são obrigatórios!');
      return;
  }

  // Valida se as senhas coincidem antes de prosseguir
  if (!validatePasswords()) {
      return;
  }

  try {
      await apilocal.post('/Cadastra', { nome, email, password });
      alert('Cadastro Efetuado com sucesso');
  } catch (err) {
      alert('Erro ao Comunicar com BackEnd');
  }
}


  return (
    <FormContainer >
            <img src={Logotipo} alt="Logotipo" className="Logotipo" />
            <InputField
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
            <InputField
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        <InputField
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <InputField
        type="password"
        placeholder="Confirma Senha"
        value={ConfirPassword}
        onChange={(e) => setConfirPassword(e.target.value)}
      />

      <RecoveryButton onClick={handleRegister}>Criar</RecoveryButton>
      <Link to='/Login'><p>Fazer o login</p></Link>      


    </FormContainer>
  )
}
