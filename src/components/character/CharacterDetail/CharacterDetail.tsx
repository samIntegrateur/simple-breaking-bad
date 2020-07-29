import React from 'react';
import { Character } from '../../../shared/types/Character';
import Card from '../../../UI/Card/Card';
import styled from 'styled-components';

const ListKeyValue = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: table;
`;

const KeyValue = styled.li`
  display: table-row;
`;

const ListKeyValueKey = styled.span`
  display: table-cell;
  vertical-align: baseline;
  padding: 0.3rem 1rem 0.3rem 0;
  font-weight: var(--font-weight-bold);
`;

const ListKeyValueValue = styled.span`
  display: table-cell;
  vertical-align: baseline;
  padding: 0.3rem 0;
  
  ul {
    padding-left: 0;
    list-style: disc inside;
  }
`;

interface ListProps {
    name: keyof Character;
    label: string;
}

const listProps: ListProps[] = [
    {
        name: 'birthday',
        label: 'Birth date',
    },
    {
        name: 'occupation',
        label: 'Occupations',
    },
    {
        name: 'status',
        label: 'Status',
    },
    {
        name: 'portrayed',
        label: 'Portrayed',
    },
    {
        name: 'nickname',
        label: 'Nickname',
    },
    {
        name: 'appearance',
        label: 'Appears in',
    }
];

const CharacterDetail: React.FC<{character: Character}> = ({ character}) => {

    return (
        <Card title={character.name}>
            <ListKeyValue>
                {listProps.map(prop => {
                    if (prop.name in character && character[prop.name] !== 'undefined') {

                        if (typeof(character[prop.name]) === 'string' || typeof(character[prop.name]) === 'number') {
                            return (
                                <KeyValue key={prop.name}>
                                    <ListKeyValueKey>{prop.label}&nbsp;:</ListKeyValueKey>
                                    <ListKeyValueValue>{character[prop.name]}</ListKeyValueValue>
                                </KeyValue>
                            )
                        } else if (Array.isArray(character[prop.name])) {
                            const propertiesArr = character[prop.name] as Array<string|number>;
                            return (
                                <KeyValue key={prop.name}>
                                    <ListKeyValueKey>{prop.label}&nbsp;:</ListKeyValueKey>
                                    <ListKeyValueValue>
                                        <ul>
                                            {propertiesArr.map(occ => (
                                                <li key={occ}>{occ}</li>
                                            ))}
                                         </ul>
                                    </ListKeyValueValue>
                                </KeyValue>
                            )
                        } else return null

                    } else return null
                })
                }

            </ListKeyValue>
        </Card>
    );
}

export default CharacterDetail;
