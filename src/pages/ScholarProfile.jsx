import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { scholars } from '../data'
import NotFound from './NotFound.jsx'

export default function ScholarProfile() {
  const s = scholars.find((x) => x.id === useParams().id)
  if (!s) return <NotFound />
  return (
    <section className="section wrap max-w-3xl">
      <Link to="/scholars" className="inline-flex items-center gap-1 text-sm font-semibold text-blue"><ArrowLeft className="h-4 w-4" aria-hidden />All scholars</Link>
      <h1 className="mt-6 text-4xl font-bold">{s.name}</h1>
      <p className="mt-1 text-ink/70">{s.role} · {s.country}</p>
      <p className="mt-6 leading-relaxed">{s.bio}</p>
      <h2 className="mt-10 text-2xl font-semibold">Research interests</h2>
      <div className="mt-3 flex flex-wrap gap-2">{[s.area, ...s.interests].map((i) => <span key={i} className="tag">{i}</span>)}</div>
    </section>
  )
}
