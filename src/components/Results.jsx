import { Sparkles, ArrowRight, Star, CheckCircle2 } from 'lucide-react'

export default function Results() {
  const bullets = [
    '4–7x reply rates vs. manual sequences',
    '30–50% faster time-to-meeting',
    'Automations live in 14 days',
    'ROI in first 90 days on average',
  ]

  return (
    <section id="results" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Sparkles className="h-4 w-4" />
            Outcomes you can measure
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">Results that compound</h2>
          <p className="mt-3 text-slate-300">We run experiments weekly and optimize messaging, targeting, and workflows. The output: more qualified conversations and cleaner pipeline.</p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /> {b}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors">
              See case studies
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="text-sm text-slate-400">Avg. across SMB and mid-market customers</div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Meetings booked', value: '213', delta: '+42%' },
                { label: 'Reply rate', value: '11.8%', delta: '+5.3%' },
                { label: 'Leads qualified', value: '681', delta: '+36%' },
                { label: 'Time saved', value: '1,240h', delta: '-57%' },
              ].map((c) => (
                <div key={c.label} className="rounded-xl bg-slate-950/60 p-5 border border-white/10">
                  <div className="text-slate-400 text-sm">{c.label}</div>
                  <div className="mt-1 text-white text-2xl font-semibold">{c.value}</div>
                  <div className="mt-1 text-emerald-400 text-sm">{c.delta}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-amber-400/20 p-4 border border-white/10">
              <div className="flex items-center gap-2 text-white">
                <Star className="h-4 w-4 text-amber-300" /> 4.9/5 average customer rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
