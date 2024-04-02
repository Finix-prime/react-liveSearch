import React, { useState } from 'react';
import axios from 'axios';

const LiveSearch = () => {
    const [query, setQuery] = useState('');
    const [searchOptions, setSearchOptions] = useState([]);

    const fetchSearchOptions = async () => {
        try {
            console.log('make request');
            const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
            const result = await axios.get(url, {
                headers: {
                    "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
                }
            });
            if (result) {
                const data = result.data;
                const list = data.map((item) => item.url);
                setSearchOptions(list);
            }
        } catch (error) {
            console.error('Error fetching search options:', error);
        }
    };

    const handleChange = (event) => {
        const input = event.target.value;
        setQuery(input);
        fetchSearchOptions();
    };

    const handleClick = (value) => {
        setQuery(value);
        setSearchOptions([]);
    };

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
            <ul className="search-options">
                {searchOptions.map((option, index) => (
                    <li key={index} onClick={() => handleClick(option)}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LiveSearch;
