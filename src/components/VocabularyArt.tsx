import { TopicArt } from './Artwork'
import { colorHex } from '../data/lessons'
import { dayNumber, generatedVocabularyIllustration } from '../data/visuals'

function DayArt({ day }: { day: number }) {
  return <svg className="vocabulary-art day-art" viewBox="0 0 120 120" fill="none" stroke="#174450" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 31c0-7 6-13 13-13h50c7 0 13 6 13 13v62c0 7-6 13-13 13H35c-7 0-13-6-13-13Z" fill="#fffaf0"/>
    <path d="M22 43h76V31c0-7-6-13-13-13H35c-7 0-13 6-13 13Z" fill="#68b4a5"/>
    <path d="M39 12v15m42-15v15" strokeWidth="6"/>
    {Array.from({ length: day }, (_, index) => {
      const column = index % 3
      const row = Math.floor(index / 3)
      const colors = ['#ed1651', '#f7941e', '#ffcb05', '#7a9948', '#68b4a5', '#1a8c7d']
      return <circle key={index} cx={42 + column * 18} cy={66 + row * 20} r="6" fill={colors[index]}/>
    })}
  </svg>
}

/** Visual models are accompanied by text; they never replace accessible names. */
export function VocabularyArt({ word, unitId }: { word: string; unitId?: string }) {
  const generatedIllustration = generatedVocabularyIllustration(unitId, word)
  if (generatedIllustration) return <img className="vocabulary-art vocabulary-art-image" src={generatedIllustration} alt="" aria-hidden="true" decoding="async" loading="lazy"/>
  const ordinalDay = dayNumber(unitId, word)
  if (ordinalDay) return <DayArt day={ordinalDay}/>
  if (colorHex[word]) return <span className="vocabulary-color" style={{ backgroundColor: colorHex[word] }} aria-hidden="true"/>
  if (word === 'tree') return <TopicArt topic="tree"/>
  if (word === 'leaf') return <TopicArt topic="naturaleza"/>
  const feeling = ['happy', 'sad', 'angry', 'excited', 'surprised'].includes(word)
  const illustrated = feeling || ['sun', 'cloud', 'rain', 'flower', 'banana', 'milk', 'bread', 'egg'].includes(word)
  if (!illustrated) return <span className="vocabulary-word" lang="en">{word}</span>
  return <svg className="vocabulary-art" viewBox="0 0 120 120" fill="none" stroke="#174450" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {feeling && <><circle cx="60" cy="60" r="39" fill="#ffcb05"/><path d="M45 49v5m30-5v5"/>{word === 'happy' && <path d="M43 68q17 21 34 0"/>}{word === 'sad' && <path d="M45 80q15-19 30 0"/>}{word === 'angry' && <><path d="m38 39 14 5m16 0 14-5M46 79q14-10 28 0"/></>}{['excited', 'surprised'].includes(word) && <ellipse cx="60" cy="75" rx={word === 'excited' ? 13 : 8} ry="11" fill="#fff7e7"/>}</>}
    {word === 'sun' && <><circle cx="60" cy="60" r="25" fill="#ffcb05"/><path d="M60 11v12m0 74v12M11 60h12m74 0h12M25 25l9 9m52 52 9 9M25 95l9-9m52-52 9-9" stroke="#f7941e" strokeWidth="4"/></>}
    {['cloud', 'rain'].includes(word) && <><path d="M30 74c-24-2-23-31-3-35 0-31 47-36 56-9 30-6 37 42 7 44Z" fill="#9bded3"/>{word === 'rain' && <path d="m36 87-6 15m30-15-6 15m30-15-6 15" stroke="#1a8c7d" strokeWidth="4"/>}</>}
    {word === 'flower' && <><path d="M59 60v48m0-13c-24 1-29-15-28-20 20-3 28 10 28 20Zm0-10c21 1 30-11 30-18-20-1-28 10-30 18Z" fill="#7a9948"/><path d="M45 29c-6-26 33-26 29 0 26-10 39 22 13 30 11 27-25 40-31 14-21 18-42-12-21-26-17-16-4-33 10-18Z" fill="#ed1651"/><circle cx="60" cy="46" r="13" fill="#ffcb05"/></>}
  </svg>
}
