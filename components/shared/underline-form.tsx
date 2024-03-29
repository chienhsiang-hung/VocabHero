"use client";

import React, { useState, useEffect } from 'react';

export default function UnderlineForm() {
    interface ApiResponse {
        word: string;
        phonetic: string;
        meanings: {
            partOfSpeech: string;
            definitions: {
                definition: string;
                synonyms: string[];
                antonyms: string[];
            }[];
        }[];
    }

    const [searched_word, setSearched_word] = useState('');
    const [data, setData] = useState<ApiResponse | null>(null);
    const dictionaryapi = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearched_word(event.target.value);

        try {
          const response = await fetch( 'https://api.dictionaryapi.dev/api/v2/entries/en/' + event.target.value );
          const jsonData = await response.json();
          setData(jsonData[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        };
    };

    const pexels = async () => {
        try {
          const response = await fetch(
            '/api/pexels?' + new URLSearchParams({word: searched_word})
          );
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
                onChange={dictionaryapi}
            />
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={pexels}
            >
                Add
            </button>
        </div>

        {data && (
            <div>
                <h2>{data? data.word: "Loading..."}</h2>
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

    </form>
  );
}