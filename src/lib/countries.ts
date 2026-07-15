import type { Ritual, Uni, CheckGroup, Milestone } from "./data";

export type CountryKey = "australia" | "canada";

export type CostItem = { label: string; amount: string; sub?: string };
export type PointRow = { factor: string; points: string };
export type PrepStep = { title: string; detail: string };

export type CountryData = {
  key: CountryKey;
  label: string;
  heroEyebrow: string;
  heroAccentWord: string;
  heroSub: string;
  footerLine: string;
  intake: string; // ISO
  journeyStart: string; // ISO
  currencyNote: string;
  rituals: Ritual[];
  universities: Uni[];
  course: { intakes: string; duration: string; structure: string[]; study: string[] };
  costs: CostItem[];
  costTotal: string;
  points: PointRow[];
  pointsNote: string;
  prep: PrepStep[];
  jobGuide: string[];
  checklist: CheckGroup[];
  timeline: Milestone[];
  affirmations: string[];
};

// ------------------------------ AUSTRALIA ------------------------------
const australia: CountryData = {
  key: "australia",
  label: "Australia",
  heroEyebrow: "The road to July 2027",
  heroAccentWord: "Australia.",
  heroSub:
    "One compass for the whole journey. A master's, a part-time job, and points-based PR with no lottery and no sponsor.",
  footerLine: "PTE Superior. Go regional. Stack the points. Then PR.",
  intake: "2027-07-01",
  journeyStart: "2026-06-05",
  currencyNote: "AUD 1 is about Rs 55",
  rituals: [
    { id: "pte", label: "PTE / IELTS Superior", target: "1.5h, sacred. 79+ / 8 = +20 PR points", accentHours: 1.5 },
    { id: "dsa", label: "DSA", target: "2 to 2.5h, solve by hand", accentHours: 2.5 },
    { id: "system", label: "System Design", target: "1h, design then compare", accentHours: 1 },
    { id: "courses", label: "Courses", target: "3 to 5h, fast watch", accentHours: 4 },
  ],
  universities: [
    { id: "melbourne", name: "Melbourne (Go8)", program: "Master of CS", tier: "Reach", tuition: "~AUD 50k/yr", deadline: "Feb / Jul intake", note: "#1 in Australia. World top ~15." },
    { id: "sydney", name: "Sydney (Go8)", program: "Master of CS", tier: "Reach", tuition: "~AUD 55k/yr", deadline: "Feb / Jul intake", note: "Elite brand. Big tech city." },
    { id: "unsw", name: "UNSW (Go8)", program: "Master of IT / CS", tier: "Target", tuition: "~AUD 50k/yr", deadline: "Feb / Jul / Sep", note: "Strong engineering, Sydney." },
    { id: "monash", name: "Monash (Go8)", program: "Master of CS / IT", tier: "Target", tuition: "~AUD 45k/yr", deadline: "Feb / Jul intake", note: "Melbourne. Big, industry ties." },
    { id: "anu", name: "ANU (Go8)", program: "Master of Computing", tier: "Target", tuition: "~AUD 47k/yr", deadline: "Feb / Jul intake", note: "Canberra. Regional nomination access." },
    { id: "uq", name: "UQ (Go8)", program: "Master of CS", tier: "Target", tuition: "~AUD 48k/yr", deadline: "Feb / Jul intake", note: "Brisbane. Strong CS." },
    { id: "adelaide", name: "Adelaide (Go8) *regional", program: "Master of CS", tier: "Safe", tuition: "~AUD 42k/yr", deadline: "Feb / Jul intake", note: "REGIONAL: +5 PR points + extra work year. PR-smart pick." },
    { id: "uwa", name: "UWA (Go8) *regional", program: "Master of CS", tier: "Safe", tuition: "~AUD 43k/yr", deadline: "Feb / Jul intake", note: "Perth. Regional points." },
    { id: "uts", name: "UTS", program: "Master of IT", tier: "Safe", tuition: "~AUD 45k/yr", deadline: "Feb / Jul intake", note: "Sydney. Very industry-focused." },
    { id: "rmit", name: "RMIT", program: "Master of CS", tier: "Safe", tuition: "~AUD 42k/yr", deadline: "Feb / Jul intake", note: "Melbourne. Practical, job-focused." },
    { id: "wollongong", name: "Wollongong *regional", program: "Master of CS", tier: "Safe", tuition: "~AUD 35k/yr", deadline: "Feb / Jul intake", note: "REGIONAL: +5 PR points. Cheap. Near Sydney." },
  ],
  course: {
    intakes: "February (main), July (main), some November",
    duration: "2 years, 4 semesters, coursework. Do the 2-year, not 1-year: it meets the Australian Study Requirement needed for PR points and the 485 visa.",
    structure: [
      "4 semesters, about 4 subjects each",
      "Core computer science plus electives",
      "Capstone or industry project",
      "Optional internship / work-integrated learning",
    ],
    study: [
      "Advanced programming and algorithms",
      "Machine learning and AI",
      "Data structures, databases, big data",
      "Software engineering and cloud",
      "Cybersecurity and electives",
    ],
  },
  costs: [
    { label: "Tuition (2-year master's CS)", amount: "AUD 70k to 100k", sub: "about AUD 35k to 50k per year" },
    { label: "Living (2 years)", amount: "AUD 55k to 60k", sub: "visa minimum AUD 29,710 per year" },
    { label: "OSHC health cover (2 years)", amount: "about AUD 3,000", sub: "mandatory for the visa" },
    { label: "Student visa (subclass 500)", amount: "AUD 2,000", sub: "one-time application fee" },
    { label: "PTE, flights, setup", amount: "about AUD 5,000", sub: "tests plus move-in" },
  ],
  costTotal: "about AUD 135k to 170k  (roughly Rs 75L to 94L)",
  points: [
    { factor: "Age 25 to 32", points: "30" },
    { factor: "English Superior (PTE 79+ / IELTS 8)", points: "20" },
    { factor: "Master's or Bachelor degree", points: "15" },
    { factor: "Australian Study Requirement (2 yrs)", points: "5" },
    { factor: "Single (no partner)", points: "10" },
    { factor: "1 year skilled work", points: "+5 to 10" },
    { factor: "Professional Year program", points: "+5" },
    { factor: "NAATI community language (Hindi / Punjabi)", points: "+5" },
    { factor: "Regional study", points: "+5" },
    { factor: "190 state nomination", points: "+5" },
    { factor: "491 regional nomination", points: "+15" },
  ],
  pointsNote:
    "Base about 80. Software (189) needs about 95, which is hard. Target 190 (85 to 90) or 491 (95+). No lottery, no employer sponsor. Just stack the points.",
  prep: [
    { title: "PTE Academic to Superior", detail: "Score 79+ (IELTS 8). This is +20 PR points, your single biggest lever. Start now." },
    { title: "DSA by hand", detail: "Striver / Leetcode. Tech interviews are won by solving, not watching." },
    { title: "Ship and defend projects", detail: "Curate GitHub with real commits. Be able to explain every line in an interview." },
    { title: "System design basics", detail: "For higher-paying roles, which also raise your PR points and salary." },
    { title: "Australian resume and market", detail: "One-page AU style. Learn Seek and LinkedIn AU. Target skilled roles." },
    { title: "Funds and documents", detail: "AUD 29,710 plus tuition proof, OSHC, and a genuine student statement." },
  ],
  jobGuide: [
    "Work rights: 48 hours per fortnight during study, unlimited during breaks.",
    "Get a Tax File Number (TFN) on arrival, needed to be paid legally.",
    "Open an Australian bank account.",
    "Build a one-page Australian-style resume.",
    "Search Seek, Indeed, Jora, LinkedIn, and campus job boards.",
    "Start with retail, hospitality, campus jobs, or tutoring for cash flow.",
    "Aim up: internships and WIL placements = skilled experience that counts for PR later.",
    "Keep your grades up. The student visa needs genuine study progress.",
  ],
  checklist: [
    { id: "english", title: "English (your points key)", items: [
      { id: "en-choose", label: "Choose PTE Academic or IELTS" },
      { id: "en-book", label: "Book the test" },
      { id: "en-mock", label: "Full timed mock tests" },
      { id: "en-superior", label: "Hit Superior: PTE 79+ / IELTS 8 = +20 PR points" },
    ] },
    { id: "lor", title: "Letters of Recommendation", items: [
      { id: "lor-iit", label: "LOR 1 from IIT professor" },
      { id: "lor-college", label: "LOR 2 from Thapar professor" },
      { id: "lor-signed", label: "Both signed before graduation" },
    ] },
    { id: "docs", title: "Documents", items: [
      { id: "doc-transcripts", label: "Official transcripts + degree" },
      { id: "doc-sop", label: "SOP per university" },
      { id: "doc-cv", label: "Academic CV" },
      { id: "doc-gs", label: "Genuine Student (GS) statement, heavily scrutinized" },
    ] },
    { id: "visa", title: "Student Visa (Subclass 500)", items: [
      { id: "v-coe", label: "Offer + CoE (Confirmation of Enrolment)" },
      { id: "v-oshc", label: "OSHC health cover (mandatory)" },
      { id: "v-funds", label: "Funds: AUD 29,710 living + 1 yr tuition + travel" },
      { id: "v-lodge", label: "Lodge visa (AUD 2,000) + biometrics + health exam" },
    ] },
    { id: "pr", title: "PR Path (points-based)", items: [
      { id: "pr-485", label: "485 Temporary Graduate visa (2 yrs, 3 if regional)" },
      { id: "pr-acs", label: "ACS skills assessment (needs 1 yr work after degree)" },
      { id: "pr-points", label: "Stack points: PY + NAATI + regional + experience" },
      { id: "pr-190", label: "Apply 190 (state) or 491 (regional, +15 pts)" },
      { id: "pr-191", label: "491 to 191 = PR after 3 yrs regional. 190 = PR direct" },
    ] },
  ],
  timeline: [
    { when: "Jun to Oct 2026", title: "Ignition", detail: "PTE / IELTS toward Superior (79+ / 8). Begin DSA. Shortlist. Apply (rolling)." },
    { when: "Jul to Dec 2026", title: "Final semester", detail: "Protect CGPA. Lock 2 LORs. Draft SOP + GS statement." },
    { when: "Dec 2026", title: "Graduate", detail: "Final transcripts. Confirm offers." },
    { when: "Late 2026 to early 2027", title: "Offer + CoE", detail: "Accept offer, pay deposit, receive CoE." },
    { when: "Mar to May 2027", title: "Student visa 500", detail: "Funds (AUD 29,710 + tuition), OSHC, GS statement, lodge visa." },
    { when: "Jun to Jul 2027", title: "Australia", detail: "Fly. July 2027 intake. Consider a regional city for PR points." },
    { when: "2027 to 2029", title: "2-year master's", detail: "Study (regional for +5 pts). Part-time work 48h/fortnight. Keep PTE Superior fresh." },
    { when: "2029", title: "Graduate + 485", detail: "Apply Temporary Graduate visa (2 to 3 years). Age under 35, fine." },
    { when: "2029 to 2030", title: "ACS + points", detail: "ACS skills assessment. 1 yr work. Add PY, NAATI, experience points." },
    { when: "2030 to 2031", title: "Permanent Residence", detail: "190 or 491 nomination. 491 to 191 = PR after regional years." },
  ],
  affirmations: [
    "PTE Superior = +20 points. That one test moves everything.",
    "Go regional. Adelaide. +5 points and an extra work year.",
    "PR by points. No lottery, no sponsor. Just stack them.",
    "Solve DSA by hand. The interview has no AI.",
    "Age is points. Do it before the clock ticks past 32.",
    "491 regional is the surest road to PR.",
    "You ship what others only watch. Now learn to defend it.",
    "Future you, an Australian PR, is built by today's points.",
  ],
};

// ------------------------------- CANADA -------------------------------
const canada: CountryData = {
  key: "canada",
  label: "Canada",
  heroEyebrow: "The road to September 2027",
  heroAccentWord: "Canada.",
  heroSub:
    "One compass for the whole journey. Eleven universities, French as the PR key, and a master's that opens permanent residence.",
  footerLine: "Eleven applications. French to B2. Then PR.",
  intake: "2027-09-01",
  journeyStart: "2026-06-05",
  currencyNote: "CAD 1 is about Rs 61",
  rituals: [
    { id: "french", label: "French", target: "1.5h, sacred. NCLC 7 = the PR key", accentHours: 1.5 },
    { id: "dsa", label: "DSA", target: "2 to 2.5h, solve by hand", accentHours: 2.5 },
    { id: "system", label: "System Design", target: "1h, design then compare", accentHours: 1 },
    { id: "courses", label: "Courses", target: "3 to 5h, fast watch", accentHours: 4 },
    { id: "ielts", label: "IELTS", target: "until the exam is done", accentHours: 1 },
  ],
  universities: [
    { id: "waterloo", name: "Waterloo", program: "MMath / MEng CS", tier: "Reach", tuition: "~CAD 23,100", deadline: "~Dec to Feb", note: "Co-op powerhouse. Best tech pipeline." },
    { id: "toronto", name: "Toronto (UofT)", program: "MScAC / MEng", tier: "Reach", tuition: "~CAD 35k to 60k", deadline: "~15 Jan", note: "Top ranked. GRE optional, competitive." },
    { id: "ubc", name: "UBC", program: "MEng / MDS CS", tier: "Reach", tuition: "~CAD 30k", deadline: "varies", note: "Elite. Vancouver, high cost of living." },
    { id: "mcgill", name: "McGill (Quebec)", program: "MSc / MEng CS", tier: "Target", tuition: "~CAD 27k to 50k", deadline: "15 Jan", note: "Montreal. English uni, French city. AI hub." },
    { id: "alberta", name: "Alberta", program: "MEng / MSc CS", tier: "Target", tuition: "~CAD 12k to 20k", deadline: "varies", note: "Strong AI (Amii). Cheaper tuition." },
    { id: "sfu", name: "Simon Fraser", program: "Professional MSc CS", tier: "Target", tuition: "~CAD 6k to 18k", deadline: "varies", note: "Low tuition. Vancouver area." },
    { id: "concordia", name: "Concordia (Quebec)", program: "MSc / MEng (Gina Cody)", tier: "Target", tuition: "~CAD 27k", deadline: "~Feb to Mar", note: "Montreal. Reachable, strong CS." },
    { id: "ottawa", name: "Ottawa (bilingual)", program: "MCS", tier: "Safe", tuition: "~CAD 27k", deadline: "varies", note: "Bilingual city. Federal jobs. French fit." },
    { id: "polymtl", name: "Polytechnique Montreal (Quebec)", program: "MEng / maitrise", tier: "Safe", tuition: "~CAD 23k to 45k", deadline: "varies", note: "Montreal. Engineering school." },
    { id: "carleton", name: "Carleton (bilingual)", program: "MCS / MEng", tier: "Safe", tuition: "~CAD 17k to 25k", deadline: "varies", note: "Ottawa. High odds backup." },
    { id: "udem", name: "Universite de Montreal (Quebec)", program: "Maitrise informatique", tier: "Safe", tuition: "~CAD 25k", deadline: "varies", note: "French uni. Mila AI lab. Cheaper in French." },
  ],
  course: {
    intakes: "Fall (September, main), some Winter (January)",
    duration: "1 to 2 years. Co-op programs (Waterloo, UofT MScAC) add paid work terms that feed both jobs and PR.",
    structure: ["Coursework or thesis", "Co-op / internship option", "Capstone or research project"],
    study: ["Algorithms and systems", "Machine learning and AI", "Data and databases", "Software engineering", "Electives"],
  },
  costs: [
    { label: "Tuition (course-based master's)", amount: "CAD 46k to 80k", sub: "about CAD 23k to 40k per year" },
    { label: "Living (2 years)", amount: "CAD 40k to 50k", sub: "Montreal cheaper than Toronto" },
    { label: "Proof of funds (visa)", amount: "CAD 22,895 / yr", sub: "Quebec 24,617" },
    { label: "CAQ (Quebec only)", amount: "CAD 135" },
    { label: "Flights, setup, insurance", amount: "about CAD 5,000" },
  ],
  costTotal: "about CAD 90k to 140k  (roughly Rs 55L to 85L)",
  points: [
    { factor: "Age 20 to 29", points: "110" },
    { factor: "Master's education", points: "135" },
    { factor: "English CLB 9", points: "124" },
    { factor: "French NCLC 7 (bonus)", points: "+50" },
    { factor: "1 year Canadian work", points: "40" },
    { factor: "Skill transferability", points: "up to 100" },
    { factor: "Canadian credential bonus", points: "+30" },
    { factor: "Provincial nomination", points: "+600" },
  ],
  pointsNote:
    "General draw cutoff is about 510 to 525. French draws cut at 380 to 446. French is the reachable route.",
  prep: [
    { title: "French to NCLC 7", detail: "TEF / TCF Canada. B2 in all four skills is +50 CRS and unlocks the 380 to 446 draws." },
    { title: "IELTS to CLB 9", detail: "Strong English is the biggest core points block." },
    { title: "DSA by hand", detail: "Interviews are won by solving, not watching." },
    { title: "Ship and defend projects", detail: "Curate GitHub, real commits, explain every line." },
    { title: "WES ECA + SOPs", detail: "Get the degree evaluated and write a sharp SOP per school." },
    { title: "Funds + documents", detail: "CAD 22,895 + tuition, CAQ if Quebec." },
  ],
  jobGuide: [
    "Off-campus work: up to 24 hours per week during study.",
    "Get a Social Insurance Number (SIN) on arrival.",
    "Prefer co-op programs: paid work terms that also build PR experience.",
    "Build a Canadian-style one-page resume.",
    "Search Indeed, LinkedIn, Job Bank, and campus boards.",
    "Aim for skilled roles (NOC TEER 0 to 3) so the year counts toward CEC and PR.",
  ],
  checklist: [
    { id: "ielts", title: "IELTS (English)", items: [
      { id: "ielts-book", label: "Exam booked" },
      { id: "ielts-mock", label: "3 to 4 full timed mock tests" },
      { id: "ielts-score", label: "Score 6.5 to 7.0, aim CLB 9" },
    ] },
    { id: "french", title: "French (your PR superpower)", items: [
      { id: "fr-choose", label: "Choose TEF Canada or TCF Canada" },
      { id: "fr-daily", label: "Daily French to B2" },
      { id: "fr-book", label: "Book the test" },
      { id: "fr-nclc7", label: "Hit NCLC 7 (B2) in ALL 4 skills = +50 CRS" },
    ] },
    { id: "lor", title: "Letters of Recommendation", items: [
      { id: "lor-iit", label: "LOR 1 from IIT professor" },
      { id: "lor-college", label: "LOR 2 from Thapar professor" },
      { id: "lor-signed", label: "Both signed before graduation" },
    ] },
    { id: "docs", title: "Documents", items: [
      { id: "doc-wes", label: "WES ECA (degree evaluation, needed for PR too)" },
      { id: "doc-sop", label: "SOP per university" },
      { id: "doc-cv", label: "Academic CV" },
      { id: "doc-transcripts", label: "Official sealed transcripts" },
    ] },
    { id: "permit", title: "Study Permit", items: [
      { id: "p-offer", label: "Admission offer (LOI)" },
      { id: "p-caq", label: "CAQ (Quebec only, ~CAD 135, 25 days)" },
      { id: "p-funds", label: "Proof of funds: tuition + CAD 22,895 (Quebec 24,617)" },
      { id: "p-permit", label: "Study permit application + biometrics + medical" },
    ] },
    { id: "pr", title: "PR Path (start during study)", items: [
      { id: "pr-pgwp", label: "Apply PGWP right after graduation (3 yrs)" },
      { id: "pr-job", label: "Land skilled CS job (NOC TEER 0 or 1)" },
      { id: "pr-profile", label: "Build Express Entry profile" },
      { id: "pr-12mo", label: "12 months Canadian work = CEC eligible" },
      { id: "pr-file", label: "File PR by PGWP year 2. BOWP bridges you" },
    ] },
  ],
  timeline: [
    { when: "Jun 2026", title: "Ignition", detail: "IELTS prep. Start French. Begin DSA. Clean GitHub. Research the 11 unis." },
    { when: "Jul to Oct 2026", title: "Final semester + prep", detail: "Protect CGPA. Lock 2 LORs. Start WES ECA. Draft SOPs. Start French." },
    { when: "Oct to Dec 2026", title: "Applications open", detail: "Submit early. IELTS done. Apply with in-progress transcripts where allowed." },
    { when: "Dec 2026", title: "Graduate", detail: "Final transcripts + degree certificate. Submit remaining applications." },
    { when: "Dec 2026 to Mar 2027", title: "Deadlines", detail: "All 11 in (McGill 15 Jan, others Dec to Mar). Keep DSA + courses going." },
    { when: "Mar to May 2027", title: "Offers", detail: "Collect 3 to 4 admits. Pick Montreal for French + cost + jobs." },
    { when: "May to Jul 2027", title: "Permit", detail: "CAQ if Quebec. Proof of funds (CAD 22,895+). Study permit + biometrics." },
    { when: "Sep 2027", title: "Canada", detail: "Arrive. Study, co-op, build network. Keep French going for PR." },
    { when: "2028 to 2029", title: "Graduate + PGWP", detail: "Apply 3-year PGWP. Land a skilled CS job (NOC TEER 0 or 1)." },
    { when: "2029 to 2030", title: "Permanent Residence", detail: "12 months work. French Express Entry draw. File PR by PGWP year 2." },
  ],
  affirmations: [
    "French to NCLC 7. That one test unlocks the 379 to 446 draws.",
    "Montreal. AI labs, lower rent, and the PR cheat code.",
    "Apply to eleven. Land three. That is the math.",
    "Solve DSA by hand. The interview has no AI.",
    "PGWP is one shot. File PR by year two, never year three.",
    "Bilingual beats everyone in a smaller pool.",
    "You ship what others only watch. Now learn to defend it.",
    "Future you, a Canadian PR, is built by today's French lesson.",
  ],
};

export const COUNTRIES: Record<CountryKey, CountryData> = { australia, canada };
export const COUNTRY_ORDER: CountryKey[] = ["australia", "canada"];
