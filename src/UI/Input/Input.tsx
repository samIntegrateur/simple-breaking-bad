import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const StlFormGroup = styled.div`
  
  &:not(:last-child) {
    margin-bottom: var(--space-lg);
  }
`;

const StlLabel = styled.label`
  display: block;
  font-family: inherit;
  font-size: inherit;
  color: var(--white);
  font-weight: var(--font-weight-normal);
  margin-bottom: 0.7rem;
`;

const StlInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.7rem 1rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--font-weight-normal);
  color: var(--gray-darkest);
  background-color: var(--white);
  border: 0;
  border-radius: 0;
  line-height: var(--line-height);
`;

interface InputProps {
    type: 'text' | 'search' | 'number';
    label?: string;
    placeholder?: string;
    onChangeHandler?: ((event: ChangeEvent<HTMLInputElement>) => unknown);
}

const Input: React.FC<InputProps> = (props) => {

    return (
        <StlFormGroup>
            {props.label ? <StlLabel>{props.label}</StlLabel> : ''}
            <StlInput
                type={props.type}
                placeholder={props.placeholder ? props.placeholder : ''}
                onChange={props.onChangeHandler ? props.onChangeHandler : undefined}
            />
        </StlFormGroup>
    );
}

export default Input;
