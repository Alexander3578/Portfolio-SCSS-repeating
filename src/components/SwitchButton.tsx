// ThemeSwitcher.tsx

import { useContext } from 'react'

import { ThemeContext } from './ThemeSwitch.tsx'

export const ThemeSwitcher = () => {
    const themeContext =
        useContext(ThemeContext)

    if (!themeContext) return null

    const {
        theme,
        toggleTheme,
    } = themeContext

    return (
        <button onClick={toggleTheme}>
            Current theme: {theme}
        </button>
    )
}