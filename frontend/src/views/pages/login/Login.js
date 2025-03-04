import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilAt } from '@coreui/icons'

// OAuth Handlers (Placeholder)
const handleOAuthLogin = (provider) => {
  console.log(`Logging in with ${provider}`)
  // Redirect to OAuth provider's login
}

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!credentials.username || !credentials.password) {
      setError('Please fill in all fields')
      return
    }
    console.log('Logging in with:', credentials)
    setError(null)
    // Send credentials to backend API
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              {/* Login Card */}
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign in to your account</p>

                    {error && <CAlert color="danger">{error}</CAlert>}

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        value={credentials.username}
                        onChange={handleChange}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={credentials.password}
                        onChange={handleChange}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/forgot-password">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>

                    {/* OAuth Buttons */}
                    <div className="mt-3 text-center">
                      <p className="text-body-secondary">Or log in with</p>
                      <CButton color="danger" className="me-2" onClick={() => handleOAuthLogin('Google')}>
                        <CIcon icon={cilAt} className="me-2" />
                        Google
                      </CButton>
                      <CButton color="dark" onClick={() => handleOAuthLogin('GitHub')}>
                        <CIcon icon={cilAt} className="me-2" />
                        GitHub
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>

              {/* Sign Up Card */}
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Join us today and start using our platform.</p>
                    <Link to="/register">
                      <CButton color="light" className="mt-3">
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
