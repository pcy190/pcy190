// Single source of truth for the research record.

export type Publication = {
  title: string;
  venue: string;
  venueShort: string;
  year: number;
  link: string;
};

export const publications: Publication[] = [
  {
    title:
      'Re-Evaluating EVMBench: Are AI Agents Ready for Smart Contract Security?',
    venue: 'Preprint',
    venueShort: 'arXiv',
    year: 2026,
    link: 'https://arxiv.org/abs/2603.10795',
  },
  {
    title:
      'Thought Is All You Need: Smart Contract Vulnerability Detection with Thought-Augmented Large Language Model',
    venue: 'ACM International Conference on the Foundations of Software Engineering',
    venueShort: 'ACM FSE',
    year: 2026,
    link: 'https://dl.acm.org/doi/10.1145/3808141',
  },
  {
    title:
      'Toss a Fault to BpfChecker: Revealing Implementation Flaws for eBPF runtimes with Differential Fuzzing',
    venue: 'ACM Conference on Computer and Communications Security',
    venueShort: 'ACM CCS',
    year: 2024,
    link: 'https://dl.acm.org/doi/10.1145/3658644.3690237',
  },
];

export const awards: string[] = [
  'Chrome VRP Top 20 Security Researcher, 2022 and 2024',
  'Google VRP Top 50 Researcher, 2022 to 2024',
];

export const links = {
  scholar: 'https://scholar.google.com/citations?hl=en&user=-aNzh9EAAAAJ',
  github: 'https://github.com/ret2happy',
  x: 'https://x.com/ret2happy',
  email: 'ret2happy@gmail.com',
};

// Served straight from Google Scholar. If Google ever stops serving it, save the
// image to public/avatar.jpg and change this to '/avatar.jpg'.
export const avatar =
  'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=-aNzh9EAAAAJ&citpid=2';

