export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <svg className={`brand-logo ${compact ? 'brand-logo-compact' : ''}`} viewBox="0 0 520 230" role="img" aria-labelledby={compact ? 'brand-title-compact' : 'brand-title'}>
    <title id={compact ? 'brand-title-compact' : 'brand-title'}>Weaving with teachers</title>
    <path className="brand-cloud" d="M56 55C72 24 113 15 143 30c25-25 78-26 107-1 29-22 77-19 99 9 33-14 81 0 91 34 43 5 59 42 42 70 7 35-23 59-62 57-27 20-75 16-97 1-35 22-85 19-112-5-37 21-91 8-99-31-36-7-50-39-34-65-24-12-34-28-22-44Z"/>
    <text className="brand-word brand-weaving" x="260" y="105" textAnchor="middle">Weaving</text>
    <text className="brand-word brand-teachers" x="286" y="167" textAnchor="middle">with teachers</text>
    <path className="brand-smile" d="M102 142c27 54 96 70 148 35"/>
    <path className="brand-spark" d="m417 39 5-18m15 27 16-12m-7 31 19 2"/>
  </svg>
}

export function BrandMark() {
  return <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M9 34C10 17 28 8 40 18c13-3 22 8 17 19 1 13-16 22-26 14C17 55 7 46 9 34Z" fill="#f9e4eb"/>
    <path d="M17 34c8-14 18-19 31-17-4 16-13 25-27 27" fill="none" stroke="#1a8c7d" strokeWidth="5" strokeLinecap="round"/>
    <path d="M22 47c8 5 17 5 24 0" fill="none" stroke="#ed1651" strokeWidth="4" strokeLinecap="round"/>
  </svg>
}
