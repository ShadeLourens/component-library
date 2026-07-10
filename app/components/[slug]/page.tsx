import { notFound } from "next/navigation";
import { components } from "@/content/components";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 640, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>{component.name}</h1>
      <p>{component.description}</p>
    </main>
  );
}
