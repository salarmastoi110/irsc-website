import { Link } from 'react-router-dom'
import { news } from '../data'
import { PageHeader, fmt } from '../components/ui.jsx'

export default function News() {
  return (
    <>
      <PageHeader title="News and updates" text="Announcements from the IRSC community." />
      <section className="section wrap max-w-3xl divide-y divide-line">
        {news.map((n) => (
          <article key={n.id} className="py-6 first:pt-0">
            <time className="text-sm text-ink/60" dateTime={n.date}>{fmt(n.date)}</time>
            <h2 className="mt-1 text-2xl font-semibold"><Link className="hover:text-blue" to={`/news/${n.id}`}>{n.title}</Link></h2>
            <p className="mt-2 text-ink/70">{n.summary}</p>
          </article>
        ))}
      </section>
    </>
  )
}
