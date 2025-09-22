import { StyledButton } from '@/components'
import { render } from '@testing-library/react'
import type { DefaultTheme } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themes.list'

describe('StyledButton', () => {
    const renderComponent = (theme: DefaultTheme, classname?: string, props = {}) =>
        render(
            <ThemeProvider theme={theme}>
                <StyledButton className={classname} {...props}/>
            </ThemeProvider>
        )

    themesList.forEach(({ name, theme }) => {
        describe(`${name}`, () => {
            it('should match the snapshot with alert class', () => {
                const { asFragment } = renderComponent(theme, 'alert')
                expect(asFragment()).toMatchSnapshot()
            })
            it('should match the snapshot with primary class', () => {
                const { asFragment } = renderComponent(theme, 'primary')
                expect(asFragment()).toMatchSnapshot()
            })
            it('should match the snapshot with borderless alert class', () => {
                const { asFragment } = renderComponent(theme, 'borderless-alert')
                expect(asFragment()).toMatchSnapshot()
            })
            it('should match the snapshot with disabled status', () => {
                const { asFragment } = renderComponent(theme, 'primary' , {disabled: true})
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})