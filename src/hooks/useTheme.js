import React, { createContext, useContext, useState, useCallback } from "react"

const Context = createContext(null)

const { Provider } = Context

const lightTheme = {
  name: "light",
  color: {
    primary: "#c4a71c",
    secondary: "#212113",
    tertiary: "#a88b00",
    bg: "#e9e7de",
  },
}

const darkTheme = {
  name: "dark",
  color: {
    primary: "#c4a71c",
    secondary: "#e9e7de",
    tertiary: "#c4a71c",
    bg: "#212113",
  },
}

export const ThemeStateProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)
  const switchToLightMode = useCallback(() => setTheme(lightTheme), [])
  const switchToDarkMode = useCallback(() => setTheme(darkTheme), [])
  return (
    <Provider value={{ theme, switchToDarkMode, switchToLightMode }}>
      {children}
    </Provider>
  )
}

export default () => useContext(Context)
