import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

export function PrepGuide() {
  const { country } = useCountry();

  return (
    <section id="prepare" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="Get ready"
          title="How to prepare"
          lead="The work that actually moves the needle, in priority order."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {country.prep.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="flex h-full flex-col rounded-[var(--radius)] border bg-[var(--color-surface)] p-6">
                <span className="mb-3 font-display text-3xl text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted)]">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
