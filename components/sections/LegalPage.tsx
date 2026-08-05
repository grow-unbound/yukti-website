import { Header } from "@/components/chrome/Header";
import { PageHero } from "@/components/ui/PageHero";
import type { LegalSection } from "@/content/legal";
import s from "@/components/ui/Prose.module.css";

type Props = {
  title: string;
  updated: string;
  summary: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, summary, sections }: Props) {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero title={title}>
          <p className={s.meta}>{updated}</p>

          <div className={s.summaryBox}>
            <p>
              <strong>In short:</strong> {summary}
            </p>
          </div>
        </PageHero>

        <div className={s.prose}>
          {sections.map((section) => (
            <section key={section.h}>
              <h2>{section.h}</h2>
              {section.blocks.map((block, i) =>
                block.kind === "p" ? (
                  <p key={i}>{block.text}</p>
                ) : (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
