const skills = ["HTML / CSS", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"];

const timeline = [
  {
    period: "2026",
    title: "準備求職",
    text: "持續整理作品集、補強測試與部署流程，目標是加入重視產品品質的前端團隊。",
  },
  {
    period: "2025",
    title: "前端實習",
    text: "參與內部管理介面維護，負責小型功能切版、表單狀態與與設計稿對齊。",
  },
  {
    period: "2024",
    title: "專題開發",
    text: "與同學合作完成校園服務專題，開始理解需求訪談、任務拆分與版本控制。",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-sage">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">關於我</h1>
      </div>

      <div>
        <p className="text-xl leading-9 text-muted">
          我把自己定位為「能理解設計、也願意把程式碼寫清楚」的前端新人。學習過程中，我最常練習的是把模糊需求整理成可執行的介面流程，並用穩定的元件與版面把它落地。
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">技能</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line bg-zinc-950 px-4 py-2 text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold">學習歷程</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {timeline.map((item) => (
              <article key={item.title} className="grid gap-4 py-6 sm:grid-cols-[110px_1fr]">
                <p className="font-mono text-sm text-sage">{item.period}</p>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
