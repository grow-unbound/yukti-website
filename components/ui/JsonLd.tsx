/**
 * Renders a JSON-LD block.
 *
 * dangerouslySetInnerHTML is unavoidable here — a <script> body cannot be set
 * from React children, and this is the documented way to emit structured data.
 * It is safe in this specific use: `data` is always a build-time object
 * assembled in lib/jsonld.ts from our own content files, never user input or
 * remote data. The `<` escape is the one real hazard being closed — a literal
 * "</script>" inside any string field would otherwise terminate the tag early.
 *
 * If this ever needs to serialise something that did not originate in this
 * repo, it needs a different approach, not a bigger escape list.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
