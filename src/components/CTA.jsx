import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-amber-400/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Start with a 14‑day pilot</h3>
              <p className="mt-2 text-slate-300">We design, deploy, and validate one end‑to‑end automation inside your stack. If you don’t see value, you don’t pay.</p>
              <ul className="mt-4 text-slate-200 space-y-2 text-sm list-disc pl-5">
                <li>ICP + messaging workshop</li>
                <li>Agent + workflow setup</li>
                <li>CRM + calendar integrations</li>
                <li>Weekly reporting and optimizations</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-end">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors">
                <Calendar className="h-4 w-4" />
                Book a discovery call
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors">
                Download brochure
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
