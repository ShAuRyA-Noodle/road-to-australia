import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

export function PointsTable() {
  const { country } = useCountry();

  return (
    <section id="points" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The PR math"
          title="How the points add up"
          lead="Every factor that scores you for permanent residence. Stack them."
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-[var(--radius)] border bg-[var(--color-surface)]">
            {country.points.map((row, i) => (
              <Reveal key={row.factor} delay={Math.min(i * 0.04, 0.3)}>
                <div className="flex items-center justify-between gap-4 border-b px-6 py-4 last:border-b-0">
                  <span className="text-sm">{row.factor}</span>
                  <span className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 font-display text-sm text-[var(--color-accent)]">
                    {row.points}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-[var(--radius)] border bg-[var(--color-surface)] p-7">
              <p className="text-[var(--color-muted)]">{country.pointsNote}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
