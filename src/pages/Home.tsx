import { AvatarsList, CardComponent, CustomChart, CustomTable, Header } from "@/components"
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

    const mockTableData = {
        headers: ['Name', 'Email', 'Actions'],
        rows: [
            [
                <span>Nome 1</span>,
                <span>nome@email.com</span>,
                <button>ACTION</button>
            ],
            [
                <span>Nome 2</span>,
                <span>nom2@email.com</span>,
                <button>ACTION</button>
            ],
            [
                <span>Nome 3</span>,
                <span>nom3@email.com</span>,
                <button>ACTION</button>
            ]
        ]
    }
    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <CardComponent>CARD1</CardComponent>
                <CardComponent>
                    <AvatarsList listData={mockListData} />
                </CardComponent>
                <CardComponent>
                    <CustomTable headers={mockTableData.headers} rows={mockTableData.rows} />
                </CardComponent>
                <CardComponent>
                    <CustomChart 
                        labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']} 
                        data={[1000.12, 2456.54, 986.32, 343.65, 854,98]} 
                        type="line" />
                </CardComponent>
            </Container>
        </>
    )
}

export default Home