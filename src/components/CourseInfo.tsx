import { CalendarBlank, Clock, Books, GraduationCap } from "@phosphor-icons/react";
import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

export function CourseInfo() {
  const { country } = useCountry();
  const c = country.course;

  return (
    <section id="course" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The degree"
          title="Course and semesters"
          lead="What you study, when you can start, and how long it runs."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-5 rounded-[var(--radius)] border bg-[var(--color-surface)] p-7">
              <Row icon={<CalendarBlank size={20} weight="duotone" />} k="Intakes" v={c.intakes} />
              <Row icon={<Clock size={20} weight="duotone" />} k="Duration" v={c.duration} />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="h-full rounded-[var(--radius)] border bg-[var(--color-surface)] p-7">
              <div className="mb-4 flex items-center gap-2 text-[var(--color-accent)]">
                <GraduationCap size={20} weight="duotone" />
                <span className="text-sm font-medium uppercase tracking-[0.15em]">Structure</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {c.structure.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius)] border bg-[var(--color-surface)] p-7 md:col-span-2">
              <div className="mb-4 flex items-center gap-2 text-[var(--color-accent)]">
                <Books size={20} weight="duotone" />
                <span className="text-sm font-medium uppercase tracking-[0.15em]">What you study</span>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {c.study.map((s) => (
                  <span key={s} className="rounded-xl bg-[var(--color-bg)] px-4 py-3 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-2 text-[var(--color-accent)]">
        {icon}
        <span className="text-sm font-medium uppercase tracking-[0.15em]">{k}</span>
      </div>
      <p className="text-[var(--color-muted)]">{v}</p>
    </div>
  );
}
