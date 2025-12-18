import Link from "next/link";
import { notFound } from "next/navigation";

import { recipes } from "@/lib/recipes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return recipes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    return { title: "Recipe not found | karolina.recipes" };
  }

  return {
    title: `${recipe.title} | karolina.recipes`,
    description: recipe.description,
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <Link
        href="/"
        className="text-sm text-orange-600 transition hover:text-orange-500"
      >
        ← Back to recipes
      </Link>

      <header className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-4xl font-semibold text-[--foreground]">
          {recipe.title}
        </h1>
        <span className="rounded-full border border-amber-100 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 shadow-inner">
          {recipe.time.total}
        </span>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-amber-100 bg-white/90 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[--foreground]">
              Ingredients
            </h2>
          </div>

          <div className="mt-4 space-y-4">
            {recipe.ingredients.map((group) => (
              <div key={group.heading} className="space-y-2">
                <h3 className="text-sm uppercase tracking-[0.15em] text-zinc-600">
                  {group.heading}
                </h3>
                <ul className="space-y-2 text-zinc-800">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-amber-100 bg-white/90 p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[--foreground]">Method</h2>
            <div className="mt-4 space-y-5">
              {recipe.steps.map((group) => (
                <div key={group.heading} className="space-y-3">
                  <h3 className="text-sm uppercase tracking-[0.15em] text-zinc-600">
                    {group.heading}
                  </h3>
                  <ol className="space-y-3 text-zinc-800">
                    {group.steps.map((step) => (
                      <li
                        key={step}
                        className="flex gap-3 rounded-xl bg-orange-50/60 p-3 ring-1 ring-inset ring-amber-100"
                      >
                        <span className="mt-0.5 h-2 w-2 rounded-full bg-orange-500" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Notes removed per request */}
        </div>
      </section>
    </main>
  );
}

