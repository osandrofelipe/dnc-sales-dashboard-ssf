import { Box, Container } from "@mui/material";
import { BannerImage, FormComponent, StyledH1, StyledP, Logo } from "@/components";
import { pxToRem } from "@/utils";

function Login() {
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
                            <Box sx={{ marginBottom: pxToRem(24) }}><Logo height={41} width={100}/></Box>
                            <Box sx={{ marginBottom: pxToRem(24) }}>
                                <StyledH1>Bem-Vindo</StyledH1>
                                <StyledP>Digite seu email e senha para logar</StyledP>
                            </Box>
                            <FormComponent inputs={[
                                { type: 'email', placeholder: 'Email', disabled: false },
                                { type: 'password', placeholder: 'Senha', disabled: false }
                            ]}
                                buttons={[
                                    { className: 'primary', type: 'submit', children: 'Login', disabled: false }
                                ]}
                                message={{
                                    msg: 'Sucesso!',
                                    type: 'success'
                                }}
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
