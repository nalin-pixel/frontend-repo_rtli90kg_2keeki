import { Rocket, Handshake, Workflow, BarChart3, Settings, ShieldCheck } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Rocket,
      title: 'Outbound that scales',
      desc: 'Multi-channel outreach across email, LinkedIn, and voice. Personalized at scale with your ICP and product narrative.',
    },
    {
      icon: Handshake,
      title: 'Inbound that qualifies',
      desc: 'AI agents triage, qualify, and route inbound leads instantly, booking meetings directly on your calendar.',
    },
    {
      icon: Workflow,
      title: 'Ops that orchestrate',
      desc: 'Automations that clean, enrich, and sync CRM data while triggering the next best action across tools.',
    },
    {
      icon: BarChart3,
      title: 'Analytics that guide',
      desc: 'Dashboards that reveal pipeline gaps, reply reasons, and sequence performance to optimize your playbook.',
    },
    {
      icon: Settings,
      title: 'Integrations that click',
      desc: 'Native connectors with Salesforce, HubSpot, Slack, Notion, and more. Private APIs for anything custom.',
    },
    {
      icon: ShieldCheck,
      title: 'Security that scales',
      desc: 'Enterprise-grade auth, encryption, and audit trails. Data stays in your region with role-based access.',
    },
  ]

  return (
    <section id="solutions" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we automate</h2>
          <p className="mt-3 text-slate-300">Proven playbooks deployed as AI agents and workflows.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-950/90 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{item.title}</h3>
              <p className="mt-1.5 text-slate-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
