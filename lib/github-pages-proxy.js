// Cloudflare Pages Functions helper. Serves a GitHub Pages project site
// (matthew-marsicano.github.io/<repo>/) under matthewmarsicano.com/<repo>/,
// so those links keep working after the domain moves to Cloudflare.
// Only used on Cloudflare. GitHub Pages serves this file as plain text.

const ORIGIN = 'https://matthew-marsicano.github.io';

export async function proxyGitHubPages(request, prefix) {
  const url = new URL(request.url);

  if (url.pathname === prefix) {
    return Response.redirect(`${url.origin}${prefix}/${url.search}`, 301);
  }

  const upstream = await fetch(ORIGIN + url.pathname + url.search, {
    method: request.method === 'HEAD' ? 'HEAD' : 'GET',
    redirect: 'manual',
    cf: { cacheEverything: true, cacheTtl: 600 },
  });

  // GitHub adds trailing slashes with a redirect to its own host. Keep the
  // visitor on this domain instead.
  const location = upstream.headers.get('Location');
  if (location) {
    const target = new URL(location, ORIGIN);
    const headers = new Headers(upstream.headers);
    headers.set('Location', target.pathname + target.search);
    return new Response(null, { status: upstream.status, headers });
  }

  return upstream;
}
