import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './Navigation';
import Header from './Header';

const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1;
    margin-left: 250px;
    padding-top: 60px; /* Header height */
    min-height: 100vh;
    
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const PageContainer = styled(motion.div)`
    padding: 2rem;
    min-height: calc(100vh - 60px);
`;

const Layout = ({ children }) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <LayoutContainer>
            <Navigation />
            <MainContent>
                <Header />
                <PageContainer
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                >
                    {children}
                </PageContainer>
            </MainContent>
        </LayoutContainer>
    );
};

export default Layout;
