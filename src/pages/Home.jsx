import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 120px);
    position: relative;
    overflow: hidden;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 2;
`;

const Name = styled(motion.h1)`
    font-size: 4rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const Title = styled(motion.h2)`
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--accent);
    
    &:after {
        display: none;
    }
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Description = styled(motion.p)`
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
`;

const BackgroundElement = styled(motion.div)`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 0;
    background-color: var(--primary);
    opacity: 0.05;
    z-index: 1;
    transform: rotate(45deg);
    
    &:nth-child(1) {
        top: -150px;
        right: -150px;
    }
    
    &:nth-child(2) {
        bottom: -150px;
        left: -150px;
    }
`;

const Home = () => {
    const { theme } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const backgroundVariants = {
        hidden: { scale: 0, rotate: 0 },
        visible: {
            scale: 1,
            rotate: 45,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <HomeContainer>
            <BackgroundElement
                variants={backgroundVariants}
                initial="hidden"
                animate="visible"
            />
            <BackgroundElement
                variants={backgroundVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
            />

            <HeroContent as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
                <Name variants={itemVariants}>Cesar Lourenzon</Name>
                <br />
                <Title variants={itemVariants}>Escritor | Storyteller</Title>
                <Description variants={itemVariants}>
                    Estudante de Publicidade com foco em storytelling, branding e narrativas visuais.
                </Description>
                <div>
                    <CTAButton
                        as={motion.button}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/about'}
                    >
                        Sobre Mim
                    </CTAButton>
                    <CTAButton
                        as={motion.button}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/contact'}
                    >
                        Contatos
                    </CTAButton>
                </div>
            </HeroContent>
        </HomeContainer>
    );
};

export default Home;
