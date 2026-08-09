import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { subjects, totalLessons } from "@/data/curriculum";
import { Logo } from "@/components/Logo";
import { Reveal, ZelligeOrnament } from "@/components/Motion";
import {
  ScrollProgress,
  AuroraField,
  ParticleField,
  ZelligeDraw,
  CountUp,
  TiltCard,
  Marquee,
} from "@/components/MotionFX";
import { SiteHeader, SiteFooter } from "@/components/Chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نُبوغ | دروس السنة الثالثة إعدادي بالمغرب" },
      {
        name: "description",
        content:
          "منصة نُبوغ التعليمية: جميع دروس السنة الثالثة إعدادي بالمغرب في الرياضيات والفيزياء وعلوم الحياة والأرض واللغات والاجتماعيات والتربية الإسلامية.",
      },
      { property: "og:title", content: "نُبوغ | دروس السنة الثالثة إعدادي" },
      {
        property: "og:description",
        content: "دروس كاملة ومنظمة لجميع مواد الثالثة إعدادي وفق المنهاج المغربي.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div dir="rtl" className="min-h-screen">
      <ScrollProgress />
      <SiteHeader />

      <section className="hero-bg relative overflow-hidden">
        <AuroraField />
        <div className="zellige-grid absolute inset-0" />
        <ParticleField />
        <div className="absolute left-1/2 top-10 flex -translate-x-1/2 justify-center">
          <ZelligeOrnament />
        </div>
        <ZelligeDraw className="pointer-events-none absolute left-1/2 top-4 h-[30rem] w-[30rem] -translate-x-1/2 opacity-40" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center">

          <motion.div
            className="mx-auto mb-8 w-fit"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo size={124} spin />
          </motion.div>

          <motion.h1
            className="text-5xl font-black leading-tight sm:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="shimmer-text">نُبوغ</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            كل دروس السنة الثالثة إعدادي، مادة بمادة ودرسا بدرس، بمحتوى كامل ومنظم وفق المنهاج
            المغربي.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              to="/mawad"
              className="gold-ring rounded-full bg-accent px-8 py-3 text-base font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              ابدأ التعلم الآن
            </Link>
            <a
              href="#mawad"
              className="rounded-full border border-border px-8 py-3 text-base font-semibold text-foreground transition-colors hover:border-accent"
            >
              تصفح المواد
            </a>
          </motion.div>

          <div className="mt-16 grid grid-cols-3 gap-4">
            {[
              { n: subjects.length, l: "مادة دراسية" },
              { n: totalLessons, l: "درسا كاملا" },
              { n: 3, l: "دورات السنة" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <div className="surface-card rounded-2xl px-4 py-6">
                  <div className="text-3xl font-black text-gold-gradient sm:text-4xl">{s.n}+</div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="mawad" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <h2 className="text-3xl font-black sm:text-4xl">المواد الدراسية</h2>
          <p className="mt-2 text-muted-foreground">اختر مادة لتصفح جميع دروسها.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link
                to="/mawad/$subject"
                params={{ subject: s.slug }}
                className="surface-card lift group flex h-full flex-col rounded-3xl p-6"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-accent">{s.name}</h3>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {s.lessons.length} دروس
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.tagline}
                </p>
                <span className="mt-5 text-xs tracking-widest text-accent/80">{s.latin}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
