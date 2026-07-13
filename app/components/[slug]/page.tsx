import { notFound } from "next/navigation";
import { components, getComponent } from "@/content/components";

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getComponent(slug);

  if (!doc) notFound();

  return (
    <main style={{ maxWidth: 720, margin: "3rem auto", padding: "0 1rem" }}>
      <h1>{doc.name}</h1>
      <p>{doc.description}</p>
    </main>
  );
}
