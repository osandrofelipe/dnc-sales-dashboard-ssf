import { Box, Container } from "@mui/material";
import { BannerImage } from "@/components";

function Registration() {
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
                            <h1>CADASTRO</h1>
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

export default Registration
