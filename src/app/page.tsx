import Link from 'next/link';
import FindingsIndex from '@/components/FindingsIndex';
import { getAllPostsMeta } from '@/lib/mdx';
import {
  avatar,
  awards,
  experience,
  findingGroups,
  links,
  publications,
  totalFindings,
} from '@/lib/profile';

const interests = [
  { area: 'Systems security', detail: 'eBPF runtimes, OS kernels, trusted execution environments' },
  { area: 'Program analysis', detail: 'differential fuzzing, coverage-guided fuzzing, crash triage' },
  { area: 'Browser security', detail: 'Chrome renderer and browser-process vulnerabilities' },
  { area: 'Blockchain security', detail: 'smart contracts, DeFi protocol design flaws' },
];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <div className="doc pb-24">
      {/* Profile ------------------------------------------------------- */}
      <section id="profile" className="scroll-mt-16 pt-16 md:pt-20">
        <div className="doc-row">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatar}
              alt="ret2happy"
              width={132}
              height={132}
              referrerPolicy="no-referrer"
              className="portrait"
            />
            <p className="doc-label mt-4">Zhejiang University</p>
          </div>
          <div>
            <h1 className="serif text-[26px] font-medium leading-tight tracking-[-0.01em]">
              ret2happy
            </h1>
            <p className="mono mt-2 text-[12px] uppercase tracking-[0.09em] text-ink-3">
              Ph.D. candidate · Computer security
            </p>

            <p className="thesis mt-9 doc-measure">
              I study how systems software fails under adversarial input, and build the tools that
              find those failures.
            </p>

            <div className="prose-note mt-7 space-y-4 doc-measure">
              <p>
                My work covers kernel eBPF runtimes, browser engines, and smart contracts. Most of
                it combines differential and coverage-guided fuzzing with reading the code paths a
                fuzzer will not reach on its own.
              </p>
              <p>
                Reports go to Google, the Android Security Team, and upstream maintainers. So far
                that is {totalFindings} CVEs and vendor-tracked bug IDs across{' '}
                {findingGroups.length} products.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <a className="link-meta" href={links.scholar} target="_blank" rel="noopener noreferrer">
                Google Scholar
              </a>
              <a className="link-meta" href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="link-meta" href={links.x} target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a className="link-meta" href={`mailto:${links.email}`}>
                {links.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research interests -------------------------------------------- */}
      <hr className="doc-divider mt-16" />
      <section className="pt-10">
        <div className="doc-row">
          <p className="doc-label">Interests</p>
          <dl className="space-y-3">
            {interests.map((item) => (
              <div key={item.area} className="sm:flex sm:gap-4">
                <dt className="text-[15px] font-medium text-ink sm:w-[168px] sm:shrink-0">
                  {item.area}
                </dt>
                <dd className="text-[15px] leading-relaxed text-ink-2">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Publications --------------------------------------------------- */}
      <hr className="doc-divider mt-14" />
      <section id="publications" className="scroll-mt-16 pt-10">
        <div className="doc-row">
          <p className="doc-label">Publications</p>
          <ol className="space-y-8">
            {publications.map((pub) => (
              <li key={pub.link}>
                <h2 className="section-title doc-measure">{pub.title}</h2>
                <p className="mono mt-2 text-[12px] text-ink-3">
                  {pub.venueShort} {pub.year} · {pub.venue}
                </p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  <a className="link-meta" href={pub.link} target="_blank" rel="noopener noreferrer">
                    Paper
                  </a>
                  {pub.codeLink && (
                    <a
                      className="link-meta"
                      href={pub.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Findings ------------------------------------------------------- */}
      <hr className="doc-divider mt-14" />
      <section id="findings" className="scroll-mt-16 pt-10">
        <div className="doc-row">
          <p className="doc-label">Findings</p>
          <div>
            <p className="prose-note doc-measure">
              Vulnerabilities I reported that vendors have since fixed. Android issues use the
              internal tracker ID where no CVE was assigned.
            </p>
            <div className="mt-9">
              <FindingsIndex />
            </div>
          </div>
        </div>
      </section>

      {/* Honours -------------------------------------------------------- */}
      <hr className="doc-divider mt-14" />
      <section className="pt-10">
        <div className="doc-row">
          <p className="doc-label">Awards</p>
          <ul className="space-y-3">
            {awards.map((award) => (
              <li key={award} className="text-[15px] leading-relaxed text-ink-2">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appointments --------------------------------------------------- */}
      <hr className="doc-divider mt-14" />
      <section id="about" className="scroll-mt-16 pt-10">
        <div className="doc-row">
          <p className="doc-label">Appointments</p>
          <ul className="space-y-5">
            {experience.map((item) => (
              <li key={item.org}>
                <p className="text-[15px] font-medium text-ink">{item.org}</p>
                <p className="text-[15px] leading-relaxed text-ink-2">
                  {item.role} · {item.focus}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Writing -------------------------------------------------------- */}
      <hr className="doc-divider mt-14" />
      <section id="writing" className="scroll-mt-16 pt-10">
        <div className="doc-row">
          <p className="doc-label">Writing</p>
          <div>
            {posts.length > 0 ? (
              <ul className="space-y-7">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <h2 className="section-title doc-measure group-hover:text-primary">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="mono mt-2 text-[12px] text-ink-3">
                      {formatDate(post.date)}
                      {post.readingTime ? ` · ${post.readingTime}` : ''}
                    </p>
                    <p className="prose-note mt-2 doc-measure">{post.excerpt}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="prose-note">No posts yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Contact -------------------------------------------------------- */}
      <hr className="doc-divider mt-14" />
      <section id="contact" className="scroll-mt-16 pt-10">
        <div className="doc-row">
          <p className="doc-label">Contact</p>
          <div>
            <p className="prose-note doc-measure">
              Email is the best way to reach me. I read every report, including the ones that turn
              out to be false positives.
            </p>
            <dl className="mt-6 space-y-3">
              <div className="sm:flex sm:gap-4">
                <dt className="mono text-[11px] uppercase tracking-[0.09em] text-ink-3 sm:w-[104px] sm:shrink-0 sm:pt-[3px]">
                  Email
                </dt>
                <dd>
                  <a className="link-underline text-[15px]" href={`mailto:${links.email}`}>
                    {links.email}
                  </a>
                </dd>
              </div>
              <div className="sm:flex sm:gap-4">
                <dt className="mono text-[11px] uppercase tracking-[0.09em] text-ink-3 sm:w-[104px] sm:shrink-0 sm:pt-[3px]">
                  Scholar
                </dt>
                <dd>
                  <a
                    className="link-underline text-[15px]"
                    href={links.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Scholar profile
                  </a>
                </dd>
              </div>
              <div className="sm:flex sm:gap-4">
                <dt className="mono text-[11px] uppercase tracking-[0.09em] text-ink-3 sm:w-[104px] sm:shrink-0 sm:pt-[3px]">
                  Code
                </dt>
                <dd>
                  <a
                    className="link-underline text-[15px]"
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/ret2happy
                  </a>
                </dd>
              </div>
              <div className="sm:flex sm:gap-4">
                <dt className="mono text-[11px] uppercase tracking-[0.09em] text-ink-3 sm:w-[104px] sm:shrink-0 sm:pt-[3px]">
                  X
                </dt>
                <dd>
                  <a
                    className="link-underline text-[15px]"
                    href={links.x}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ret2happy
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
