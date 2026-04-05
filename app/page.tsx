'use client'

import { useState } from 'react'

const features = [
  {
    icon: '📅',
    title: 'Calendly Webhook Trigger',
    description:
      'The moment a booking is confirmed, FollowupFlow registers the call and sets a timer for 10 minutes after the scheduled end time.',
  },
  {
    icon: '⏱️',
    title: 'Smart 10-Minute Wait',
    description:
      'The workflow pauses precisely until the call ends, then waits a further 10 minutes — giving the rep time to wrap up before the follow-up fires.',
  },
  {
    icon: '✉️',
    title: 'Personalised Gmail Follow-up',
    description:
      "A warm, branded follow-up email lands in the attendee's inbox with next steps outlined — sent automatically while the rep moves to their next call.",
  },
  {
    icon: '✅',
    title: 'ClickUp Task Logged',
    description:
      'The related ClickUp task is updated with a call log, timestamp, and next steps — keeping the CRM clean without anyone touching it manually.',
  },
  {
    icon: '💬',
    title: 'Slack Team Notification',
    description:
      'A Slack message hits the sales channel with the call summary and action items — so the whole team stays in sync between meetings.',
  },
  {
    icon: '🔁',
    title: 'Runs on Every Call',
    description:
      'No setup per meeting needed. Every Calendly booking automatically enrolls in the sequence — zero manual intervention, ever.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Calendly booking confirmed',
    description:
      "When a prospect books a call, Calendly fires a webhook to FollowupFlow with the attendee's details and scheduled time.",
  },
  {
    number: '02',
    title: 'Workflow waits for call to end',
    description:
      'The sequence pauses until 10 minutes after the call end time — calculated automatically from the booking data. No cron jobs, no polling.',
  },
  {
    number: '03',
    title: 'Everything fires at once',
    description:
      'Gmail follow-up sent, ClickUp task updated with call log, Slack notification posted — the entire post-call admin done in one automated burst.',
  },
]

const testimonials = [
  {
    quote: "I used to spend the first 30 minutes after every call writing follow-up emails. FollowupFlow sends them automatically while I'm already in the next meeting.",
    name: "Marcus Bell",
    role: "Account Executive",
    company: "Stratum Sales",
    avatar: "MB",
  },
  {
    quote: "Our ClickUp tasks were always out of date. Now every call is logged with a timestamp and next steps without anyone touching it. Pipeline hygiene has never been better.",
    name: "Aisha Oduya",
    role: "Sales Operations Lead",
    company: "Crestfield Partners",
    avatar: "AO",
  },
  {
    quote: "Response time matters in sales. FollowupFlow has our follow-up email in the client's inbox 10 minutes after every call. No human could be that consistent.",
    name: "Tom Hargreaves",
    role: "Managing Director",
    company: "BlueSky Advisors",
    avatar: "TH",
  },
]

const stats = [
  { value: '10 min', label: 'after call end — follow-up sent' },
  { value: '3 tools', label: 'updated in one automated sequence' },
  { value: '0 min', label: 'of manual post-call admin' },
  { value: '100%', label: 'of calls followed up, every time' },
]

const timeline = [
  { time: 'Booking confirmed', icon: '📅', color: 'bg-green-100 text-green-700', label: 'Calendly webhook fires' },
  { time: 'Call starts', icon: '📞', color: 'bg-gray-100 text-gray-500', label: 'Workflow is waiting...' },
  { time: 'Call ends', icon: '🏁', color: 'bg-gray-100 text-gray-500', label: 'Still waiting 10 min...' },
  { time: '+10 minutes', icon: '⚡', color: 'bg-green-100 text-green-700', label: 'Sequence fires' },
  { time: 'Immediately', icon: '✉️', color: 'bg-green-100 text-green-700', label: 'Gmail sent' },
  { time: 'Immediately', icon: '✅', color: 'bg-green-100 text-green-700', label: 'ClickUp updated' },
  { time: 'Immediately', icon: '💬', color: 'bg-green-100 text-green-700', label: 'Slack notified' },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-green-600 flex items-center justify-center text-white text-sm font-bold">
              F
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">FollowupFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Demo</a>
          </div>
          <a
            href="#get-started"
            className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/60 to-white pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Powered by n8n · Fires 10 min after every call
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Post-Call Follow-ups{' '}
            <span className="text-green-600">on Autopilot</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stay in back-to-back calls without losing momentum. When a Calendly
            call ends, FollowupFlow waits 10 minutes then handles the entire
            post-call sequence — email, ClickUp, Slack — automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#get-started"
              className="bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-green-700 transition-colors text-base shadow-md shadow-green-200"
            >
              Book a Demo
            </a>
            <a
              href="#how-it-works"
              className="bg-white text-gray-700 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-base"
            >
              See how it works →
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-green-600 mb-1">{s.value}</p>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Stay in back-to-back calls.<br />Never drop the ball.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            FollowupFlow handles everything that happens after a call ends —
            so your reps can focus on the next one.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 hover:border-green-100 hover:bg-green-50/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-base">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Book it. Run it. Done.
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Three steps. Zero manual work after the call.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="text-4xl font-extrabold text-green-100 mb-4">{step.number}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline visual */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Timeline — what happens and when</p>
            <div className="flex flex-col gap-3">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-28 text-right text-xs font-semibold text-gray-400 flex-shrink-0">{item.time}</div>
                  <div className="w-px h-8 bg-gray-200 flex-shrink-0" />
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Showcase ── */}
      <section id="showcase" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">Product Showcase</p>
          <h2 className="text-4xl font-extrabold text-gray-900">See FollowupFlow in Action</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            The full 9-node workflow — from booking confirmed to Slack notification — runs without any human input.
          </p>
          <a
            href="#get-started"
            className="inline-block mt-6 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors shadow-md shadow-green-200"
          >
            Book a Demo
          </a>
        </div>

        {/* Workflow diagram */}
        <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
          <div className="flex flex-col gap-3 min-w-max mx-auto w-fit">
            {/* Row 1 */}
            <div className="flex items-center gap-3">
              {[
                { icon: '📅', label: 'Calendly Webhook', sub: 'Booking confirmed' },
                { icon: '📋', label: 'Extract Booking', sub: 'Name, email, time' },
                { icon: '⏱️', label: 'Wait Node', sub: 'End time + 10 min' },
                { icon: '📝', label: 'Prepare Content', sub: 'Format messages' },
                { icon: '🔍', label: 'Search ClickUp', sub: 'Find task by name' },
              ].map((node, i, arr) => (
                <div key={node.label} className="flex items-center gap-3">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-center w-32">
                    <div className="text-xl mb-1">{node.icon}</div>
                    <div className="text-white text-xs font-semibold leading-tight">{node.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5 leading-tight">{node.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center gap-1 text-green-400">
                      <div className="w-5 h-px bg-green-500" />
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Arrow down */}
            <div className="flex justify-end pr-0 pl-[calc(4*11rem+4*2.75rem)]">
              <div className="flex flex-col items-center text-green-400">
                <div className="w-px h-4 bg-green-500" />
                <svg className="w-3 h-3 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </div>
            </div>
            {/* Row 2 — reversed */}
            <div className="flex items-center gap-3 flex-row-reverse">
              {[
                { icon: '💬', label: 'Slack Alert', sub: 'Team notified' },
                { icon: '✉️', label: 'Gmail Follow-up', sub: 'Sent to attendee' },
                { icon: '🔄', label: 'Update Task', sub: 'Status + priority' },
                { icon: '💬', label: 'Log Call', sub: 'Comment + next steps' },
              ].map((node, i, arr) => (
                <div key={node.label} className="flex items-center gap-3 flex-row-reverse">
                  <div className="bg-gray-800 border border-green-800/50 rounded-xl px-4 py-3 text-center w-32">
                    <div className="text-xl mb-1">{node.icon}</div>
                    <div className="text-white text-xs font-semibold leading-tight">{node.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5 leading-tight">{node.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center gap-1 text-green-400 flex-row-reverse">
                      <div className="w-5 h-px bg-green-500" />
                      <svg className="w-3 h-3 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            9 nodes · Fires automatically after every Calendly call · Zero manual steps
          </p>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Reps who never drop the ball</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Sales teams that replaced manual post-call admin with FollowupFlow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-12">
            <p className="text-center text-sm text-gray-400 font-medium mb-8">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {['Stratum Sales', 'Crestfield Partners', 'BlueSky Advisors', 'Apex Revenue', 'Meridian Group'].map((co) => (
                <span key={co} className="text-gray-300 font-bold text-lg tracking-tight">{co}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="get-started" className="py-24 bg-green-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Never miss a post-call follow-up again
          </h2>
          <p className="text-green-100 text-lg mb-10">
            Enter your email and we will set up FollowupFlow for your team —
            usually live and firing within 48 hours.
          </p>
          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-bold text-xl mb-1">You are on the list!</p>
              <p className="text-green-100 text-sm">We will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-green-600 font-bold px-6 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-sm disabled:opacity-70 whitespace-nowrap"
              >
                {loading ? 'Sending…' : 'Book a Demo'}
              </button>
            </form>
          )}
          <p className="text-green-200 text-xs mt-5">
            No credit card required · Setup included · Cancel anytime
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-white text-xs font-bold">F</div>
            <span className="text-white font-bold text-sm">FollowupFlow</span>
          </div>
          <p className="text-sm text-center">
            Where winning sales teams close the loop — automatically.
          </p>
          <p className="text-xs">© {new Date().getFullYear()} FollowupFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
