"use client";

import { useFavorites } from "../../_hooks/useFavorites";
import Image from "next/image";
import Link from "next/link";
import { recipes } from "../../_lib/recipes";

export default function HomePage() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-2">🍽 Recipe Hub</h1>
        <p className="text-center text-gray-600">
          Discover delicious international recipes: from quick breakfasts to indulgent desserts.
        </p>
      </header>

      {/* Recipe Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Browse Recipes</h2>
          <Link
            href="/favorites"
            className="text-sm text-orange-600 hover:underline font-medium"
          >
            ❤️ View Favorites
          </Link>
        </div>

        {/* <h2 className="text-2xl font-semibold mb-6">Browse Recipes</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/${recipe.category}/${recipe.slug}`}
              className="group block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={recipe.imageThumb}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority
                />
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-orange-900">{recipe.title}</h3>
                  <button
                    onClick={(e) => toggleFavorite(recipe.slug, e)}
                    className="text-xl hover:scale-110 transition"
                    aria-label="Toggle Favorite"
                  >
                    {favorites.includes(recipe.slug) ? "❤️" : "🤍"}
                  </button>
                </div>
                <p className="text-sm text-orange-700 capitalize">{recipe.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        Built with ❤️ by Dickson Boateng.
      </footer>
    </main>
  );
}
