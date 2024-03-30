export const dictionaryApi = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
        const response = await fetch( 'https://api.dictionaryapi.dev/api/v2/entries/en/' + event.target.value );
        const jsonData = await response.json();
        const meanings = await jsonData[0].meanings;

        let text_area = '';
        meanings.forEach(function(meaning: { partOfSpeech: any; definitions: any;}) {
            if ("example" in meaning.definitions[0]) {
                text_area += `(${meaning.partOfSpeech}) ${meaning.definitions[0].definition}: ${meaning.definitions[0].example} `
            } else {
                text_area += `(${meaning.partOfSpeech}) ${meaning.definitions[0].definition} `
            };
            // I was trying to use &#10;&#13; to change a new line but failed
        });

        console.log(text_area);
        // return ({jsonData: jsonData[0], text_area: text_area});
        return (text_area);
      } catch (error) {
        console.error('Error fetching data:', error);
    };
};
