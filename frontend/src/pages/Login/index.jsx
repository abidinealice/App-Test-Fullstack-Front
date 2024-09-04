import axios from 'axios'
import { useState } from 'react'
import {
  LoginContainer,
  LoginForm,
  ContactForm,
  ContactFormField,
  ContactFormText,
  ContactFormBtn,
  LoginTypography,
  LoginTitle,
} from '../../styles/login'
import { Link, useNavigate } from 'react-router-dom'
import AnimationCar from '../../components/Animation/car'

function Login() {
  const navigate = useNavigate()
  //API URL
  const urlAPI = 'http://localhost:8080/api/auth/login'

  //Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  //Text above form
  const [msg, setMsg] = useState()

  //Form field
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(urlAPI, formData)
      console.log('Form data send successfuly:', response.data)
      console.log(response.data.token)
      let token = response.data.token
      localStorage.setItem('token', token)
      setMsg('')
      setPassword('')
      setEmail('')
      navigate('/Landing')
    } catch (error) {
      console.error('Error submisssion form data')
      setMsg('Adresse E-mail ou mot de passe incorrecte')
    }
  }

  return (
    <LoginContainer>
      <AnimationCar />
      <LoginForm>
        <LoginTitle>Bienvenue sur ARVAL</LoginTitle>
        <ContactFormText>{msg}</ContactFormText>
        <ContactForm onSubmit={handleSubmit}>
          <ContactFormField
            variant="filled"
            label="Adresse E-mail"
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            required
          ></ContactFormField>

          <ContactFormField
            variant="filled"
            label="Mot de passe"
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
            required
          ></ContactFormField>

          <ContactFormBtn type="submit">Connexion</ContactFormBtn>
        </ContactForm>
        <Link to="/Signup" style={{ color: '#FFF' }}>
          <LoginTypography>
            Vous n'avez pas de compte ? Inscrivez-vous
          </LoginTypography>
        </Link>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
