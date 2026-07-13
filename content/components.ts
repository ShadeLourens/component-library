export const components = [
  {
    slug: "button",
    name: "Button",
    description: "A clickable action with variants, sizes, and states.",
  },
] as const;

export type ComponentDoc = (typeof components)[number];

export function getComponent(slug: string) {
  return components.find((c) => c.slug === slug);
}
