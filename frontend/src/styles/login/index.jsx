import { Box, Button, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../theme'

//CONTAINER

export const LoginContainer = styled(Box)(() => ({
  height: '100vh',
}))

export const LoginForm = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'end',
  padding: '40px 75px 40px 0',
  margin: '5% 40px 0 40px',
  backgroundColor: Colors.title,
  borderRadius: '5px',
  gap: '25px',
}))

//TEXT

export const LoginTitle = styled(Typography)(() => ({
  fontSize: '30px',
  color: '#FFF',
}))

export const LoginTypography = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#FFF',
  paddingRight: '40px',
}))

export const ContactTitle = styled(Typography)(() => ({
  paddingTop: '12%',
  textAlign: 'center',
  color: Colors.primary,
}))

export const ContactText = styled(Typography)(() => ({
  color: Colors.primary,
}))

export const ContactTextField = styled(Typography)(() => ({}))

//BUTTON

export const ContactFormBtn = styled(Button)(() => ({
  width: '50%',
  left: '50%',
}))

//FORM

export const ContactForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '300px',
}))

export const ContactFormText = styled(Typography)(() => ({
  paddingBottom: '10px',
  color: '#850000',
}))

export const ContactFormField = styled(TextField)(() => ({}))
