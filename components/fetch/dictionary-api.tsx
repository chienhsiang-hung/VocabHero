export const dictionaryApi = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
        const response = await fetch( 'https://api.dictionaryapi.dev/api/v2/entries/en/' + event.target.value );
        const jsonData = await response.json();

        console.log(jsonData);

        return (jsonData[0]);
        
      } catch (error) {
        console.error('Error fetching data:', error);
    };
};
