import React from 'react';
import styled from 'styled-components';

const StlSpinner = styled.div`
  font-size: 10px;
  margin: 4rem auto;
  text-indent: -9999em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background: #fff;
  background: linear-gradient(to right, #fff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: spinnerAnim 1.4s infinite linear;
  transform: translateZ(0);
  
  &::before {
      width: 50%;
      height: 50%;
      background: #fff;
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }
    
  &::after {
      background: var(--main-bg);
      width: 75%;
      height: 75%;
      border-radius: 50%;
      content: '';
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    
`;

const Spinner: React.FC = () => {

    return (
        <StlSpinner>Loading...</StlSpinner>
    );
}

export default Spinner;
