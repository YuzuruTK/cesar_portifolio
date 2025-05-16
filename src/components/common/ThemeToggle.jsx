import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ToggleButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background-color: ${props => props.theme === 'dark' ? '#8A2BE2' : '#FFD700'};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${props => props.theme === 'dark' ? 'flex-start' : 'flex-end'};
    padding: 0 5px;
    cursor: pointer;
    transform: none;
    transition: background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: ${props => props.theme === 'dark' ? '#9D4EFF' : '#FFC400'};
        transform: none;
    }
`;

const ToggleThumb = styled(motion.div)`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#333333'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme === 'dark' ? '#333333' : '#FFFFFF'};
    font-size: 12px;
`;

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <ToggleButton
            onClick={toggleTheme}
            theme={theme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <ToggleThumb
                theme={theme}
                initial={false}
                animate={{ x: theme === 'dark' ? 0 : 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
                {theme === 'dark' ? '🌙' : '☀️'}
            </ToggleThumb>
        </ToggleButton>
    );
};

export default ThemeToggle;
