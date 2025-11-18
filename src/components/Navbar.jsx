import { useState } from 'react'
import { Menu, X, Bot, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'How it works', href: '#how' },
    { label: 'Results', href: '#results' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-950/90 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="text-white font-semibold text-lg">Nimbus Automations</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="text-slate-300 hover:text-white transition-colors">Book a demo</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">
            <PhoneCall className="h-4 w-4" />
            Talk to an expert
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-30 bg-slate-950/80 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg bg-white/10 text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-20 mx-6 rounded-2xl border border-white/10 bg-slate-900/90">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block text-slate-200 text-lg" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="#demo" className="text-slate-300">Book a demo</a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-medium px-4 py-2 rounded-lg">
                  <PhoneCall className="h-4 w-4" />
                  Talk to an expert
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
