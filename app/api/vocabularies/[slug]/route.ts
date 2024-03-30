import add from "./add";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug // 'a', 'b', or 'c'

    if (params.slug === 'a') {
        add();
    }

    return new Response(params.slug, {
        status: 200,
    });
  }