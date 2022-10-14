import { createContext, ReactElement, useEffect, useState } from "react"

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
})
interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>
}
export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => initialThemeHandler())

  function localStorageEmpty(): Boolean {
    return !localStorage.getItem("isDarkTheme")
  }

  function initialThemeHandler(): void {
    if (typeof window !== "undefined") {
      if (localStorageEmpty()) {
        localStorage.setItem("isDarkMode", "true")
        document.querySelector("body")!.classList.add("dark")
        setIsDarkTheme(true)
      } else {
        const isDarkTheme: boolean = JSON.parse(
          localStorage.getItem("isDarkTheme")!
        )
        isDarkTheme && document.querySelector("body")!.classList.add("dark")
        setIsDarkTheme(() => {
          return isDarkTheme
        })
      }
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    )
    setIsDarkTheme(!isDarkTheme)
    toggleDarkClassToBody()
    setvalueToLocalStorage()
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark")
  }

  function setvalueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`)
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
