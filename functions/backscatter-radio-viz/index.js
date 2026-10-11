import { proxyGitHubPages } from '../../lib/github-pages-proxy.js';

export const onRequest = ({ request }) => proxyGitHubPages(request, '/backscatter-radio-viz');
