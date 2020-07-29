import React from 'react';
import styled from 'styled-components';

const StlCard = styled.article`
  display:block;
  padding: var(--space-md);
  border: 1px solid var(--white); 
  background-image: url(/img/dirt4.jpg);
  background-color: var(--yellow);
  background-blend-mode: color-burn;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
`;

const StlCardHeader = styled.header`
  margin-bottom: var(--space-md);
`;

const StlCardBody = styled.div`

`;

interface CardProps {
    title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {

    return (
        <StlCard>
            <StlCardHeader>
                <h3>{title}</h3>
            </StlCardHeader>
            <StlCardBody>
                {children}
            </StlCardBody>
        </StlCard>
    );
}

export default Card;
