import { createClient } from 'pexels';

export async function GET(request: Request) {

    const client = createClient(process.env.PEXELS_API_KEY!);
    const query = 'Nature';
    const photos_object = await client.photos.search({query, per_page: 1});
    const photos_json = await JSON.parse(JSON.stringify(photos_object));

    console.log(photos_json.photos[0].src.tiny);

    return new Response(photos_json.photos[0].src.tiny, {
        status: 200,
    });
}