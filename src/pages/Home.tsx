import { AvatarsList, CardComponent, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
    const mockListData = [
        {
            avatar: '/dnc_avatar.svg',
            name: 'Nome Sobbrenome 1',
            subtitle: currencyConverter(1234.54)
        },
        {
            avatar: '/dnc_avatar.svg',
            name: 'Nome Sobbrenome 2',
            subtitle: currencyConverter(789.54)
        },
        {
            avatar: '/dnc_avatar.svg',
            name: 'Nome Sobbrenome 3',
            subtitle: currencyConverter(10234.54)
        }
    ]
    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <CardComponent>CARD</CardComponent>
                <CardComponent>
                    <AvatarsList listData={mockListData}/>
                </CardComponent>
            </Container>
        </>
    )
}

export default Home