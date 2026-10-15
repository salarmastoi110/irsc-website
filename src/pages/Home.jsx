import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import { stats, areas, projects, events, opportunities, testimonials } from '../data'
import { SectionHeading, EventCard, OpportunityCard, ProjectCard } from '../components/ui.jsx'

const more = (to, label) => <Link to={to} className="inline-flex items-center gap-1 text-sm font-semibold text-blue hover:underline">{label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-teal/30" aria-hidden />
        <div className="pointer-events-none absolute -right-8 top-12 h-64 w-64 rounded-full border border-blue/40" aria-hidden />
        <div className="wrap relative py-24 sm:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] !text-white sm:text-7xl">Empowering scholars. Advancing research.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">A global community connecting researchers, scholars and knowledge-driven innovators across 40 countries.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/research" className="btn btn-primary">Explore research</Link>
              <Link to="/contact" className="btn btn-ghost">Join the community</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-line bg-mist">
        <dl className="wrap grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}><dd className="font-serif text-3xl font-semibold text-navy">{s.value}</dd><dt className="text-sm text-ink/70">{s.label}</dt></div>
          ))}
        </dl>
      </section>

      <section className="section wrap">
        <SectionHeading title="Research focus areas" text="Six areas where IRSC members collaborate, publish and share data." action={more('/research', 'All research')} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => <article key={a.name} className="card border-l-4 border-l-teal"><h3 className="text-lg font-semibold">{a.name}</h3><p className="mt-2 text-sm text-ink/70">{a.text}</p></article>)}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHeading title="Featured research" action={more('/research', 'See projects')} />
          <div className="grid gap-5 md:grid-cols-2">{projects.slice(0, 2).map((p) => <ProjectCard key={p.id} p={p} />)}</div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading title="Upcoming events" action={more('/events', 'All events')} />
        <div className="grid gap-5 md:grid-cols-3">{events.slice(0, 3).map((e) => <EventCard key={e.id} e={e} />)}</div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHeading title="Open opportunities" text="Funding, placements and calls with current deadlines." action={more('/opportunities', 'All opportunities')} />
          <div className="grid gap-5 md:grid-cols-3">{opportunities.slice(0, 3).map((o) => <OpportunityCard key={o.id} o={o} />)}</div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading title="What members say" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card">
              <Quote className="h-6 w-6 text-teal" aria-hidden />
              <blockquote className="mt-3 text-sm leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm"><span className="font-semibold">{t.name}</span><br /><span className="text-ink/70">{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-center text-white">
        <div className="wrap">
          <h2 className="text-3xl font-semibold !text-white sm:text-4xl">Join the global research community</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/75">Membership is free for students and early-career researchers.</p>
          <Link to="/contact" className="btn btn-primary mt-7">Join IRSC</Link>
        </div>
      </section>
    </>
  )
}
