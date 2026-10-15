import { PageHeader } from '../components/ui.jsx'

const values = [
  ['Openness', 'We share data, methods and results so others can build on them.'],
  ['Inclusion', 'Researchers from every country and career stage have a voice.'],
  ['Rigour', 'We value careful methods, honest reporting and constructive review.'],
  ['Generosity', 'Senior members mentor, and everyone credits contributors.'],
]
const team = [
  ['Prof. Li Wei', 'President'], ['Dr. Amina Rahman', 'Director of Programmes'], ['Dr. Sofia Marin', 'Editor-in-Chief'], ['Maya Patel', 'Student Representative'],
]

export default function About() {
  return (
    <>
      <PageHeader title="About IRSC" text="A community built by researchers, for researchers." />
      <section className="section wrap grid gap-10 md:grid-cols-2">
        <div><h2 className="text-3xl font-semibold">Mission</h2><p className="mt-3 leading-relaxed">To connect scholars worldwide, so good ideas can travel across borders, disciplines and career stages.</p></div>
        <div><h2 className="text-3xl font-semibold">Vision</h2><p className="mt-3 leading-relaxed">A research world where access to people, funding and knowledge does not depend on where you work.</p></div>
      </section>
      <section className="section bg-mist">
        <div className="wrap max-w-3xl">
          <h2 className="text-3xl font-semibold">Our story</h2>
          <p className="mt-3 leading-relaxed">IRSC began as a small online reading group for graduate students in four countries. As members invited colleagues, the group grew into a community that now runs events, shares datasets and funds early-career work.</p>
          <h2 className="mt-12 text-3xl font-semibold">Objectives</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>Build collaborations across institutions and countries.</li>
            <li>Make funding and publishing opportunities easy to find.</li>
            <li>Support early-career researchers with mentoring and training.</li>
            <li>Promote open and reproducible research.</li>
          </ul>
        </div>
      </section>
      <section className="section wrap">
        <h2 className="text-3xl font-semibold">Community values</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([t, d]) => <article key={t} className="card"><h3 className="text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></article>)}
        </div>
      </section>
      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="text-3xl font-semibold">Leadership team</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([n, r]) => <article key={n} className="card"><h3 className="font-semibold">{n}</h3><p className="text-sm text-ink/70">{r}</p></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
