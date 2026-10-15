import { Link } from 'react-router-dom'
import { Globe2, Mail } from 'lucide-react'
import { navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-serif text-xl font-bold text-white"><Globe2 className="h-6 w-6 text-teal" aria-hidden /> IRSC</p>
          <p className="mt-3 max-w-xs text-sm">International Research Scholars Community. A global network connecting researchers and scholars.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => <li key={l.to}><Link className="hover:text-white" to={l.to}>{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-3 flex items-center gap-2 text-sm"><Mail className="h-4 w-4" aria-hidden /> info@irsc.example</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} International Research Scholars Community</p>
    </footer>
  )
}
