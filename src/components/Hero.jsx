import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full opacity-60 blur-3xl bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),rgba(37,99,235,0.18)_45%,rgba(251,146,60,0.12)_70%,transparent_75%)]" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-40 blur-2xl bg-violet-500/30" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-2xl bg-amber-400/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live AI workflows for sales teams
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              AI Automations for Lead Generation and Workflow Optimization
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Launch AI agents that find, qualify, and nurture leads while streamlining your internal processes. We connect directly to your stack and start delivering results in days, not months.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors">
                Book a live demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors">
                See pricing
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                2-week pilot available
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                SOC2-ready infrastructure
              </div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-slate-900/30 overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
