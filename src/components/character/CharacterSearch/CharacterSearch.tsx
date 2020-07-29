import React, { ChangeEvent, useState } from 'react';
import Input from '../../../UI/Input/Input';
import { useCharacterSearch } from '../../../hooks/useCharacterSearch';

const CharacterSearch: React.FC = () => {

    const [search, setSearch] = useState('');

    const { data, loading, error } = useCharacterSearch(search);

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('change event', event);
        setSearch(event.target.value);
    };


    let result;

    if (loading) {
        result = <p>Loading...</p>;
    } else if (error) {
        result = <p className="error">
            Une erreur s'est produite, veuillez nous excusser pour le désagrément.
        </p>;
    } else if (data.length) {
        result = (
          <ul>
              {data.map(char => (
                  <li key={char.char_id}>
                      {char.name}
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
