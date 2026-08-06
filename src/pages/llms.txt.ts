import type { APIRoute } from 'astro';
import { publications, awards, links } from '@/data/profile';

// Plain-text profile for LLM crawlers and AI search agents (llmstxt.org).
// Generated from the same data as the page, so it never drifts.
export const GET: APIRoute = () => {
  const pubs = publications
    .map((p) => {
      const authors = p.authors.join(', ');
      const venue = `${p.venueShort} ${p.year}`;
      const link = p.link ? ` ${p.link}` : '';
      // Titles that already end in punctuation (e.g. a "?") should not get a period.
      const sep = /[.?!]$/.test(p.title) ? '' : '.';
      return `- ${p.title}${sep} ${authors}. ${venue}.${link}`;
    })
    .join('\n');

  const awardsList = awards.map((a) => `- ${a}`).join('\n');

  const body = `# Chaoyuan Peng

> Ph.D. student at Zhejiang University working on AI for security, web3 security, browser security, and systems security.

Chaoyuan Peng (also known as ret2happy) is a Ph.D. student at Zhejiang University, under the supervision of Yajin Zhou (https://yajin.org/) and Lei Wu (https://leiwu.org/). He has uncovered more than 100 vulnerabilities in Chrome, more than 30 vulnerabilities in AOSP, and several critical vulnerabilities in mainstream blockchain clients. He is currently a research intern at Qwen, and previously interned at BlockSec, Ant Group, and GOSSIP. He was an Ethereum Protocol Fellow and a vice president of the ZJU Blockchain Association.

## Publications
${pubs}

## Awards
${awardsList}

## Links
- Google Scholar: ${links.scholar}
- X: ${links.x}
- Email: ${links.email}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
