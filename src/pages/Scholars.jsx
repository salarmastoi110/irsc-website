import { useState } from 'react'
import { Search } from 'lucide-react'
import { scholars } from '../data'
import { PageHeader, ScholarCard } from '../components/ui.jsx'

export default function Scholars() {
  const [q, setQ] = useState('')
  const term = q.trim().toLowerCase()
  const shown = scholars.filter((s) => !term || [s.name, s.country, s.area, ...s.interests].join(' ').toLowerCase().includes(term))
  return (
    <>
      <PageHeader title="Scholars" text="Find researchers by name, country or interest." />
      <section className="section wrap">
        <label className="relative mb-8 block max-w-md">
          <span className="sr-only">Search scholars</span>
          <Search className="absolute left-3 top-3 h-5 w-5 text-ink/50" aria-hidden />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search scholars" className="w-full rounded-md border border-line py-2.5 pl-10 pr-3" />
        </label>
        {shown.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map((s) => <ScholarCard key={s.id} s={s} />)}</div>
          : <p className="text-ink/70">No scholars match "{q}". Try a different name, country or topic.</p>}
      </section>
    </>
  )
}
