import { motion } from 'framer-motion';
import styled from 'styled-components';

const EducationContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const EducationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const EducationCard = styled(motion.div)`
    background-color: var(--card-bg);
    padding: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: var(--accent);
        transform: translateX(-100%);
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover:before {
        transform: translateX(0);
    }
`;

const DegreeName = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent);
`;

const Institution = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const Period = styled.p`
    font-size: 0.9rem;
    margin-bottom: 1rem;
    opacity: 0.8;
`;

const Location = styled.p`
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    font-style: italic;
`;

const Description = styled.p`
    line-height: 1.6;
`;

const Education = () => {
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
        hidden: { y: 30, opacity: 0 },
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
        <EducationContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Education</SectionTitle>

            <EducationGrid>
                <EducationCard variants={itemVariants}>
                    <DegreeName>Bachelor in Computer Science</DegreeName>
                    <Institution>Unijuí | Universidade Regional do Noroeste do Estado do RS</Institution>
                    <Period>February 2022 - Expected completion: 2027</Period>
                    <Location>Ijuí, RS</Location>
                    <Description>
                        Currently pursuing a Bachelor's degree in Computer Science, focusing on
                        data engineering, algorithms, and software development. The program provides
                        a strong foundation in computer science principles and practical application
                        of technologies.
                    </Description>
                </EducationCard>

                <EducationCard variants={itemVariants}>
                    <DegreeName>Technical Degree in IT Support and Maintenance</DegreeName>
                    <Institution>Farroupilha Federal Institute</Institution>
                    <Period>February 2019 - December 2021</Period>
                    <Location>Santo Ângelo, RS</Location>
                    <Description>
                        Completed a technical degree focused on IT infrastructure, hardware maintenance,
                        networking, and basic programming. This program provided hands-on experience with
                        computer systems and laid the groundwork for my career in technology.
                    </Description>
                </EducationCard>
            </EducationGrid>
        </EducationContainer>
    );
};

export default Education;
