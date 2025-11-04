import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E3FF] bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-indigo-500" />
            <span className="font-medium">Modern Fintech Starter</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Launch your SaaS with a calm, pastel vibe
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            A clean landing with pricing, simple auth entry points, a blog preview, and a friendly contact form. Designed for digital banking, e‑commerce and modern fintech brands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-600">
              Get Started
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
