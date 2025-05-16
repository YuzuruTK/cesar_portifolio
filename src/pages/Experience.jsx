import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const Timeline = styled.div`
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background-color: var(--accent);
        transform: skewY(-5deg);
        
        @media (min-width: 768px) {
            left: 50%;
            transform: translateX(-50%) skewY(-5deg);
        }
    }
`;

const TimelineItem = styled(motion.div)`
    position: relative;
    margin-bottom: 3rem;
    padding-left: 2rem;
    
    @media (min-width: 768px) {
        width: 45%;
        margin-left: ${props => props.position === 'right' ? '55%' : '0'};
        padding-left: ${props => props.position === 'right' ? '2rem' : '0'};
        padding-right: ${props => props.position === 'left' ? '2rem' : '0'};
        text-align: ${props => props.position === 'left' ? 'right' : 'left'};
    }
    
    &:before {
        content: '';
        position: absolute;
        left: -8px;
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--accent);
        
        @media (min-width: 768px) {
            left: ${props => props.position === 'right' ? '-12px' : 'auto'};
            right: ${props => props.position === 'left' ? '-12px' : 'auto'};
        }
    }
`;

const JobCard = styled.div`
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: var(--accent);
    }
`;

const JobTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent);
`;

const Company = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const Period = styled.p`
    font-size: 0.9rem;
    margin-bottom: 1rem;
    opacity: 0.8;
`;

const Responsibilities = styled.ul`
    list-style-type: none;
    padding-left: 0;
    
    li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
        line-height: 1.6;
        
        &:before {
            content: '•';
            position: absolute;
            left: 0;
            top: 0;
            color: var(--accent);
            font-size: 1.2rem;
        }
    }
    
    @media (min-width: 768px) {
        text-align: left;
        padding-left: ${props => props.position === 'left' ? '1.5rem' : '0'};
        padding-right: ${props => props.position === 'right' ? '1.5rem' : '0'};
    }
`;

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <ExperienceContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Experiência</SectionTitle>

            <Timeline>
                <TimelineItem position="right" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>Elaboração de Campanhas Publicitárias</JobTitle>
                        Criação de campanhas publicitárias em contextos acadêmicos
                    </JobCard>
                </TimelineItem>
                <TimelineItem position="left" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>Participação em Eventos Profissionais</JobTitle>
                        Participação em eventos com profissionais do mercado (como a RBS)
                    </JobCard>
                </TimelineItem>
                <TimelineItem position="right" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>Produção de Roteiros Publicitários</JobTitle>
                        Escrita de contos e roteiros aplicados ao storytelling publicitário
                    </JobCard>
                </TimelineItem>
                <TimelineItem position="left" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>Desenvolvimento de Identidade Visual</JobTitle>
                        Desenvolvimento de peças e identidade visual em parceria com colegas
                    </JobCard>
                </TimelineItem>

            </Timeline>
        </ExperienceContainer>
    );
};

export default Experience;
