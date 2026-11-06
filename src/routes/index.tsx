import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { site, whatsappUrl } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.seo.title },
      { name: "description", content: site.seo.description },
      { property: "og:title", content: site.seo.title },
      { property: "og:description", content: site.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Section({ id, eyebrow, title, children, surface }: { id: string; eyebrow: string; title: string; children: ReactNode; surface?: boolean }) {
  return (
    <section id={id} className={`${surface ? "bg-surface" : ""} px-6 py-24 md:py-36`}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="h-px w-10 bg-foreground" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="reveal mb-16 max-w-2xl font-display text-4xl leading-tight md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Logo() {
  const { office } = site;
  return office.logo ? (
    <img src={office.logo} alt={office.name} className="h-8 w-auto" />
  ) : (
    <span className="font-display text-xl tracking-[0.2em]">{office.logoText}</span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#inicio"><Logo /></a>
        <nav className="hidden items-center gap-10 md:flex">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="border border-foreground px-5 py-2.5 text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background">Agendar</a>
        </nav>
        <button aria-label="Abrir menu" className="flex flex-col gap-1.5 md:hidden" onClick={() => setOpen(!open)}>
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="animate-rise flex flex-col border-t border-border bg-background px-6 py-6 md:hidden">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 font-display text-2xl">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Index() {
  useReveal();
  const { lawyer, contact, office, practiceAreas, social, colors } = site;
  const vars = {
    "--site-bg": colors.background,
    "--site-fg": colors.foreground,
    "--site-surface": colors.surface,
    "--site-muted": colors.muted,
    "--site-border": colors.border,
  } as CSSProperties;

  return (
    <div style={vars} className="bg-background text-foreground">
      <Header />

      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        <div aria-hidden className="pointer-events-none absolute right-[-10%] top-1/4 h-[28rem] w-[28rem] rotate-45 border border-border" />
        <div aria-hidden className="pointer-events-none absolute right-[5%] top-[35%] h-48 w-48 rotate-45 bg-surface" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="eyebrow animate-rise">{lawyer.oab}</p>
          <h1 className="animate-rise mt-8 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl" style={{ animationDelay: ".1s" }}>{lawyer.fullName}</h1>
          <p className="animate-rise mt-8 max-w-xl text-lg font-light text-muted-foreground" style={{ animationDelay: ".2s" }}>{lawyer.headline} {lawyer.intro}</p>
          <div className="animate-rise mt-12 flex flex-wrap gap-4" style={{ animationDelay: ".3s" }}>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="bg-foreground px-8 py-4 text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-85">Agende uma consulta</a>
            <a href="#atuacao" className="border border-border px-8 py-4 text-xs uppercase tracking-widest transition-colors hover:border-foreground">Áreas de atuação</a>
          </div>
        </div>
      </section>

      <Section id="sobre" eyebrow="Sobre" title={lawyer.fullName} surface>
        <div className="grid gap-16 md:grid-cols-[5fr_7fr]">
          <div className="reveal relative aspect-[4/5] bg-background">
            {lawyer.photo ? (
              <img src={lawyer.photo} alt={lawyer.fullName} loading="lazy" className="h-full w-full object-cover grayscale" />
            ) : (
              <div className="flex h-full items-center justify-center border border-border text-xs uppercase tracking-widest text-muted-foreground">[Foto do advogado]</div>
            )}
            <span aria-hidden className="absolute -bottom-4 -right-4 -z-0 h-24 w-24 border border-foreground" />
          </div>
          <div className="reveal">
            {lawyer.bio.map((p, i) => <p key={i} className="mb-6 text-lg font-light leading-relaxed text-muted-foreground">{p}</p>)}
            <dl className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {lawyer.highlights.map((h) => (
                <div key={h.label}><dt className="eyebrow">{h.label}</dt><dd className="mt-2">{h.value}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section id="atuacao" eyebrow="Áreas de atuação" title="Atuação jurídica com foco e profundidade.">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((a, i) => (
            <article key={a.title + i} className="reveal group bg-background p-10 transition-colors hover:bg-surface">
              <span className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-2xl">{a.title}</h3>
              <p className="mt-4 font-light leading-relaxed text-muted-foreground">{a.description}</p>
              <span className="mt-8 block h-px w-8 bg-foreground transition-all duration-500 group-hover:w-16" />
            </article>
          ))}
        </div>
      </Section>

      <Section id="contato" eyebrow="Contato" title="Converse com o escritório." surface>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="reveal space-y-3">
            <p className="eyebrow">Fale conosco</p>
            <a href={contact.phoneHref} className="block hover:underline">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="block hover:underline">{contact.email}</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="block hover:underline">WhatsApp</a>
          </div>
          <div className="reveal space-y-3">
            <p className="eyebrow">Endereço</p>
            <p>{contact.address}</p>
            <p className="text-muted-foreground">{contact.city}</p>
          </div>
          <div className="reveal space-y-3">
            <p className="eyebrow">Horários</p>
            {contact.hours.map((h) => (
              <p key={h.days}><span className="text-muted-foreground">{h.days}:</span> {h.time}</p>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-4"><Logo /><span>{lawyer.oab}</span></div>
          <div className="flex gap-6">
            {social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{s.label}</a>)}
          </div>
          <p>© {new Date().getFullYear()} {office.name}</p>
        </div>
      </footer>

      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
      </a>
    </div>
  );
}
