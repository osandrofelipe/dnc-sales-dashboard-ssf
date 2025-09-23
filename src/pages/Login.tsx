/* eslint-disable react-hooks/exhaustive-deps */

import { type ChangeEvent, type MouseEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

//COMPONENTS
import { Box, Container } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
} from '@/components'

//HOOKS
import { useFormValidation, usePost } from '@/hooks'

//UTILS
import { jwtExpirationDateConverter, pxToRem } from '@/utils'

// TYPES
import type {
  MessageProps,
  LoginData,
  LoginPostData,
  DecodedJWT,
} from '@/types'

// REDUX
import { useSelector } from 'react-redux'
import type { RootState } from '@/redux'

function Login() {
  const navigate = useNavigate()
  const { email, message } = useSelector(
    (state: RootState) => state.createProfile
  )
  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Senha' },
  ]

  const { data, loading, error, postData } = usePost<LoginData, LoginPostData>(
    'login'
  )
  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleMessage = (): MessageProps => {
    if (!error) return { msg: message ?? '', type: 'success' }
    switch (error) {
      case 401:
        return {
          msg: 'Email e/ou senha inválidos',
          type: 'error',
        }
      default:
        return {
          msg: 'Não foi possível realizar a operação. Entre em contato com o nosso suporte.',
          type: 'error',
        }
    }
  }

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJWT = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data.jwt_token, {
        expires: jwtExpirationDateConverter(decoded.exp),
        secure: true,
      })
    }
    if (Cookies.get('Authorization')) navigate('/home')
  }, [data, navigate])

  useEffect(() => {
    if (email) {
      handleChange(0, email)
    }
  }, [email])

  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          }}
        >
          <Box sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-Vindo</StyledH1>
                <StyledP>Digite seu email e senha para logar</StyledP>
              </Box>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid || loading,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: loading ? 'Aguarde...' : 'Login',
                  },
                ]}
                message={handleMessage()}
              />
            </Container>
          </Box>
          <Box sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
            <Container maxWidth="sm">
              <BannerImage />
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login
