import React from 'react'
import LoginForm from '../../components/LoginForms'
import theme from '../../GlobalStyles/StylesGlobalTheme'
import { ThemeProvider } from 'styled-components';

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <LoginForm />
    </div>
  </ThemeProvider>
  )
}
