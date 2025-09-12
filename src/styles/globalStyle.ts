import { pxToRem } from '@/utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body, html {
        background: ${({ theme }) => theme.appBackground};
        color: ${({ theme }) => theme.appColor};
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }
    h1, h2, p,  ul, li, figure {
        margin: 0;
        padding: 0;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }
    
    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }

    .skeleton-loading {
        animation: skeleton 2s infinite alternate;
    }

    @keyframes skeletonLoading {
        from {
            background-color : ${({ theme }) => theme.appSkeletonFrom};
        }

        to {
            background-color : ${({ theme }) => theme.appSkeletonTo};
        }
    }


    .skeleton-loading-mh-1 {
        min-height: ${pxToRem(175)};
    }

    .skeleton-loading-mh-2 {
        min-height: ${pxToRem(400)};
    }
`
