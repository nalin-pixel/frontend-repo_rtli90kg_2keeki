import { Cpu, PlugZap, MessagesSquare, LineChart } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Cpu,
      title: 'Discover',
      desc: 'We align on ICP, messaging, goals, and success metrics in a 60‑minute session.'
    },
    {
      icon: PlugZap,
      title: 'Integrate',
      desc: 'Connect your CRM, calendar, comms, and data sources. Zero heavy lifting on your side.'
    },
    {
      icon: MessagesSquare,
      title: 'Deploy',
      desc: 'Launch AI agents and workflows. We QA on sandbox, then go live within 14 days.'
    },
    {
      icon: LineChart,
      title: 'Optimize',
      desc: 'Weekly experiments and reporting to compound reply rates and meeting volume.'
    },
  ]

  return (
    <section id="how" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">How it works</h2>
          <p className="mt-3 text-slate-300">From kickoff to lift‑off in two weeks.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 p-[2px]">
                  <div className="h-full w-full rounded-[10px] bg-slate-950/90 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-slate-400">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{s.title}</h3>
              <p className="mt-1.5 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
