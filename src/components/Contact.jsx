import { Mail, User } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name}. We received your message and will reply soon!`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow ring-1 ring-slate-200">
            <Mail className="h-3.5 w-3.5 text-indigo-500" />
            <span className="font-medium">Contact</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Say hello</h2>
          <p className="mt-3 text-slate-600">Questions about pricing, features or integrations? We'd love to chat.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3">
                  <User className="h-4 w-4 text-slate-400" />
                  <input name="name" required autoComplete="name" placeholder="Jane Doe" className="w-full border-0 bg-transparent py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" required rows={4} placeholder="Tell us a little about your project: timeline, goals, and budget." className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600">
              Send message
            </button>
            {status && (
              <div className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 ring-1 ring-emerald-100">
                {status}
              </div>
            )}
          </form>

          <div className="rounded-2xl bg-gradient-to-b from-indigo-50 to-white p-8 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">We're here to help</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Prefer email? Reach us at <a className="font-medium text-indigo-600" href="mailto:hello@example.com">hello@example.com</a>.
              We typically respond within one business day.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-medium">Hours:</span> Mon–Fri, 9am–6pm
              </li>
              <li>
                <span className="font-medium">Office:</span> Remote‑first, worldwide
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
