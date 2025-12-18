import Link from "next/link";

import type { Recipe } from "@/lib/recipes";

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group block rounded-2xl border border-[--border] bg-[--card]/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-[--foreground]">
          {recipe.title}
        </h2>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-700 shadow-inner">
          {recipe.time.total}
        </span>
      </div>
    </Link>
  );
}

