const contacts = [
  {
    label: "Email",
    value: "yingpeng.liao@example.com",
    href: "mailto:yingpeng.liao@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/yingpeng-liao",
    href: "https://github.com/yingpeng-liao",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yingpeng-liao",
    href: "https://linkedin.com/in/yingpeng-liao",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-153px)] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-sage">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">聯絡資訊</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          我正在尋找前端工程師、網頁設計助理或實習相關機會。如果我的作品與你正在尋找的新人特質接近，歡迎與我聯絡。
        </p>
      </div>

      <div className="border border-line bg-zinc-950 p-6">
        <div className="divide-y divide-line">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center justify-between gap-5 py-5"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </span>
                <span className="mt-2 block text-lg font-medium">{item.value}</span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
