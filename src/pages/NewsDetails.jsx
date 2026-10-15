import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { news } from '../data'
import { fmt } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'

export default function NewsDetails() {
  const n = news.find((x) => x.id === useParams().id)
  if (!n) return <NotFound />
  return (
    <article className="section wrap max-w-3xl">
      <Link to="/news" className="inline-flex items-center gap-1 text-sm font-semibold text-blue"><ArrowLeft className="h-4 w-4" aria-hidden />All news</Link>
      <h1 className="mt-6 text-4xl font-bold">{n.title}</h1>
      <time className="mt-2 block text-sm text-ink/60" dateTime={n.date}>{fmt(n.date)}</time>
      <p className="mt-6 text-lg leading-relaxed">{n.body}</p>
    </article>
  )
}
