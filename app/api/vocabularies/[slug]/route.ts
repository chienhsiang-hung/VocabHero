export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug // 'a', 'b', or 'c'

    return new Response(params.slug, {
        status: 200,
    });
  }