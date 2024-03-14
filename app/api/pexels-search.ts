import { createClient, ErrorResponse, Photo, PhotosWithTotalResults } from 'pexels';

interface SearchResult {
    photos: Photo[];
}

export default async function PexelsSearch(query: string): Promise<SearchResult> {
    console.log(process.env.NEXTAUTH_URL)
    // Check if PEXELS_API_KEY is defined
    if (!process.env.PEXELS_API_KEY) {
      throw new Error('PEXELS_API_KEY is not defined');
    } else {
      console.log('API Logged In Successfully!');
    };

    const client = createClient(process.env.PEXELS_API_KEY as string);

    try {
        const response = await client.photos.search({ query, per_page: 1 });

        if ('photos' in response) {
            // Success case
            const data: SearchResult = { photos: response.photos };
            return data;
        } else {
            // Error case
            throw new Error(getErrorMessage(response));
        }
    } catch (error) {
        console.error('Error searching photos:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

function getErrorMessage(response: PhotosWithTotalResults | ErrorResponse): string {
    if ('error' in response) {
        return response.error;
    }
    return 'Unknown error';
}
