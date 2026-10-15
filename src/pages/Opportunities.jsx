import { useState } from 'react'
import { opportunities } from '../data'
import { PageHeader, Filter, OpportunityCard } from '../components/ui.jsx'

export default function Opportunities() {
  const [type, setType] = useState('All')
  const types = [...new Set(opportunities.map((o) => o.type))]
  const shown = opportunities.filter((o) => type === 'All' || o.type === type).sort((a, b) => a.deadline.localeCompare(b.deadline))
  return (
    <>
      <PageHeader title="Opportunities" text="Scholarships, fellowships, internships, grants and calls for papers." />
      <section className="section wrap">
        <Filter options={types} value={type} onChange={setType} />
        <div className="grid gap-5 md:grid-cols-2">{shown.map((o) => <OpportunityCard key={o.id} o={o} />)}</div>
      </section>
    </>
  )
}
