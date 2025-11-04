import { Check, CreditCard, Shield } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: 'mo',
    description: 'For side projects and early ideas',
    highlights: ['Basic analytics', 'Email support', 'Community access'],
    accent: 'from-pink-200 to-pink-100',
  },
  {
    name: 'Growth',
    price: '$29',
    period: 'mo',
    description: 'Everything you need to scale',
    highlights: ['Advanced analytics', 'Priority support', 'API access'],
    featured: true,
    accent: 'from-indigo-200 to-indigo-100',
  },
  {
    name: 'Scale',
    price: '$79',
    period: 'mo',
    description: 'For teams and production workloads',
    highlights: ['Custom limits', 'SLA & SSO', 'Dedicated success'],
    accent: 'from-teal-200 to-teal-100',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 -z-[0] bg-gradient-to-b from-white via-indigo-50/40 to-white" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow ring-1 ring-slate-200">
            <CreditCard className="h-3.5 w-3.5 text-indigo-500" />
            <span className="font-medium">Simple pricing</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Fair plans for every stage
          </h2>
          <p className="mt-3 text-slate-600">
            Start free and grow with transparent pricing and no surprises.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md ${
                tier.featured ? 'ring-2 ring-indigo-300' : ''
              }`}
            >
              <div className={`rounded-xl bg-gradient-to-b ${tier.accent} p-4`}> 
                <div className="text-sm font-medium text-slate-700">{tier.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="text-slate-500">/{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              </div>

              <ul className="mt-6 space-y-2">
                {tier.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span className="text-sm">{h}</span>
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition ${
                tier.featured ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-slate-800 hover:bg-slate-900'
              }`}>
                Choose {tier.name}
              </button>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <Shield className="h-3.5 w-3.5" />
                <span>7‑day money‑back guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
