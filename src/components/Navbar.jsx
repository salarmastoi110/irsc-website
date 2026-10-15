import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Globe2 } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const link = ({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-teal' : 'text-ink hover:text-blue'}`
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-navy" onClick={() => setOpen(false)}>
          <Globe2 className="h-6 w-6 text-teal" aria-hidden /> IRSC
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} className={link}>{l.label}</NavLink>)}
          <Link to="/contact" className="btn btn-dark !py-2">Join us</Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-4 border-t border-line py-4 lg:hidden" aria-label="Mobile">
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} className={link} onClick={() => setOpen(false)}>{l.label}</NavLink>)}
          <Link to="/contact" className="btn btn-dark" onClick={() => setOpen(false)}>Join us</Link>
        </nav>
      )}
    </header>
  )
}
