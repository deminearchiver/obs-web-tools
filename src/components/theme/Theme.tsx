import { createContext, useContext, useState } from "react";
import { ChildProps } from "../../Types/Props";

export type ThemeType = {
    key: string;
    [variable: `--${string}`]: number;
}

const defaultThemes = {
    light: {
        key: ""
    },
    dark: {
        key: ""
    },
    darkContrast: {
        key: ""
    }
} as {
    [key: string]: ThemeType;
};

const ThemeContext = createContext<ThemeType>({} as ThemeType);
const ThemeChangeContext = createContext<ThemeChanger>(() => {});

const useTheme = () => useContext(ThemeContext);
const useChangeTheme = () => useContext(ThemeChangeContext);

type ThemeChanger = (theme: keyof typeof defaultThemes) => void;

export const ThemeProvider = ({ children }: ChildProps) => {
    const [theme, setTheme] = useState(defaultThemes.light);
    
    const changeTheme: ThemeChanger = (theme: keyof typeof defaultThemes) => {
        setTheme(defaultThemes[theme]);
    }


    return (
        <ThemeContext.Provider value={theme}>
            <ThemeChangeContext.Provider value={changeTheme}>
                {children}
            </ThemeChangeContext.Provider>
        </ThemeContext.Provider>
    )
}