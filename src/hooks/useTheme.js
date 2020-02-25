import React, { createContext, useContext, useState, useCallback } from "react"

const Context = createContext(null)

const { Provider } = Context

const lightTheme = {
  name: "light",
  color: "black",
}

const darkTheme = {
  name: "dark",
  color: "white",
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
