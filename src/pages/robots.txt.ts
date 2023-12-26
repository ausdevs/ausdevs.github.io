import {
    SITE,
} from "@root/constants";

const template = `\
User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap-index.xml", SITE)}\
`;

export async function GET() {
    return new Response(template);
}
