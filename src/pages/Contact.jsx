import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { PageHeader } from '../components/ui.jsx'

// Static site: the form opens the visitor's email app. Replace with Formspree, Netlify Forms, etc. later.
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`)
    window.location.href = `mailto:info@irsc.example?subject=${encodeURIComponent('IRSC enquiry')}&body=${body}`
  }
  const field = 'mt-1 w-full rounded-md border border-line px-3 py-2.5'
  return (
    <>
      <PageHeader title="Contact" text="Ask a question or tell us you want to join." />
      <section className="section wrap grid gap-12 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-5">
          <label className="block text-sm font-medium">Name<input required className={field} value={f.name} onChange={set('name')} /></label>
          <label className="block text-sm font-medium">Email<input required type="email" className={field} value={f.email} onChange={set('email')} /></label>
          <label className="block text-sm font-medium">Message<textarea required rows={5} className={field} value={f.message} onChange={set('message')} /></label>
          <button className="btn btn-dark" type="submit">Send message</button>
        </form>
        <div className="space-y-4 text-sm">
          <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-teal" aria-hidden />info@irsc.example</p>
          <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-teal" aria-hidden />Online-first community with members worldwide</p>
        </div>
      </section>
    </>
  )
}
