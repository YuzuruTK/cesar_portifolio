import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const AboutText = styled(motion.div)`
    p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
    }
`;

const PersonalInfo = styled(motion.div)`
    .persona-card {
        padding: 2rem;
    }
    
    .info-item {
        margin-bottom: 1.5rem;
        
        h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: var(--accent);
        }
        
        p {
            font-size: 1rem;
        }
    }
`;

const About = () => {
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

    return (
        <AboutContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Sobre Mim</SectionTitle>

            <AboutContent>
                <AboutText variants={itemVariants}>
                    <p>
                        Sou estudante de Publicidade com interesse profundo em narrativas visuais e estratégias criativas. 
                        Tenho afinidade com storytelling, branding e o estudo crítico da comunicação contemporânea. 
                        Meus projetos buscam provocar reflexão e gerar conexão, sempre com ética, sensibilidade e um olhar atento ao comportamento humano.
                    </p>
                    <p>
                       Minha trajetória em Publicidade é marcada por uma abordagem analítica, introspectiva e comprometida com o impacto social da comunicação. 
                       Acredito que uma campanha bem feita não apenas vende — ela dialoga, ensina e transforma. 
                       Valorizo a clareza, a inteligência e o afeto como estratégias criativas.
                    </p>
                </AboutText>

                <PersonalInfo variants={itemVariants}>
                    <div className="persona-card">
                        <div className="info-item">
                            <h3>Email</h3>
                            <p>lourenzon121@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <h3>Número de Celular</h3>
                            <p>(+55) 55 9 8415-6619</p>
                        </div>
                        <div className="info-item">
                            <h3>LinkedIn</h3>
                            <p>
                                <a href="https://www.linkedin.com/in/c%C3%A9sar-augusto-01700526a/" target="_blank" rel="noopener noreferrer">
                                César Augusto 
                                </a>
                            </p>
                        </div>
                    </div>
                </PersonalInfo>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;
