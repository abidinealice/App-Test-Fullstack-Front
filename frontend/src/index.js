import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals'
import Landing from './pages/Landing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
