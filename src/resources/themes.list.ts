// src/__tests__/resources/themes.list.ts
import type { DefaultTheme } from 'styled-components'
import { darkTheme, lightTheme } from '@/styles'

interface ThemeItem {
  name: string
  theme: DefaultTheme
}

export const themesList: ThemeItem[] = [
  {
    name: 'Light Theme',
    theme: lightTheme,
  },
  {
    name: 'Dark Theme',
    theme: darkTheme,
  },
  // Se você tiver outros temas (darkTheme, highContrast, etc.), adiciona aqui
]
