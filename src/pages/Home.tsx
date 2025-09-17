import {
    AvatarsList,
    CardComponent,
    CustomChart,
    CustomTable,
    Header,
    StyledH2,
    StyledH3,
    StyledSpan,
} from '@/components'
import { Link } from 'react-router-dom'

// HOOKS
import { useGet } from '@/hooks'

// MUI
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// UTILS
import { currencyConverter, highlightTextConverter } from '@/utils'

// TYPES
import type { CustomChartProps, HighLightsData, NewsData, StarsData } from '@/types'

function Home() {
    // HIGHLIGHTS
    const {
        data: highlightsData,
        loading: highlightsLoading,
        error: highlightsError,
    } = useGet<HighLightsData[]>('sales/highlights')

    // SALES PER MONTH
    const {
        data: salesPerMonthData,
        loading: salesPerMonthLoading,
        error: salesPerMonthError,
    } = useGet<CustomChartProps>('sales/month')

    // SALES STARS
    const {
        data: salesStarsData,
        loading: salesStarsLoading,
        error: salesStarsError,
    } = useGet<StarsData[]>('sales/stars')

    // NEWS
    const {
        data: newsData,
        loading: newsLoading,
        error: newsError,
    } = useGet<NewsData[]>('news')

    // YEAR
    const {
        data: salesYearData,
        loading: salesYearLoading,
        error: salesYearError,
    } = useGet<CustomChartProps>('sales/year')

    return (
        <>
            <Header />

            </Container>
        </>
    )
}

export default Home