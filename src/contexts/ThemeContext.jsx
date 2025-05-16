import { createContext, useState, useContext, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
    // Check if user has a saved preference or use system preference
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState('dark'); // Default to dark theme initially

    // Set theme on initial load (using useEffect to avoid hydration issues)
    useEffect(() => {
        setTheme(getInitialTheme());
    }, []);

    // Update theme in localStorage and document when it changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Theme values for styled components
    const themeValues = {
        dark: {
            primary: '#2D0C57', // Deep purple
            secondary: '#8A2BE2', // Bright purple
            background: '#121212', // Near black
            text: '#FFFFFF', // White
            accent: '#FF5252', // Red accent (Persona-like)
            cardBg: '#1E1E1E', // Slightly lighter than background
            navBg: '#0A0A0A', // Darker than background
        },
        light: {
            primary: '#FFFFFF', // White
            secondary: '#F5F5F5', // Light gray
            background: '#FAFAFA', // Off-white
            text: '#333333', // Dark gray
            accent: '#FFD700', // Gold
            cardBg: '#FFFFFF', // White
            navBg: '#F0F0F0', // Light gray
        }
    };

    // Values to be provided to consumers
    const value = {
        theme,
        toggleTheme,
        colors: themeValues[theme],
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Custom hook for using the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
