import type { Thing } from "schema-dts";

type JsonLdProps = {
  data: Thing | Thing[];
};

export default function JsonLd({ data }: JsonLdProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": jsonLd,
        }),
      }}
    />
  );
}