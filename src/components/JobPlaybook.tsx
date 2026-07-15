import { Briefcase } from "@phosphor-icons/react";
import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

export function JobPlaybook() {
  const { country } = useCountry();

  return (
    <section id="jobs" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="Cash flow"
          title="Landing a part-time job"
          lead="The step-by-step to earning while you study, and building experience that counts."
        />

        <div className="mx-auto max-w-3xl">
          {country.jobGuide.map((step, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.35)}>
              <div className="flex items-start gap-4 border-b py-4 last:border-b-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] font-display text-sm text-[var(--color-accent)]">
                  {i + 1}
                </span>
                <p className="pt-1">{step}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-3 rounded-[var(--radius)] border bg-[var(--color-accent-soft)] p-5">
              <Briefcase size={22} weight="duotone" className="shrink-0 text-[var(--color-accent)]" />
              <p className="text-sm">
                Aim for skilled, degree-related work. Cash jobs pay the rent, but skilled
                experience is what later turns into PR points.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
