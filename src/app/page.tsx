import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/recipes";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 md:py-16">
      <header className="flex flex-col items-center gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500/90">
          karolina.recipes
        </p>
        <h1 className="text-4xl font-semibold text-[--foreground]">
          Karolina&apos;s Recipes
        </h1>
        <p className="max-w-2xl text-lg text-zinc-700">
          Fast and simple recipes to cover any occasion!
        </p>
        <div className="flex items-center gap-3 text-sm text-zinc-600">
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800 shadow-inner">
            {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"}
          </span>
          <span>More coming soon.</span>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
