// Single source of truth for the research record.

export const me = 'Chaoyuan Peng';

export type Publication = {
  title: string;
  authors: string[];
  venueShort: string;
  year: number;
  link: string;
};

export const publications: Publication[] = [
  {
    title: 'Re-Evaluating EVMBench: Are AI Agents Ready for Smart Contract Security?',
    authors: ['Chaoyuan Peng', 'Lei Wu', 'Yajin Zhou'],
    venueShort: 'arXiv',
    year: 2026,
    link: 'https://arxiv.org/abs/2603.10795',
  },
  {
    title:
      'Thought Is All You Need: Smart Contract Vulnerability Detection with Thought-Augmented Large Language Model',
    authors: ['Chaoyuan Peng', 'Muhui Jiang', 'Yajin Zhou', 'Lei Wu'],
    venueShort: 'ACM FSE',
    year: 2026,
    link: 'https://dl.acm.org/doi/10.1145/3808141',
  },
  {
    title:
      'Toss a Fault to BpfChecker: Revealing Implementation Flaws for eBPF runtimes with Differential Fuzzing',
    authors: ['Chaoyuan Peng', 'Muhui Jiang', 'Lei Wu', 'Yajin Zhou'],
    venueShort: 'ACM CCS',
    year: 2024,
    link: 'https://dl.acm.org/doi/10.1145/3658644.3690237',
  },
];

export const awards: string[] = [
  'Chrome VRP Top 20 Security Researcher, 2022 and 2024',
  'Google VRP Top 50 Researcher, 2022 to present',
];

export const links = {
  scholar: 'https://scholar.google.com/citations?hl=en&user=-aNzh9EAAAAJ',
  x: 'https://x.com/ret2happy',
  email: 'ret2happy@gmail.com',
};

// Vendored from the X profile photo. Replace public/avatar.jpg to update it.
export const avatar = '/avatar.jpg';
