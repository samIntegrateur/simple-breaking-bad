import { useEffect, useState } from 'react';
import { Character } from '../shared/types/Character';
import { API_BASE_URL } from '../shared/constants';

export const useCharacterSearch = (search: string) => {
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean>(false);

    // todo: add some debounce logic
    useEffect(() => {

        const makeRequest = async () => {
            setLoading(true);
            setError(false);

            try {
                const queryResult = await fetch(`${API_BASE_URL}characters?name=${search}`);

                if (queryResult.status !== 200) {
                    throw new Error('Invalid response');
                }

                const queryData = await queryResult.json();
                console.log('queryData', queryData);

                setData(queryData);

            } catch (e) {
               console.error('error', e);
               setError(true);
            }

        };

        setData([]);
        if (search && search.length > 2) {
            makeRequest().then(() => setLoading(false));
        }
    }, [search]);

    return { data, loading, error };
}
