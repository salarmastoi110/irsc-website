import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="section wrap text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-ink/70">The page you opened does not exist or has moved.</p>
      <Link to="/" className="btn btn-dark mt-6">Go to home page</Link>
    </section>
  )
}
