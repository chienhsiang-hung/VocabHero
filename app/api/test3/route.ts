export async function GET(request: Request) {
    console.log('Called successfully!');
    return new Response('Called successfully!', {
        status: 200,
    });
}