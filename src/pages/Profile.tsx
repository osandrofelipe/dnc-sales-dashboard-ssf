
import { useContext } from "react"
import { AppThemeContext } from "@/contexts/AppThemeContext"

//COMPONENTS
import { CardComponent, Header, StyledH2, StyledButton } from "@/components"
import { Container, Box } from "@mui/material"

//SERVICES
import { logout } from "@/services"

function Profile() {
    const themeContext = useContext(AppThemeContext)
    return (
        <>  <Header />
            <Container className="mb-2" maxWidth='lg'>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 4 }}>
                    <Box>
                        <CardComponent>Seus Dados...</CardComponent>
                    </Box>
                    <Box>
                        <CardComponent>
                            <StyledH2 className="mb-1">Definições de conta</StyledH2>
                            <StyledButton
                                className="primary mb-1"
                                onClick={themeContext?.toggleTheme}
                            >
                                Trocar para tema {' '}
                                {themeContext?.appTheme === 'light' ? 'escuro' : 'clar'}
                            </StyledButton>
                            <StyledButton className="alert" onClick={logout}> Logout </StyledButton>
                        </CardComponent>
                    </Box>
                </Box>
            </Container>
            <CardComponent>
            </CardComponent>
        </>
    )
}

export default Profile
