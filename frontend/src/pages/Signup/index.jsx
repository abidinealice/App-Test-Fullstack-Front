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
import AnimationCar2 from '../../components/Animation/car2'

function Signup() {
  const navigate = useNavigate()

  //API URL
  const urlAPI = 'http://localhost:8080/api/auth/signup'

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
  const [username, setUsername] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(urlAPI, formData)
      console.log('Form data send successfuly:', response.data)
      navigate('/')
      setMsg('')
      setUsername('')
      setPassword('')
      setEmail('')
    } catch (error) {
      console.error('Error submisssion form data')
      setMsg('Veuillez réessayer')
    }
  }

  return (
    <LoginContainer>
      <LoginForm>
        <AnimationCar2 />
        <LoginTitle>Inscrivez-vous sur ARVAL</LoginTitle>
        <ContactFormText>{msg}</ContactFormText>
        <ContactForm onSubmit={handleSubmit}>
          <ContactFormField
            variant="filled"
            label="Nom d'Utilisateur"
            onChange={handleChange}
            name="username"
            value={username}
            type="text"
            required
          ></ContactFormField>

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

          <ContactFormBtn type="submit">Inscription</ContactFormBtn>
        </ContactForm>
        <Link to="/" style={{ color: '#FFF' }}>
          <LoginTypography>
            Vous avez déjà compte ? Connextez-vous
          </LoginTypography>
        </Link>
      </LoginForm>
    </LoginContainer>
  )
}

export default Signup
