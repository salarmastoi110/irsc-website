import { resources } from '../data'
import { PageHeader } from '../components/ui.jsx'

export default function Resources() {
  return (
    <>
      <PageHeader title="Resources" text="Guides, tools and data to help you do better research." />
      <section className="section wrap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((g) => (
          <article key={g.group} className="card">
            <h2 className="text-xl font-semibold">{g.group}</h2>
            <ul className="mt-3 space-y-2 text-sm">{g.items.map((i) => <li key={i} className="border-t border-line pt-2 first:border-0 first:pt-0">{i}</li>)}</ul>
          </article>
        ))}
      </section>
    </>
  )
}
