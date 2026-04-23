const works = [
  {
    title: "Campus Task",
    year: "2026",
    role: "前端開發 / 介面規劃",
    tools: "Next.js, Tailwind CSS, TypeScript",
    description:
      "針對學生社團活動籌備設計的任務看板，將待辦、負責人、期限與進度集中在同一個畫面，減少溝通落差。",
  },
  {
    title: "Daily Budget",
    year: "2025",
    role: "產品練習 / 前端開發",
    tools: "React, Chart.js, Local Storage",
    description:
      "個人記帳工具，支援分類輸入、月度統計與支出趨勢視覺化，重點放在表單流程與資料可讀性。",
  },
  {
    title: "Internship Notes",
    year: "2025",
    role: "內容架構 / UI 設計",
    tools: "Figma, Markdown, CSS",
    description:
      "整理實習紀錄與學習筆記的小型知識庫，練習資訊分類、搜尋入口與長內容閱讀版面。",
  },
];

export default function WorksPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-sage">Works</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">作品</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          這些專案來自課堂、實習與自主練習。我重視的不只是畫面完成度，也包含問題定義、資料結構與使用者流程。
        </p>
      </div>

      <div className="mt-14 space-y-5">
        {works.map((work, index) => (
          <article
            key={work.title}
            className="grid gap-8 border border-line bg-zinc-950 p-6 md:grid-cols-[180px_1fr]"
          >
            <div className="flex aspect-[4/3] items-end justify-start border border-line bg-paper p-4">
              <span className="font-mono text-4xl text-sage/70">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold">{work.title}</h2>
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {work.year}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-muted">{work.description}</p>
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Role
                  </dt>
                  <dd className="mt-2">{work.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Tools
                  </dt>
                  <dd className="mt-2 leading-6">{work.tools}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
