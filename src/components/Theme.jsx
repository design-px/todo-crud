import { useEffect, useState } from "react";

export default function Theme() {
  const [themeMode, setThemeMode] = useState('')

  useEffect(() => {
    setThemeMode(localStorage.getItem('theme-mode') || 'dark')
  }, [])

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', themeMode)
    localStorage.setItem('theme-mode', themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <>

      <div className="change-theme">
        <input
          type="checkbox"
          className="theme-inp"
          id="toggle-theme"
          onChange={toggleTheme}
        />
        <label htmlFor="toggle-theme" className="theme-label"></label>
      </div>

    </>
  )
}
