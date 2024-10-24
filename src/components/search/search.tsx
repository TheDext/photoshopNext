'use client';
import { useState } from 'react';
import TextField from '@/src/components/common/textField/textField';

const Search = () => {
    const [searchRequest, setSearchRequest] = useState('');

    const handleNameChange = (value: string) => {
        setSearchRequest(value);
    };
    return (
        <>
            <TextField
                label="Имя"
                placeholder="Введите ваше имя"
                value={searchRequest}
                onChange={handleNameChange}
                name="search"
            />
        </>
    );
};

export default Search;
