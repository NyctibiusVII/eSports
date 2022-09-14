/* Import --------------------------------------------------------------- */

import { useTheme } from 'next-themes'

/* ---------------------------------------------------------------------- */

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            The current theme is: {theme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
}