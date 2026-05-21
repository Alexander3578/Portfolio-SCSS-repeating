import { createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const getInitialTheme = (): Theme => {
        const saved = localStorage.getItem('theme') as Theme | null
        return saved ?? 'light'
    }

    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        const saved = localStorage.getItem('theme') as Theme | null
        if (saved) setTheme(saved)
    }, [])

    useEffect(() => {
        const root = document.documentElement

        root.classList.remove('light', 'dark')
        root.classList.add(theme)

        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}