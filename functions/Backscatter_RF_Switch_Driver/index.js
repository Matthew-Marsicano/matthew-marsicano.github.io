import { proxyGitHubPages } from '../../lib/github-pages-proxy.js';

export const onRequest = ({ request }) => proxyGitHubPages(request, '/Backscatter_RF_Switch_Driver');
