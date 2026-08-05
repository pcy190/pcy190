import { findingGroups } from '@/lib/profile';

const heavy = new Set(['Critical', 'High']);

const FindingsIndex = () => {
  return (
    <div className="space-y-9">
      {findingGroups.map((group) => (
        <div key={group.product} className="index-group">
          <div className="index-head">
            <h3 className="index-product">{group.product}</h3>
            <span className="index-rule" aria-hidden="true" />
            <span className="index-count">
              {group.findings.length} {group.findings.length === 1 ? 'report' : 'reports'}
            </span>
          </div>

          {group.note && (
            <p className="text-[13px] leading-relaxed text-ink-3 doc-measure">{group.note}</p>
          )}

          <ul className="index-ids">
            {group.findings.map((finding) => (
              <li
                key={finding.id}
                className="index-id"
                data-weight={finding.severity && heavy.has(finding.severity) ? 'heavy' : undefined}
              >
                {finding.id}
                {finding.severity && <span className="index-sev">{finding.severity}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FindingsIndex;
