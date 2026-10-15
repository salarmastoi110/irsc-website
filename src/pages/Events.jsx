import { useState } from 'react'
import { events } from '../data'
import { PageHeader, Filter, EventCard } from '../components/ui.jsx'

export default function Events() {
  const [type, setType] = useState('All')
  const shown = events.filter((e) => type === 'All' || e.type === type).sort((a, b) => a.date.localeCompare(b.date))
  return (
    <>
      <PageHeader title="Events" text="Conferences, webinars, workshops and seminars." />
      <section className="section wrap">
        <Filter options={['Conference', 'Webinar', 'Workshop', 'Seminar']} value={type} onChange={setType} />
        {shown.length ? <div className="grid gap-5 md:grid-cols-2">{shown.map((e) => <EventCard key={e.id} e={e} />)}</div>
          : <p className="text-ink/70">No {type.toLowerCase()} events are scheduled. Choose another type.</p>}
      </section>
    </>
  )
}
