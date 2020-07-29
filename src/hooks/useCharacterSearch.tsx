import { useEffect, useState } from 'react';
import { Character } from '../shared/types/Character';
import { API_BASE_URL } from '../shared/constants';
import useDebounce from './useDebounce';

export const useCharacterSearch = (search: string) => {
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean>(false);

    const debouncedSearchTerm = useDebounce(search ? search : '', 500);

    useEffect(() => {

        const makeRequest = async () => {
            setLoading(true);
            setError(false);

            try {
                const queryResult = await fetch(`${API_BASE_URL}characters?name=${debouncedSearchTerm}`);

                if (queryResult.status !== 200) {
                    throw new Error('Invalid response');
                }

                const queryData = await queryResult.json();

                setData(queryData);

            } catch (e) {
               setError(true);
            }

        };

        setData([]);
        if (debouncedSearchTerm && debouncedSearchTerm.length > 2) {
            console.log('new search request');
            makeRequest().then(() => setLoading(false));
        }
    }, [debouncedSearchTerm]);

    return { data, loading, error };
}
