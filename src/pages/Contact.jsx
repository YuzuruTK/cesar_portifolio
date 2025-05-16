import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const ContactContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ContactInfo = styled(motion.div)`
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
        
        a {
            color: var(--text);
            text-decoration: none;
            transition: color 0.3s ease;
            
            &:hover {
                color: var(--accent);
            }
        }
    }
`;

const ContactForm = styled(motion.div)`
    .persona-card {
        padding: 2rem;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: var(--accent);
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    outline: 3px solid var(--accent);
    color: var(--text);
    font-family: 'Roboto', sans-serif;
    
    &:focus {
        outline: 3px inset var(--accent);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 0.75rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    outline: 3px solid var(--accent);
    color: var(--text);
    font-family: 'Roboto', sans-serif;
    min-height: 150px;
    resize: vertical;
    
    &:focus {
        outline: 3px inset var(--accent);
    }
`;

const SubmitButton = styled(motion.button)`
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    margin-top: 1rem;
    width: 100%;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--card-bg);
    color: var(--text);
    border-radius: 0;
    text-decoration: none;
    transition: all 0.3s ease;
    transform: skewX(-10deg);
    
    &:hover {
        background-color: var(--accent);
        transform: skewX(-10deg) scale(1.1);
    }
`;

const FormMessage = styled(motion.div)`
    padding: 1rem;
    margin-top: 1rem;
    background-color: ${props => props.success ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
    border-left: 4px solid ${props => props.success ? 'green' : 'red'};
`;

const Contact = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({
                submitted: true,
                success: true,
                message: 'Thank you for your message! I will get back to you soon.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1000);
    };

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
        <ContactContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Contact Me</SectionTitle>

            <ContactGrid>
                <ContactInfo variants={itemVariants}>
                    <div className="persona-card">
                        <div className="info-item">
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:lourenzon121@gmail.com">lourenzon121@gmail.com</a>
                            </p>
                        </div>
                        <div className="info-item">
                            <h3>Telefone</h3>
                            <p>
                                <a href="https://wa.me/5555984156619" target='blank'>(+55) 55 9 8415-6619</a>
                            </  p>
                        </div>
                    </div>
                </ContactInfo>

                <ContactForm variants={itemVariants}>
                    <div className="persona-card">
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="name">Nome</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="subject">Assunto</Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message">Mensagem</Label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>

                            <SubmitButton
                                type="submit"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enviar Mensagem
                            </SubmitButton>

                            {formStatus.submitted && (
                                <FormMessage
                                    success={formStatus.success}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {formStatus.message}
                                </FormMessage>
                            )}
                        </form>
                    </div>
                </ContactForm>
            </ContactGrid>
        </ContactContainer>
    );
};

export default Contact;
