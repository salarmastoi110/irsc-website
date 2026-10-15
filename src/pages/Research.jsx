import { useState } from 'react'
import { areas, projects, publications, scholars } from '../data'
import { PageHeader, Filter, ProjectCard, ScholarCard, SectionHeading } from '../components/ui.jsx'

export default function Research() {
  const [area, setArea] = useState('All')
  const shown = projects.filter((p) => area === 'All' || p.area === area)
  return (
    <>
      <PageHeader title="Research" text="Projects, publications and scholars across six focus areas." />
      <section className="section wrap">
        <SectionHeading title="Research projects" />
        <Filter options={areas.map((a) => a.name)} value={area} onChange={setArea} />
        {shown.length ? <div className="grid gap-5 md:grid-cols-2">{shown.map((p) => <ProjectCard key={p.id} p={p} />)}</div>
          : <p className="text-ink/70">No projects in this area yet. Choose another area or check back soon.</p>}
      </section>
      <section className="section bg-mist">
        <div className="wrap">
          <SectionHeading title="Recent publications" />
          <ul className="divide-y divide-line rounded-lg border border-line bg-white">
            {publications.map((p) => (
              <li key={p.id} className="p-5"><h3 className="font-serif text-lg font-semibold text-navy">{p.title}</h3><p className="mt-1 text-sm text-ink/70">{p.authors} · {p.venue} · {p.year}</p></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading title="Featured scholars" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{scholars.slice(0, 3).map((s) => <ScholarCard key={s.id} s={s} />)}</div>
      </section>
    </>
  )
}
