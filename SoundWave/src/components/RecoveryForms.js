import React, { useState } from 'react'
import InputRecovery from './InputRecovery'

import styled from 'styled-components';
import RecoveryButton from './ReconveryButton';
import { Link } from 'react-router-dom';

const RecoveryConteiner = styled.form`
.Recoveryh1{
    font-size: 42px;
    font-weight: 600;
}
a{
  color: #fff;
  text-decoration-line:none;
  text-align: center;

}
p{
  font-size:24px;
  font-weight: 600;
}
`

export default function RecoveryForms() {
    
    const [email, setEmail] = useState('');

 async function EnviarEmailSenha(e) {
    e.preventDefault();
    
    console.log("Email:", email);

 }

  return (
    <div>
    <RecoveryConteiner onClick={EnviarEmailSenha}>
          <h1 className="Recoveryh1">Recover your profile </h1>
          <InputRecovery
          type='text'
          placeholder='Your Email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}

          />
         <RecoveryButton >Continua</RecoveryButton>
         <Link to='/Login'><p>Volta para Login</p></Link>      

    </RecoveryConteiner>
    </div>
  )
}
