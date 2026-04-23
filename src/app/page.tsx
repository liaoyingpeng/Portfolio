import Link from "next/link";

const highlights = [
  "前端開發",
  "介面設計",
  "資料視覺化",
  "團隊協作",
];

const selectedWorks = [
  {
    title: "Campus Task",
    type: "React / UX",
    summary: "為學生社團設計的任務管理工具，強調清楚的狀態、期限與責任分工。",
  },
  {
    title: "Daily Budget",
    type: "Next.js / Chart",
    summary: "個人記帳與月度分析介面，練習表單驗證、圖表呈現與響應式排版。",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_360px]">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-sage">
            Minimal Portfolio / 2026
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl">
            廖盈芃
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
            我是一名準備進入職場的前端學生，正在把課堂專案、實習經驗與自主練習整理成能被理解、能被驗證的作品集。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/works"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-paper transition hover:bg-zinc-300"
            >
              查看作品
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-zinc-950 px-6 text-sm font-medium text-ink transition hover:border-ink"
            >
              聯絡我
            </Link>
          </div>
        </div>

        <aside className="border border-line bg-zinc-950 p-5 shadow-soft">
          <div className="aspect-[4/5] border border-line bg-[linear-gradient(135deg,#111111_0%,#111111_48%,#f7f7f7_48%,#f7f7f7_100%)] p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="h-20 w-20 rounded-full border border-ink/15 bg-paper" />
              <div>
                <p className="font-mono text-xs tracking-[0.24em] text-muted">HELLO</p>
                <p className="mt-3 max-w-60 bg-black/85 p-3 text-2xl font-semibold leading-tight">
                  Front-end learner with product sense.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-line bg-zinc-950">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
          {highlights.map((item) => (
            <p key={item} className="font-mono text-sm tracking-[0.16em] text-muted">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-sage">
              Selected Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">近期作品</h2>
          </div>
          <Link href="/works" className="text-sm font-medium text-sage hover:text-ink">
            全部作品
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {selectedWorks.map((work) => (
            <article key={work.title} className="border border-line bg-zinc-950 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {work.type}
              </p>
              <h3 className="mt-8 text-2xl font-semibold">{work.title}</h3>
              <p className="mt-4 leading-7 text-muted">{work.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
