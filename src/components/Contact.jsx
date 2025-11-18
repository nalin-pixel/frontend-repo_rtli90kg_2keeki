import { useState } from 'react'
import { Mail, Building2, User, Link2, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name')?.toString() || '',
      email: form.get('email')?.toString() || '',
      company: form.get('company')?.toString() || undefined,
      website: form.get('website')?.toString() || undefined,
      message: form.get('message')?.toString() || undefined,
      source: 'website',
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)

      const data = await res.json()
      if (data?.status === 'success') {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        throw new Error('Unexpected response')
      }
    } catch (err) {
      setStatus('error')
      setError(err?.message || 'Something went wrong')
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-slate-300">Tell us about your team and goals. We’ll follow up with a tailored plan and a time to chat.</p>
          <ul className="mt-6 text-slate-200 space-y-2 text-sm list-disc pl-5">
            <li>Response within 1 business day</li>
            <li>SOC2 & DPA available on request</li>
            <li>We work with Salesforce and HubSpot</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-300 text-sm">Name</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-3">
                <User className="h-4 w-4 text-slate-400" />
                <input name="name" required placeholder="Jane Smith" className="w-full bg-transparent py-3 text-white placeholder:text-slate-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="text-slate-300 text-sm">Work email</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <input type="email" name="email" required placeholder="jane@company.com" className="w-full bg-transparent py-3 text-white placeholder:text-slate-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="text-slate-300 text-sm">Company</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-3">
                <Building2 className="h-4 w-4 text-slate-400" />
                <input name="company" placeholder="Acme Inc." className="w-full bg-transparent py-3 text-white placeholder:text-slate-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="text-slate-300 text-sm">Website</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-3">
                <Link2 className="h-4 w-4 text-slate-400" />
                <input name="website" placeholder="https://company.com" className="w-full bg-transparent py-3 text-white placeholder:text-slate-500 focus:outline-none" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-slate-300 text-sm">Message</label>
            <textarea name="message" rows="4" placeholder="What are you hoping to automate?" className="mt-1.5 w-full rounded-xl bg-slate-950/60 border border-white/10 px-3 py-3 text-white placeholder:text-slate-500 focus:outline-none" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button disabled={status==='submitting'} className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors disabled:opacity-60">
              {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Submit
            </button>
            {status === 'success' && (
              <div className="inline-flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle2 className="h-4 w-4" />
                Thanks! We’ll be in touch shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="inline-flex items-center gap-2 text-amber-300 text-sm">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
