import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient, ErrorResponse, Photo, PhotosWithTotalResults } from 'pexels';

interface SearchResult {
    photos: Photo[];
}

type ResponseData = {
    data: SearchResult | ErrorResponse;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    console.log(process.env.NEXTAUTH_URL);
    
    // Check if PEXELS_API_KEY is defined
    if (!process.env.PEXELS_API_KEY) {
        return res.status(500).json({ data: { error: 'PEXELS_API_KEY is not defined' } });
    } else {
        console.log('API Logged In Successfully!');
    }

    const query = req.query.q as string; // Assuming the query parameter is named 'q'

    const client = createClient(process.env.PEXELS_API_KEY as string);

    try {
        const response = await client.photos.search({ query, per_page: 1 });

        if ('photos' in response) {
            // Success case
            const data: SearchResult = { photos: response.photos };
            return res.status(200).json({ data });
        } else {
            // Error case
            return res.status(500).json({ data: { error: getErrorMessage(response) } });
        }
    } catch (error) {
        console.error('Error searching photos:', error);
        return res.status(500).json({ data: { error: 'Internal server error' } });
    }
}

function getErrorMessage(response: PhotosWithTotalResults | ErrorResponse): string {
    if ('error' in response) {
        return response.error;
    }
    return 'Unknown error';
}