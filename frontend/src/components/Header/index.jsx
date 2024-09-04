import {
  HeaderContainer,
  HeaderTypography,
  HeaderImg,
} from '../../styles/header'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const { pathname } = useLocation()
  const [token, setToken] = useState(sessionStorage.getItem('token'))
  console.log(token)
  const handleClick = (e) => {
    setToken('')
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderImg src={logo} />
      </Link>

      {pathname === '/' ? (
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HeaderTypography> Connexion </HeaderTypography>
        </Link>
      ) : (
        <Link to="/" onClick={handleClick} style={{ textDecoration: 'none' }}>
          <HeaderTypography> Deconnexion</HeaderTypography>
        </Link>
      )}
    </HeaderContainer>
  )
}

export default Header
