import { motion } from "motion/react";
import { Flame, Minus, Plus, Check } from "@phosphor-icons/react";
import { currentStreak, todayKey, useLocalStorage } from "../lib/storage";
import { Reveal, SectionHead } from "./Reveal";

// The A2Z / pattern breakdown. Targets ~ Striver A2Z (~460 problems).
const TOPICS: { id: string; label: string; target: number }[] = [
  { id: "arrays", label: "Arrays", target: 40 },
  { id: "binsearch", label: "Binary Search", target: 30 },
  { id: "strings", label: "Strings", target: 15 },
  { id: "twoptr", label: "Two Pointer / Sliding Window", target: 20 },
  { id: "linkedlist", label: "Linked List", target: 30 },
  { id: "recursion", label: "Recursion & Backtracking", target: 25 },
  { id: "stacks", label: "Stacks & Queues", target: 25 },
  { id: "heaps", label: "Heaps / Priority Queue", target: 15 },
  { id: "greedy", label: "Greedy", target: 15 },
  { id: "trees", label: "Binary Trees", target: 40 },
  { id: "bst", label: "Binary Search Trees", target: 20 },
  { id: "graphs", label: "Graphs", target: 45 },
  { id: "dp", label: "Dynamic Programming", target: 55 },
  { id: "tries", label: "Tries", target: 10 },
  { id: "bits", label: "Bit Manipulation", target: 15 },
];

const TOTAL_TARGET = TOPICS.reduce((s, t) => s + t.target, 0);

type Counts = Record<string, number>;

export function DsaTracker() {
  const [counts, setCounts] = useLocalStorage<Counts>("rtg-dsa-topics", {});
  const [days, setDays] = useLocalStorage<string[]>("rtg-dsa-days", []);

  const markToday = () => {
    const t = todayKey();
    setDays((d) => (d.includes(t) ? d : [...d, t]));
  };

  const bump = (id: string, by: number, max: number) => {
    setCounts((p) => ({ ...p, [id]: Math.max(0, Math.min(max, (p[id] ?? 0) + by)) }));
    if (by > 0) markToday();
  };

  const solved = TOPICS.reduce((s, t) => s + (counts[t.id] ?? 0), 0);
  const pct = Math.round((solved / TOTAL_TARGET) * 100);
  const streak = currentStreak(days);
  const doneToday = days.includes(todayKey());

  return (
    <section id="grind" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The grind"
          title="DSA mastery, by topic"
          lead="Solve by hand, no AI. Log every problem. 12 months to LeetCode-fluent. This counter only moves when you actually solve."
        />

        {/* top summary */}
        <div className="mb-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[var(--radius)] border bg-[var(--color-surface)] p-7">
              <div className="flex flex-wrap items-end gap-x-3">
                <span className="font-display text-6xl leading-none text-[var(--color-accent)]">
                  {solved}
                </span>
                <span className="pb-1 text-[var(--color-muted)]">/ {TOTAL_TARGET} solved</span>
              </div>
              <div className="mt-5">
                <div className="mb-2 flex justify-between text-sm text-[var(--color-muted)]">
                  <span>Overall</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-[var(--color-line)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-accent)]"
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flex h-full flex-col justify-between rounded-[var(--radius)] border bg-[var(--color-surface)] p-7">
              <div className="flex items-center gap-3">
                <Flame weight="fill" size={28} className="text-[var(--color-accent)]" />
                <div>
                  <div className="font-display text-4xl leading-none">{streak}</div>
                  <div className="text-sm text-[var(--color-muted)]">day streak</div>
                </div>
              </div>
              <button
                onClick={markToday}
                disabled={doneToday}
                className={`mt-5 flex items-center justify-center gap-2 rounded-full py-3 font-medium transition-transform ${
                  doneToday
                    ? "border bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                    : "bg-[var(--color-accent)] text-white hover:-translate-y-0.5 active:scale-[0.98]"
                }`}
              >
                {doneToday ? (
                  <>
                    <Check weight="bold" size={18} /> Solved today
                  </>
                ) : (
                  "Mark today solved"
                )}
              </button>
            </div>
          </Reveal>
        </div>

        {/* topic grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t, i) => {
            const n = counts[t.id] ?? 0;
            const p = Math.round((n / t.target) * 100);
            const done = n >= t.target;
            return (
              <Reveal key={t.id} delay={Math.min(i * 0.03, 0.3)}>
                <div className="rounded-[var(--radius)] border bg-[var(--color-surface)] p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium">{t.label}</span>
                    {done && (
                      <span className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-xs font-medium text-[var(--color-accent)]">
                        done
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl leading-none">{n}</span>
                    <span className="text-sm text-[var(--color-muted)]">/ {t.target}</span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-[var(--color-line)]">
                    <motion.div
                      className="h-full rounded-full bg-[var(--color-accent)]"
                      animate={{ width: `${p}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() => bump(t.id, -1, t.target)}
                      aria-label="Remove one"
                      className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-[var(--color-accent)] active:scale-95"
                    >
                      <Minus weight="bold" size={16} />
                    </button>
                    <button
                      onClick={() => bump(t.id, 1, t.target)}
                      aria-label="Add one"
                      className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--color-accent)] text-sm font-medium text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <Plus weight="bold" size={16} /> Solved
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
