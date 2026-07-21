// Every course link Shaurya uploaded, sorted into 8 buckets. NOTHING deleted.
// Core = do now (the job) | Edge = after core (AI + cloud depth) | Quick = one-day wins
// Revise = you know a bit, brush up | Later = optional / duplicate | Parked = watch-later
// Skip = dead, do not open | Done = finished

export type Verdict = "Core" | "Edge" | "Quick" | "Revise" | "Later" | "Parked" | "Skip" | "Done";
export type Track =
  | "DSA & Interviews"
  | "System Design"
  | "ML & Deep Learning"
  | "GenAI & Agentic"
  | "Data"
  | "Web & DevOps"
  | "Tools"
  | "Math & Basics";

export type Course = {
  id: string;
  label: string;
  url?: string;
  track: Track;
  verdict: Verdict;
  note?: string;
  redundant?: string;
};

export const TRACKS: Track[] = [
  "DSA & Interviews",
  "System Design",
  "ML & Deep Learning",
  "GenAI & Agentic",
  "Data",
  "Web & DevOps",
  "Tools",
  "Math & Basics",
];

export const COURSES: Course[] = [
  // DSA & Interviews
  { id: "striver-a2z", label: "Striver A2Z DSA (course)", url: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz", track: "DSA & Interviews", verdict: "Core", note: "THE foundation. Start here. Solve by hand." },
  { id: "striver-a2z-sheet", label: "Striver A2Z DSA tracker sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", track: "DSA & Interviews", verdict: "Core", note: "Your daily tracker." },
  { id: "neetcode-150", label: "NeetCode 150", url: "https://neetcode.io/practice", track: "DSA & Interviews", verdict: "Core", note: "Interview set. After A2Z." },
  { id: "striver-sde", label: "Striver SDE Sheet (90 days)", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/", track: "DSA & Interviews", verdict: "Later", note: "Extra practice." },
  { id: "lc-150", label: "LeetCode Top Interview 150", url: "https://leetcode.com/studyplan/top-interview-150/", track: "DSA & Interviews", verdict: "Later", redundant: "Overlaps NeetCode 150" },
  { id: "neetcode-io", label: "Neetcode.io curated lists", url: "https://neetcode.io/", track: "DSA & Interviews", verdict: "Later", redundant: "Same site as NeetCode 150" },
  { id: "blind-75", label: "Blind 75", url: "https://neetcode.io/practice?tab=blind75", track: "DSA & Interviews", verdict: "Later", redundant: "Subset of NeetCode 150" },

  // System Design
  { id: "tuf-sysd", label: "takeuforward System Design roadmap", url: "https://takeuforward.org/system-design/complete-system-design-roadmap-with-videos-for-sdes", track: "System Design", verdict: "Core", note: "Higher pay + interviews." },
  { id: "udemy-sysd", label: "Mastering System Design (Udemy)", url: "https://www.udemy.com/course/mastering-system-design-from-basics-to-cracking-interviews/", track: "System Design", verdict: "Later", redundant: "Duplicate of takeuforward SD" },

  // ML & Deep Learning
  { id: "ng-ml", label: "ML Specialization (Andrew Ng)", url: "https://www.coursera.org/specializations/machine-learning-introduction", track: "ML & Deep Learning", verdict: "Core", note: "Your niche base." },
  { id: "ng-dl", label: "Deep Learning Specialization (Andrew Ng)", url: "https://www.coursera.org/specializations/deep-learning", track: "ML & Deep Learning", verdict: "Core", note: "Your differentiator." },
  { id: "pytorch-dl", label: "PyTorch Deep Learning (playlist)", url: "https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7", track: "ML & Deep Learning", verdict: "Edge", note: "Do alongside the DL spec." },
  { id: "ml-prod", label: "ML in Production (Andrew Ng)", url: "https://www.coursera.org/learn/introduction-to-machine-learning-in-production", track: "ML & Deep Learning", verdict: "Later", note: "MLOps, job phase." },
  { id: "mlops", label: "MLOps Fundamentals (Coursera)", url: "https://www.coursera.org/learn/mlops-fundamentals", track: "ML & Deep Learning", verdict: "Later", redundant: "Overlaps ML in Production" },
  { id: "dl-playlist", label: "Deep Learning (playlist)", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn", track: "ML & Deep Learning", verdict: "Skip", redundant: "Duplicate of Andrew Ng DL" },

  // GenAI & Agentic
  { id: "hf-llm", label: "HuggingFace LLM course", url: "https://huggingface.co/learn/llm-course/chapter1/1", track: "GenAI & Agentic", verdict: "Edge", note: "Best free LLM resource." },
  { id: "genai-llms", label: "Generative AI with LLMs (Coursera)", url: "https://www.coursera.org/learn/generative-ai-with-llms", track: "GenAI & Agentic", verdict: "Edge", note: "LLM foundations." },
  { id: "agentic-langgraph", label: "Agentic LangGraph (playlist)", url: "https://www.youtube.com/watch?v=yC36gN-rqjo&list=PLKnIA16_RmvYsvB8qkUQuJmJNuiCUJFPL", track: "GenAI & Agentic", verdict: "Edge", note: "Your ONE agentic pass. Formalize what you build." },
  { id: "genai-langchain-pl", label: "Gen AI LangChain (playlist)", url: "https://www.youtube.com/watch?v=pSVk-5WemQ0&list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0", track: "GenAI & Agentic", verdict: "Later", redundant: "Same URL as Generative AI playlist" },
  { id: "genai-playlist", label: "Generative AI (playlist)", url: "https://www.youtube.com/watch?v=pSVk-5WemQ0&list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0", track: "GenAI & Agentic", verdict: "Skip", redundant: "EXACT DUPLICATE of Gen AI LangChain" },
  { id: "mcp", label: "MCP (playlist)", url: "https://www.youtube.com/watch?v=3_TN1i3MTEU&list=PLKnIA16_Rmva_oZ9F4ayUu9qcWgF7Fyc0", track: "GenAI & Agentic", verdict: "Later", redundant: "Agentic cluster (already have LangGraph)" },
  { id: "agentic-ai", label: "Agentic AI (playlist)", url: "https://www.youtube.com/watch?v=rV3HJ4LEZ7k&list=PLHDyhEz2cEkg7jDELx9qOhTiHbrHExA1m", track: "GenAI & Agentic", verdict: "Later", redundant: "Agentic cluster" },
  { id: "rag-playlist", label: "RAG (playlist)", url: "https://www.youtube.com/playlist?list=PLKnIA16_Rmva0dRLWEHLznSHKbFD_RJfX", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG cluster (pick one)" },
  { id: "adv-rag", label: "Advanced RAG with Vector DBs (Coursera)", url: "https://www.coursera.org/learn/advanced-rag-with-vector-databases-and-retrievers", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG cluster" },
  { id: "ibm-rag", label: "IBM RAG and Agentic AI (certificate)", url: "https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG + agentic cluster" },
  { id: "udemy-genai-lc", label: "GenAI with LangChain + HuggingFace (Udemy)", url: "https://www.udemy.com/course/complete-generative-ai-course-with-langchain-and-huggingface/", track: "GenAI & Agentic", verdict: "Later", redundant: "GenAI cluster overlap" },
  { id: "coursera-rag-lc", label: "GenAI apps with RAG and LangChain (Coursera)", url: "https://www.coursera.org/learn/project-generative-ai-applications-with-rag-and-langchain", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG cluster" },
  { id: "finetune-llm", label: "Finetuning LLMs (project)", url: "https://www.coursera.org/projects/finetuning-large-language-models-project", track: "GenAI & Agentic", verdict: "Later", note: "Nice portfolio add." },
  { id: "nlp-playlist", label: "NLP (playlist)", url: "https://www.youtube.com/watch?v=zlUpTlaxAKI&list=PLKnIA16_RmvZo7fp5kkIth6nRTeQQsjfX", track: "GenAI & Agentic", verdict: "Later", redundant: "Overlaps NLP Specialization" },
  { id: "nlp-spec", label: "NLP Specialization (Coursera)", url: "https://www.coursera.org/specializations/natural-language-processing", track: "GenAI & Agentic", verdict: "Later", redundant: "Overlaps NLP playlist" },

  // Data
  { id: "sql-ds", label: "SQL for Data Science (playlist)", url: "https://www.youtube.com/playlist?list=PLKnIA16_RmvYun1_5r9Fb4eQigioPB7yn", track: "Data", verdict: "Core", note: "Quick, always tested." },
  { id: "tableau", label: "Tableau (playlist)", url: "https://www.youtube.com/watch?v=TnKL074VwXg&list=PLKnIA16_RmvYoVWj-ep-p0hbQliFAvA7x", track: "Data", verdict: "Skip", note: "BI tool, off your path." },

  // Web & DevOps
  { id: "backend-proto", label: "Backend Communications and Protocols (Udemy)", url: "https://www.udemy.com/course/fundamentals-of-backend-communications-and-protocols/", track: "Web & DevOps", verdict: "Edge", note: "Real systems depth." },
  { id: "gh-actions", label: "GitHub Actions Complete Guide (Udemy)", url: "https://www.udemy.com/course/github-actions-the-complete-guide/", track: "Web & DevOps", verdict: "Edge", note: "CI/CD. Pairs with Docker." },
  { id: "docker-k8s", label: "Docker + Kubernetes Practical Guide (Udemy)", url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/", track: "Web & DevOps", verdict: "Edge", note: "Your real cloud/DevOps depth." },
  { id: "node-coursera", label: "Backend Node/Express/Mongo (Coursera)", url: "https://www.coursera.org/learn/backend-development-nodejs-express-mongodb-restapis", track: "Web & DevOps", verdict: "Revise", note: "You know a bit. Brush up." },
  { id: "nextjs", label: "Next.js + React Complete Guide (Udemy)", url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/", track: "Web & DevOps", verdict: "Revise", note: "You know a bit. Brush up." },
  { id: "tailwind", label: "Tailwind from Scratch (Udemy)", url: "https://www.udemy.com/course/tailwind-from-scratch/", track: "Web & DevOps", verdict: "Revise", note: "You know a bit. Brush up." },
  { id: "appsec", label: "Application Security for DevOps (Coursera)", url: "https://www.coursera.org/learn/application-security-for-developers-devops", track: "Web & DevOps", verdict: "Later", note: "Only if you touch security." },
  { id: "react-test", label: "React Testing Library and Jest (Udemy)", url: "https://www.udemy.com/course/react-testing-library-and-jest/", track: "Web & DevOps", verdict: "Later", note: "Only if heavy frontend." },
  { id: "playwright", label: "Playwright Test Automation (Udemy)", url: "https://www.udemy.com/course/playwright-test-automation-with-javascript-getting-started/", track: "Web & DevOps", verdict: "Later", redundant: "Testing overlap with Jest" },
  { id: "angela-yu", label: "Complete Web Dev Bootcamp (Angela Yu)", url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/", track: "Web & DevOps", verdict: "Done" },
  { id: "jonas-react", label: "The Ultimate React Course (Jonas)", url: "https://www.udemy.com/course/the-ultimate-react-course/", track: "Web & DevOps", verdict: "Skip", redundant: "You already ship React" },
  { id: "jonas-js", label: "Complete JavaScript Course (Jonas)", url: "https://www.udemy.com/course/the-complete-javascript-course/", track: "Web & DevOps", verdict: "Skip", redundant: "You already know JS" },
  { id: "smilga-react", label: "React Tutorial and Projects (Smilga)", url: "https://www.udemy.com/course/react-tutorial-and-projects-course/", track: "Web & DevOps", verdict: "Skip", redundant: "Overlaps Jonas React" },
  { id: "aws-ccp", label: "AWS Certified Cloud Practitioner (Udemy)", url: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/", track: "Web & DevOps", verdict: "Skip", note: "Cut. Cloud depth by doing, not certs." },
  { id: "cwh-webdev", label: "Code With Harry Web Dev (playlist)", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w", track: "Web & DevOps", verdict: "Skip", note: "Removed. Past beginner web." },
  { id: "apollo-graphql", label: "Full Stack Apollo GraphQL with React and Node", url: "https://www.youtube.com/watch?v=h-ZCVUAzR-0&list=PLASldBPN_pkDUuOzyPotAkKmvwqyDoA0g", track: "Web & DevOps", verdict: "Skip", note: "Niche, off your path." },
  { id: "fastapi-pl", label: "FastAPI (playlist)", url: "https://www.youtube.com/watch?v=WJKsPchji0Q&list=PLKnIA16_RmvZ41tjbKB2ZnwchfniNsMuQ", track: "Web & DevOps", verdict: "Skip", note: "You use it via agents, not by hand." },

  // Tools
  { id: "streamlit", label: "Streamlit", track: "Tools", verdict: "Quick", note: "Ship ML demos fast. One day." },
  { id: "linux-vibe", label: "Linux (Code With Harry)", url: "https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7", track: "Tools", verdict: "Quick", note: "CLI comfort for DevOps." },
  { id: "flask", label: "Flask", track: "Tools", verdict: "Later", note: "You already use it." },
  { id: "cursor", label: "Cursor", track: "Tools", verdict: "Parked", note: "No course exists. Just use the app." },
  { id: "framer", label: "Framer", track: "Tools", verdict: "Parked", note: "Watch-later. Design tool." },
  { id: "spline", label: "Spline", track: "Tools", verdict: "Parked", note: "Watch-later. Design tool." },
  { id: "flutter", label: "Flutter", track: "Tools", verdict: "Parked", note: "Watch-later. Only if mobile." },
  { id: "figma", label: "Figma course", url: "https://www.youtube.com/playlist?list=PLlHtucAD9KT19ckHqXpPSStZOyDSq9AW-", track: "Tools", verdict: "Parked", note: "Watch-later. Design." },
  { id: "motion-design", label: "Motion Design", track: "Tools", verdict: "Parked", note: "Watch-later." },
  { id: "php", label: "PHP (Code With Harry)", url: "https://www.youtube.com/watch?v=1SnPKhCdlsU", track: "Tools", verdict: "Parked", note: "Watch-later. Off your path." },
  { id: "js-1", label: "JS short 1", url: "https://youtu.be/H3XIJYEPdus", track: "Tools", verdict: "Parked", note: "Watch-later. You're fuzzy on JS." },
  { id: "js-2", label: "JS short 2", url: "https://youtu.be/M9O5AjEFzKw", track: "Tools", verdict: "Parked" },
  { id: "js-3", label: "JS short 3", url: "https://youtu.be/Bd1EBSCu2os", track: "Tools", verdict: "Parked" },
  { id: "js-4", label: "JS short 4", url: "https://youtu.be/qnwFpjIqsrA", track: "Tools", verdict: "Parked" },
  { id: "js-5", label: "JS short 5", url: "https://youtu.be/futeaowy34Y", track: "Tools", verdict: "Parked" },
  { id: "js-6", label: "JS short 6", url: "https://youtu.be/-Qnf2bME-rE", track: "Tools", verdict: "Parked" },
  { id: "js-7", label: "JS short 7", url: "https://youtu.be/znZQFzoV3CM", track: "Tools", verdict: "Parked" },
  { id: "js-8", label: "JS short 8", url: "https://youtu.be/OkWWAgLSGkc", track: "Tools", verdict: "Parked" },
  { id: "js-9", label: "JS short 9", url: "https://youtu.be/QIDkK0FbXDc", track: "Tools", verdict: "Parked" },
  { id: "js-10", label: "JS short 10", url: "https://youtu.be/kiPrrtclZOA", track: "Tools", verdict: "Parked" },

  // Math & Basics (Done)
  { id: "linear-algebra", label: "Linear Algebra", url: "https://www.youtube.com/watch?v=ILQTG5bMENI&list=PLlpUUtQ9RrF76jvALwrTp0oOGfk0EGC3s", track: "Math & Basics", verdict: "Done" },
  { id: "calculus", label: "Calculus", url: "https://www.youtube.com/watch?v=LA1_vBXOIiQ&list=PLlpUUtQ9RrF76jvALwrTp0oOGfk0EGC3s", track: "Math & Basics", verdict: "Done" },
  { id: "prob-stats", label: "Probability and Statistics", url: "https://www.youtube.com/watch?v=vEwe_1b1Df0&list=PLlpUUtQ9RrF76jvALwrTp0oOGfk0EGC3s", track: "Math & Basics", verdict: "Done" },
  { id: "python", label: "Python", url: "https://www.youtube.com/watch?v=UrsmFxEIp5k", track: "Math & Basics", verdict: "Done" },
  { id: "numpy", label: "NumPy", url: "https://www.youtube.com/watch?v=Rbh1rieb3zc", track: "Math & Basics", verdict: "Done" },
  { id: "pandas", label: "Pandas", url: "https://www.youtube.com/watch?v=RhEjmHeDNoA", track: "Math & Basics", verdict: "Done" },
];
