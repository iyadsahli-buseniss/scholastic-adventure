import { createFileRoute, Link } from "@tanstack/react-router";
import { subjects, totalLessons } from "@/data/curriculum";
import { Reveal } from "@/components/Motion";
import { SiteHeader, SiteFooter } from "@/components/Chrome";

export const Route = createFileRoute("/mawad/")({
  head: () => ({
    meta: [
      { title: "المواد الدراسية | نُبوغ الثالثة إعدادي" },
      {
        name: "description",
        content:
          "لائحة كاملة لمواد السنة الثالثة إعدادي: الرياضيات، الفيزياء والكيمياء، علوم الحياة والأرض، العربية، الفرنسية، الإنجليزية، الاجتماعيات والتربية الإسلامية.",
      },
      { property: "og:title", content: "المواد الدراسية | نُبوغ" },
      {
        property: "og:description",
        content: "تصفح كل مواد الثالثة إعدادي ودروسها على منصة نُبوغ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SubjectsPage,
});

function SubjectsPage() {
  return (
    <div dir="rtl" className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h1 className="text-4xl font-black">المواد الدراسية</h1>
          <p className="mt-2 text-muted-foreground">
            {subjects.length} مواد و {totalLessons} درسا كاملا.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/mawad/$subject"
                params={{ subject: s.slug }}
                className="surface-card lift group flex h-full flex-col rounded-3xl p-6"
              >
                <h2 className="text-xl font-bold group-hover:text-accent">{s.name}</h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.tagline}</p>
                <span className="mt-5 text-xs tracking-widest text-accent/80">
                  {s.latin} · {s.lessons.length} دروس
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
