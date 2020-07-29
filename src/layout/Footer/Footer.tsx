import React from 'react';
import Container from '../Container/Container';
import styled from 'styled-components';

const StlFooter = styled.footer`
    background: var(--footer-bg);
    color: var(--footer-color);
`;

const Footer: React.FC = () => {

    return (
        <StlFooter>
            <Container small>
                © Simple Breaking Bad 2020
            </Container>
        </StlFooter>
    );
};

export default Footer;

