// Single source of truth for the research record, shared by the homepage and /research.

export type Publication = {
  title: string;
  venue: string;
  venueShort: string;
  year: number;
  link: string;
  codeLink?: string;
};

export type Finding = {
  id: string;
  severity?: 'Critical' | 'High' | 'Medium' | 'Moderate' | 'Low';
};

export type FindingGroup = {
  product: string;
  note?: string;
  findings: Finding[];
};

export const publications: Publication[] = [
  {
    title:
      'Toss a Fault to BpfChecker: Revealing Implementation Flaws for eBPF Runtimes via Differential Fuzzing',
    venue: 'ACM Conference on Computer and Communications Security',
    venueShort: 'ACM CCS',
    year: 2024,
    link: 'https://dl.acm.org/doi/10.1145/3658644.3690237',
  },
];

export const findingGroups: FindingGroup[] = [
  {
    product: 'Chrome',
    note: 'Renderer and browser-process issues reported through the Chrome VRP.',
    findings: [
      { id: 'CVE-2022-0603', severity: 'High' },
      { id: 'CVE-2022-4177', severity: 'High' },
      { id: 'CVE-2023-0134', severity: 'Medium' },
      { id: 'CVE-2023-0135', severity: 'Medium' },
      { id: 'CVE-2022-1484', severity: 'Medium' },
      { id: 'CVE-2021-30578', severity: 'Medium' },
    ],
  },
  {
    product: 'Android',
    note: 'Reported to the Android Security Team; tracked by internal bug ID.',
    findings: [
      { id: 'A181660091', severity: 'Critical' },
      { id: 'A181860042', severity: 'Critical' },
      { id: 'A181346957', severity: 'Critical' },
      { id: 'A181584626', severity: 'High' },
      { id: 'A179162665', severity: 'High' },
      { id: 'A181346550', severity: 'High' },
      { id: 'A180422331', severity: 'High' },
      { id: 'A180939982', severity: 'High' },
      { id: 'A178013330', severity: 'High' },
      { id: 'A182166925', severity: 'High' },
      { id: 'A181346545', severity: 'Moderate' },
      { id: 'A180939433', severity: 'Moderate' },
      { id: 'A181253633', severity: 'Moderate' },
      { id: 'A180421437', severity: 'Moderate' },
      { id: 'A180418995', severity: 'Moderate' },
      { id: 'A180420059', severity: 'Moderate' },
      { id: 'A180421035', severity: 'Moderate' },
      { id: 'A180421044', severity: 'Moderate' },
      { id: 'A180418662', severity: 'Moderate' },
      { id: 'A179161711', severity: 'Moderate' },
      { id: 'A179161657', severity: 'Moderate' },
      { id: 'A179162240', severity: 'Moderate' },
      { id: 'A181346915', severity: 'Moderate' },
      { id: 'A181347046', severity: 'Moderate' },
    ],
  },
  {
    product: 'ImageMagick',
    note: 'Memory-safety defects in image decoding paths.',
    findings: [
      { id: 'CVE-2021-20309' },
      { id: 'CVE-2021-20310' },
      { id: 'CVE-2021-20311' },
      { id: 'CVE-2021-20312' },
      { id: 'CVE-2021-20313' },
    ],
  },
  {
    product: 'Wireshark',
    note: 'Dissector crashes reachable from untrusted capture files.',
    findings: [{ id: 'CVE-2020-26575' }, { id: 'CVE-2020-28030' }],
  },
];

export const awards: string[] = [
  'Chrome VRP Top 20 Security Researcher, 2022 and 2024',
  'Google Top 50 Vulnerability Reward Program Researcher, 2022 to 2024',
];

export const experience = [
  {
    role: 'Security Research Intern',
    org: 'BlockSec',
    focus: 'Blockchain and DeFi security',
  },
  {
    role: 'Security Research Intern',
    org: 'Ant Group',
    focus: 'Trusted execution environment security',
  },
  {
    role: 'Security Research Intern',
    org: 'GOSSIP Lab, Shanghai Jiao Tong University',
    focus: 'Android platform security',
  },
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

export const totalFindings = findingGroups.reduce(
  (sum, group) => sum + group.findings.length,
  0,
);
