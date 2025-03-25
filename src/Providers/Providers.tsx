import { ReactNode } from "react"

// Provider
import { ThemeProvider } from "styled-components"

// Tema da aplicação
import { theme } from "../style/theme"

export const Providers = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
