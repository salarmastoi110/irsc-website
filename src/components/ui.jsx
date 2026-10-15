import { Link } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'

export const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

export function PageHeader({ title, text }) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="wrap">
        <h1 className="max-w-2xl text-4xl font-bold !text-white sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-xl text-lg text-white/75">{text}</p>}
      </div>
    </section>
  )
}

export function SectionHeading({ title, text, action }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        {text && <p className="mt-2 max-w-xl text-ink/70">{text}</p>}
      </div>
      {action}
    </div>
  )
}

export function Filter({ options, value, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter">
      {['All', ...options].map((o) => (
        <button key={o} onClick={() => onChange(o)} aria-pressed={value === o}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${value === o ? 'border-navy bg-navy text-white' : 'border-line hover:border-blue'}`}>{o}</button>
      ))}
    </div>
  )
}

export function EventCard({ e }) {
  return (
    <article className="card">
      <span className="tag">{e.type}</span>
      <h3 className="mt-3 text-xl font-semibold">{e.title}</h3>
      <p className="mt-2 text-sm text-ink/70">{e.text}</p>
      <p className="mt-4 flex items-center gap-2 text-sm"><Calendar className="h-4 w-4 text-teal" aria-hidden />{fmt(e.date)}</p>
      <p className="mt-1 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-teal" aria-hidden />{e.place}</p>
    </article>
  )
}

export function OpportunityCard({ o }) {
  return (
    <article className="card">
      <span className="tag">{o.type}</span>
      <h3 className="mt-3 text-xl font-semibold">{o.title}</h3>
      <p className="mt-2 text-sm text-ink/70">{o.text}</p>
      <p className="mt-4 text-sm"><span className="font-semibold">Deadline:</span> {fmt(o.deadline)} · {o.org}</p>
    </article>
  )
}

export function ScholarCard({ s }) {
  const initials = s.name.replace(/^(Dr\.|Prof\.)\s/, '').split(' ').map((p) => p[0]).join('')
  return (
    <Link to={`/scholars/${s.id}`} className="card block transition-colors hover:border-teal">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy font-serif text-lg font-semibold text-white" aria-hidden>{initials}</div>
      <h3 className="mt-4 text-xl font-semibold">{s.name}</h3>
      <p className="text-sm text-ink/70">{s.role} · {s.country}</p>
      <div className="mt-3 flex flex-wrap gap-2">{s.interests.map((i) => <span key={i} className="tag">{i}</span>)}</div>
    </Link>
  )
}

export function ProjectCard({ p }) {
  return (
    <article className="card">
      <span className="tag">{p.area}</span>
      <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
      <p className="mt-2 text-sm text-ink/70">{p.summary}</p>
      <p className="mt-4 text-sm text-ink/70">Led by {p.lead} · {p.year}</p>
    </article>
  )
}
