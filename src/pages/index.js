import React from "react"
import { ThemeProvider } from "styled-components"
import useTheme, { ThemeStateProvider } from "src/hooks/useTheme"
import Home from "src/components/home"
import "src/components/index.css"

const ContextProvider = ({ children }) => (
  <ThemeStateProvider>{children}</ThemeStateProvider>
)

const IndexPage = () => {
  const { theme } = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default () => (
  <ContextProvider>
    <IndexPage />
  </ContextProvider>
)
