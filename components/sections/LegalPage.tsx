import { Header } from "@/components/chrome/Header";
import { PageHero } from "@/components/ui/PageHero";
import type { LegalSection } from "@/content/legal";
import { LEGAL_REVIEW_PENDING } from "@/content/legal";
import s from "@/components/ui/Prose.module.css";

type Props = {
  title: string;
  updated: string;
  summary: string;
  sections: LegalSection[];
  /** Named so the notice can say exactly what still needs a decision. */
  outstanding: string;
};

export function LegalPage({
  title,
  updated,
  summary,
  sections,
  outstanding,
}: Props) {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero title={title}>
          <p className={s.meta}>{updated}</p>

          {LEGAL_REVIEW_PENDING ? (
            <div className={s.notice} role="note">
              <strong>Working draft, not yet reviewed by counsel.</strong> This
              page is published for review only and should not be relied on as
              a final legal document. {outstanding} Placeholders appear in
              square brackets where a decision is still outstanding.
            </div>
          ) : null}

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
