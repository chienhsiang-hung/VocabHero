import { createClient } from 'pexels';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('word') || '';

    const client = createClient(process.env.PEXELS_API_KEY!);
    const photos_object = await client.photos.search({query, per_page: 1});
    const photos_json = await JSON.parse(JSON.stringify(photos_object));

    console.log(
        "type: " + typeof(photos_json.photos[0].src.tiny)
    );
    console.log(
        "return: " + photos_json.photos[0].src.tiny
    )

    return new Response(photos_json.photos[0].src.tiny, {
        status: 200,
    });
}