import React, { ChangeEvent, useState } from 'react';
import Input from '../../../UI/Input/Input';
import { useCharacterSearch } from '../../../hooks/useCharacterSearch';
import Spinner from '../../../UI/Spinner/Spinner';
import styled from 'styled-components';
import { Character } from '../../../shared/types/Character';


const StlButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  display: inline-block;
  box-shadow: none;
  color: var(--link-color);
  background-color: transparent;
  transition: color ease-out 0.2s;
  
  &:hover,
  &:focus {
    text-decoration: underline;
    color: var(--link-color-hover);
  }
`;

const CharacterSearch: React.FC<{ onCharacterSelect: (character: Character) => unknown }> = (
    {onCharacterSelect}
    ) => {

    const [search, setSearch] = useState('');

    const {data, loading, error} = useCharacterSearch(search);

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    let result;

    if (loading) {
        result = <Spinner/>;
    } else if (error) {
        result = <p className="error">
            Une erreur s'est produite, veuillez nous excusser pour le désagrément.
        </p>;
    } else if (data.length) {
        result = (
            <ul>
                {data.map(char => (
                    <li key={char.char_id}>
                        <StlButton type="button" onClick={() => onCharacterSelect(char)}>
                            {char.name}
                        </StlButton>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            <Input
                type="text"
                label="Rechercher un personnage"
                placeholder="ex: Walter White"
                onChangeHandler={onChangeHandle}
            />
            {result}
        </>
    );
}

export default CharacterSearch;
