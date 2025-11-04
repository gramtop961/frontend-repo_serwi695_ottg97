import { Newspaper } from 'lucide-react';

const posts = [
  {
    title: 'Designing calm fintech experiences',
    excerpt: 'How pastel palettes and generous whitespace can boost trust and clarity in financial products.',
    tag: 'Design',
    date: 'Oct 2025',
  },
  {
    title: 'From MVP to revenue in 30 days',
    excerpt: 'A practical checklist to validate, launch, and iterate your SaaS without burning out.',
    tag: 'Growth',
    date: 'Sep 2025',
  },
  {
    title: 'Security basics for indie founders',
    excerpt: 'Simple steps to keep customer data safe while you move fast.',
    tag: 'Security',
    date: 'Aug 2025',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow ring-1 ring-slate-200">
            <Newspaper className="h-3.5 w-3.5 text-indigo-500" />
            <span className="font-medium">From the blog</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Build with clarity</h2>
          <p className="mt-3 text-slate-600">
            Ideas, lessons and templates to help you ship faster and smarter.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-700">
                {post.tag}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-4 text-xs text-slate-500">{post.date}</div>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
