import Image from "next/image";
import Link from "next/link";
import { recipes } from "../../_lib/recipes";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 ">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-2">🍽 Recipe Hub</h1>
        <p className="text-center text-gray-600">
          Discover delicious international recipes: from quick breakfasts to indulgent desserts.
        </p>
      </header>

      {/* Recipe Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Browse Recipes</h2>
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
                <h3 className="text-lg font-semibold text-orange-900">{recipe.title}</h3>
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
