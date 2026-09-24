import type { ReactNode } from 'react'

export type IconName = 'home' | 'topics' | 'repeat' | 'book' | 'people' | 'arrow' | 'back' | 'check' | 'search' | 'clock' | 'eye' | 'hand' | 'close' | 'help'
const paths: Record<IconName, ReactNode> = {
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" /></>,
  topics: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
  repeat: <><path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5"/></>,
  book: <><path d="M12 5v16M3 4c4-1 6-1 9 1 3-2 5-2 9-1v15c-4-1-6-1-9 2-3-3-5-3-9-2Z"/></>,
  people: <><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2"/></>,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>, back: <path d="M20 12H4m6-6-6 6 6 6"/>,
  check: <path d="m5 12 4 4L19 6"/>, search: <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  eye: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,
  hand: <><path d="M8 13V6a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 4-3 7-7 7-3 0-5-2-7-5l-3-4a2 2 0 0 1 3-2l2 2Z"/></>,
  close: <path d="m6 6 12 12M6 18 18 6"/>, help: <><circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 0 1 6 1c0 2-3 2-3 4m0 3v.1"/></>,
}
export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export function Rainbow() {
  return <svg className="rainbow" viewBox="0 0 80 58" fill="none" strokeLinecap="round" aria-hidden="true"><path d="M9 49V36a31 31 0 0 1 62 0v13" stroke="#cb7a74" strokeWidth="8"/><path d="M21 49V36a19 19 0 0 1 38 0v13" stroke="#d7b168" strokeWidth="7"/><path d="M32 49V36a8 8 0 0 1 16 0v13" stroke="#779c91" strokeWidth="7"/></svg>
}

export function TopicArt({ topic, className = '' }: { topic: string; className?: string }) {
  return <svg className={`topic-art ${className}`} viewBox="0 0 120 120" fill="none" stroke="#174450" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {topic === 'colores' && <><path d="M60 18C33 17 15 37 18 63c3 25 27 41 49 35 17-5 3-19 14-23 9-4 23 1 23-16 0-23-21-39-44-41Z" fill="#f9f0d9"/><circle cx="40" cy="40" r="8" fill="#d68a82" stroke="none"/><circle cx="66" cy="33" r="8" fill="#d8b15e" stroke="none"/><circle cx="88" cy="50" r="8" fill="#86aea0" stroke="none"/><circle cx="31" cy="65" r="8" fill="#a3a3c9" stroke="none"/><path d="m53 84 39-50 7 5-38 51" fill="#d1a06d"/><path d="m53 84 8 6-11 9-5-1Z" fill="#759b89"/></>}
    {topic === 'dias' && <><rect x="24" y="24" width="74" height="74" rx="10" fill="#fffaf0" transform="rotate(-5 60 60)"/><path d="m22 46 74-6"/><path d="M40 15v18M77 12v18" strokeWidth="5" stroke="#739e95"/><rect x="38" y="59" width="16" height="16" rx="4" fill="#dcb666" stroke="none"/><path d="m64 59 17-1m-17 13 17-1m-42 16 15-1m10 0 17-1" stroke="#9db9b0"/></>}
    {topic === 'emociones' && <><path d="M60 98C41 86 18 67 20 46c2-25 30-29 40-8 12-23 40-16 41 7 1 22-21 42-41 53Z" fill="#dba2ac"/><path d="M43 56v6m32-6v6m-25 12q11 12 23-1"/><ellipse cx="35" cy="70" rx="6" ry="3" fill="#c67c8e" stroke="none"/><ellipse cx="83" cy="70" rx="6" ry="3" fill="#c67c8e" stroke="none"/></>}
    {topic === 'alimentos' && <><path d="M59 44c-38-17-47 20-29 44 9 13 21 13 30 8 12 5 22 3 31-10 17-27 5-58-32-42Z" fill="#d58b80"/><path d="M59 45q-1-18 7-24"/><path d="M64 28c3-18 21-15 24-13-1 17-16 19-24 13Z" fill="#83a187"/><path d="M37 54q-11 6-8 19" stroke="#f6d8be" strokeWidth="5"/></>}
    {topic === 'naturaleza' && <><path d="M30 88C14 58 49 22 99 18c0 44-21 80-61 75Z" fill="#8cac91"/><path d="M20 107 82 37m-39 45-3-24m20 5 24-2m-17-8-1-19"/><path d="m88 91 6 5m8-17 7 1" stroke="#d7ad5e"/></>}
    {topic === 'tree' && <><path d="m52 61-3 42h22l-5-42" fill="#c49a73"/><path d="M34 73c-22-1-24-31-5-38-2-22 25-32 39-18 20-8 37 10 30 28 19 17 2 39-17 33-10 10-24 9-33-1-5 2-10 1-14-4Z" fill="#8cac91"/><path d="M60 99V52m0 22L44 60m16 6 17-15"/><path d="M35 104h50" stroke="#a7bca0"/></>}
  </svg>
}

export function LearningArt({ adult = false }: { adult?: boolean }) {
  return <svg className="learning-art" viewBox="0 0 560 430" fill="none" aria-hidden="true">
    <path d="M81 82C147 14 264 38 337 43c90 6 149 55 153 141 3 73 36 124-41 163-82 41-159 38-240 28-82-10-150-18-158-95-8-78-27-139 30-198Z" fill="#dce9df"/>
    <path d="M70 300c109-32 264-13 415 6" stroke="#afc9b7" strokeWidth="2"/>
    <g stroke="#68776a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M356 250c-18-42-9-86 17-116m-10 74c29-9 40-25 38-48-23 0-39 19-38 48Zm-7-14c-26-9-43-25-36-46 21 1 35 20 36 46Z" fill="#86a990"/>
      <path d="M320 247h78l-11 69h-53Z" fill="#d99881"/><path d="M317 244h84v13h-84Z" fill="#e8b49d"/>
      <path d="M109 174c45-14 91-11 126 12 38-22 80-15 119-1l-11 127c-45-20-77-22-111-2-36-23-79-18-126-4Z" fill="#7e9b90"/>
      <path d="M112 162c50-17 90-9 125 13 34-20 74-22 110-7l-8 130c-36-15-70-17-105 3-38-20-79-21-128-7Z" fill="#fffaf0"/>
      <path d="m237 175-3 126" stroke="#d4cdb9"/>
      <path d="m126 182 5 93m16-77 64 5m-63 78 62 3" stroke="#e6ddc8"/>
      <path d="m262 254 54 3m-54 16 41 2" stroke="#c1cec0"/>
      <text x="267" y="238" fontFamily="Nunito, sans-serif" fontSize="39" fontWeight="700" fill="#b87f72" stroke="none">Aa</text>
      <path d="M148 240c-6-27 25-38 51-39-1 32-17 48-41 46Z" fill="#91ae89"/><path d="m143 263 40-45"/>
    </g>
    <g transform="rotate(-10 146 103)"><rect x="88" y="68" width="115" height="63" rx="14" fill="#f3d99c"/><text x="145" y="109" textAnchor="middle" fontFamily="Nunito, sans-serif" fontSize="27" fontWeight="800" fill="#535b4f">{adult ? 'hello.' : 'hello!'}</text><path d="m127 131-6 13 29-13" fill="#f3d99c"/></g>
    <g transform="rotate(9 393 80)"><path d="M366 95V74a27 27 0 0 1 54 0v21" stroke="#ca8b83" strokeWidth="8" strokeLinecap="round"/><path d="M378 95V74a15 15 0 0 1 30 0v21" stroke="#d9b566" strokeWidth="7" strokeLinecap="round"/></g>
    <path d="M76 143q-30-26-27-7t-28 6m459 80q27-19 32-1t26-8" stroke="#8ea89b" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="457" cy="128" r="5" fill="#d6b368"/><circle cx="462" cy="148" r="3" fill="#d6b368"/>
    <g transform="rotate(9 155 341)"><rect x="102" y="318" width="117" height="42" rx="4" fill="#eadbd0"/><path d="M112 335h96m-96 9h80" stroke="#c8aa94" strokeWidth="2"/></g>
    <path d="m422 337 12-15 4 19 19 5-18 8-3 19-12-15-19 3 10-17-7-16Z" fill="#a5a1c0"/>
    <text x="278" y="376" fontFamily="Nunito, sans-serif" fontSize="16" fill="#637c6b" transform="rotate(-3 278 376)">{adult ? 'English, every day.' : 'Aprender está en todas partes.'}</text>
  </svg>
}
