import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterSearch from './CharacterSearch/CharacterSearch';
import breakpoints from '../../breakpoints';
import CharacterDetail from './CharacterDetail/CharacterDetail';
import { Character } from '../../shared/types/Character';

const CharacterRow = styled.div`

   @media (min-width: ${breakpoints.md.min}) {
    display: flex;
   }
`;

const CharacterSearchCol = styled.div`
    width: 100%;
    max-width: 25rem;
    
    @media (min-width: ${breakpoints.md.min}) {
      flex: 0 1 25rem;
    }
`;

const CharacterDetailCol = styled.div`
    margin-top: var(--space-lg);
    
    @media (min-width: ${breakpoints.md.min}) {
      margin-top: 0;
      padding-left: var(--space-xl);
      flex: 1 0 auto;
    }
`;

const CharacterHandler: React.FC = () => {

    const [character, setCharacter] = useState<Character | null>(null);

    const selectCharacterHandler = (newCharacter: Character) => {
        setCharacter(newCharacter);
    };

    return (
        <CharacterRow>
            <CharacterSearchCol>
                <CharacterSearch onCharacterSelect={selectCharacterHandler} />
            </CharacterSearchCol>
            <CharacterDetailCol>
                {!!character && <CharacterDetail character={character} />}
            </CharacterDetailCol>
        </CharacterRow>
    );
}

export default CharacterHandler;
