"use client";

import React, { useState } from 'react';

export default function UnderlineForm() {
    const [wordInput, setWordInput] = useState('');
    const [data, setData] = useState(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWordInput(event.target.value);
    };
    const handleFetch = () => {
        dictionaryapi(wordInput);
    };
    const dictionaryapi = async (word: string) => {
        try {
          const response = await fetch( 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word );
          const jsonData = await response.json();
          setData(jsonData[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
  return (
    <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
            <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
                value={wordInput}
                onChange={handleInputChange}
            />
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={handleFetch}
            >
                Search
            </button>
            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                Cancel
            </button>

            {data && (
                <div>
                    <h2>{data.word}</h2>
                    <p>Phonetic: {data.phonetic}</p>
                    <h3>Meanings:</h3>
                    {data.meanings.map((meaning, index) => (
                        <div key={index}>
                            <p>Part of Speech: {meaning.partOfSpeech}</p>
                            <ul>
                                {meaning.definitions.map((definition, index) => (
                                    <li key={index}>
                                        Definition: {definition.definition}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

        </div>
    </form>
  );
}
