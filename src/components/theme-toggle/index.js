import React, { useCallback } from "react"
import useTheme from "src/hooks/useTheme"
import View from "./view"

export default () => {
  const { theme, switchToLightMode, switchToDarkMode } = useTheme()
  const changeHandler = useCallback(() => {
    if (theme.name === "light") {
      switchToDarkMode()
    } else {
      switchToLightMode()
    }
  }, [theme.name])
  return <View onChange={changeHandler} isOn={theme.name === "light"} />
}
