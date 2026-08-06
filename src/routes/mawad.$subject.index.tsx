import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSubject, type Subject } from "@/data/curriculum";
import { Reveal } from "@/components/Motion";
import { SiteHeader, SiteFooter } from "@/components/Chrome";

export const Route = createFileRoute("/mawad/$subject/")({
  loader: ({ params }) => {
    const subject = getSubject(params.subject);
    if (!subject) throw notFound();
    return { subject };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "المادة غير متوفرة | نُبوغ" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.subject;
    const title = `${s.name} — دروس الثالثة إعدادي | نُبوغ`;
    const description = `${s.tagline}. ${s.lessons.length} دروس كاملة في مادة ${s.name} للسنة الثالثة إعدادي.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SubjectPage,
});

function SubjectPage() {
  const { subject } = Route.useLoaderData() as { subject: Subject };

  const units: string[] = Array.from(new Set(subject.lessons.map((l) => l.unit)));

  return (
    <div dir="rtl" className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-14">
        <Reveal>
          <Link to="/mawad" className="text-sm text-muted-foreground hover:text-accent">
            ← كل المواد
          </Link>
          <h1 className="mt-4 text-4xl font-black text-gold-gradient">{subject.name}</h1>
          <p className="mt-2 text-muted-foreground">{subject.tagline}</p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {units.map((unit) => (
            <section key={unit}>
              <h2 className="mb-4 flex items-center gap-3 text-lg font-bold">
                <span className="h-px flex-1 bg-border" />
                <span className="text-accent">{unit}</span>
                <span className="h-px flex-1 bg-border" />
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {subject.lessons
                  .filter((l) => l.unit === unit)
                  .map((l, i) => (
                    <Reveal key={l.slug} delay={i * 0.05}>
                      <Link
                        to="/mawad/$subject/$lesson"
                        params={{ subject: subject.slug, lesson: l.slug }}
                        className="surface-card lift group block h-full rounded-2xl p-5"
                      >
                        <h3 className="font-bold group-hover:text-accent">{l.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {l.summary}
                        </p>
                        <span className="mt-4 block text-xs text-accent/70">{l.duration}</span>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
