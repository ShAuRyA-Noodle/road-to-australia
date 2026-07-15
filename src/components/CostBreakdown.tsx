import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

export function CostBreakdown() {
  const { country } = useCountry();

  return (
    <section id="fees" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The money"
          title="Fees and total cost"
          lead={`Tentative, all-in. ${country.currencyNote}.`}
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="divide-y overflow-hidden rounded-[var(--radius)] border bg-[var(--color-surface)]">
            {country.costs.map((item, i) => (
              <Reveal key={item.label} delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div>
                    <div className="font-medium">{item.label}</div>
                    {item.sub && (
                      <div className="text-sm text-[var(--color-muted)]">{item.sub}</div>
                    )}
                  </div>
                  <div className="shrink-0 text-right font-display text-lg">{item.amount}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-[var(--radius)] border bg-[var(--color-accent-soft)] p-8 text-center">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Total, all-in
              </div>
              <div className="mt-3 font-display text-3xl leading-tight">{country.costTotal}</div>
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                Budget with a small buffer. A part-time job (see below) offsets living costs.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
