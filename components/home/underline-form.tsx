"use client";

import React, { useState } from 'react';
import { dictionaryApi } from '../fetch/dictionary-api';
import { useSession } from 'next-auth/react';
import { useDemoModal } from './demo-modal';
import { HiMiniSpeakerWave } from "react-icons/hi2";

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
    const [data, setData] = useState<string | null>(null);
    const [word_audio, setWord_audio] = useState('');
    
    const handleSearchWord = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearched_word(event.target.value);

        const data_tmp = await dictionaryApi(event);
        if (data_tmp !== undefined) {
            setData(data_tmp.text_area);
            setWord_audio(data_tmp.audio);
        };
        console.log(data, data_tmp?.audio);
    }
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData(event.target.value);
    };
    const playAudio = () => {
        let audio_to_play = new Audio(word_audio);
        audio_to_play.play();
    }

    const [imgUrl, setimgUrl] = useState('');
    const [showImg, setImg] = useState(false);
    const pexels = async () => {
        try {
          const response = await fetch(
            '/api/pexels?' + new URLSearchParams({word: searched_word})
          );
          const imgUrl_tmp = await response.text();
          console.log("imgUrl="+imgUrl_tmp);
          setimgUrl(imgUrl_tmp);
          setImg(true);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    const {DemoModal, setShowDemoModal} = useDemoModal({
        title: "Sign In Required",
        description: "Please click the top right button to sign in to use the full utility of this app."
    });
    const {data: session} = useSession();
    function add() {
        console.log( session?.user?.email );
        if (session?.user?.email == undefined) {
            setShowDemoModal(true);
        } else {
            fetch('/api/vocabularies/a');
        }
    };
  return (
    <form className="w-full max-w-lg m-2">
        <div className="flex items-center border-b border-teal-500 m-2">
            <DemoModal />
            <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
                onChange={handleSearchWord}
            />
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mx-1"
                type="button"
                onClick={pexels}
            >
                Image
            </button>
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded ml-1 mr-2.5"
                type="button"
                onClick={add}
            >
                Add
            </button>
            <div style={{'cursor': 'pointer'}}>
                <HiMiniSpeakerWave className='text-teal-500' size={30} onClick={playAudio} />
            </div>
        </div>
        <textarea
            id = "message"
            className = "block p-2.5 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full h-48"
            placeholder = "The defination will be displayed here."
            value = {data||undefined}
            onChange = {handleChange}
        />
        <div className="flex justify-center m-2">
            {showImg && (
                <img
                    className="h-auto max-w-lg rounded-lg"
                    src={imgUrl}
                    alt="image for the word"
                />
            )}
        </div>


        {/* {data && (
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
        )} */}

    </form>
  );
}