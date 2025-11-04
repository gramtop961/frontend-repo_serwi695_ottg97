import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-xl bg-white/70 px-4 py-3 shadow-sm ring-1 ring-slate-200 backdrop-blur">
            <a href="#" className="text-base font-semibold tracking-tight">
              pastelpay
            </a>
            <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              <a href="#blog" className="hover:text-slate-900">Blog</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 sm:inline-flex">
                Sign in
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600">
                <User className="h-4 w-4" />
                Create account
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} pastelpay. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#contact" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
