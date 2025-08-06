"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { recipes } from "../../../_lib/recipes";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    const favoriteRecipes = recipes.filter((recipe) =>
        favorites.includes(recipe.slug)
    );

    if (favorites.length === 0) {
        return (
            <main className="max-w-3xl mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">❤️ Your Favorites</h1>
                <p className="text-gray-600 mb-4">You haven’t added any favorites yet.</p>
                <Link href="/" className="text-orange-600 hover:underline">
                    ← Back to Home
                </Link>
            </main>
        );
    }

    return (
        <main className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">❤️ Your Favorite Recipes</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {favoriteRecipes.map((recipe) => (
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
                            />
                        </div>
                        <div className="p-4 bg-orange-50 border border-orange-200">
                            <h3 className="text-lg font-semibold text-orange-900">{recipe.title}</h3>
                            <p className="text-sm text-orange-700 capitalize">{recipe.category}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Back to Home Link */}
            <div className="mt-12">
                <Link href="/" className="text-orange-600 hover:underline text-sm">
                    ← Back to Home
                </Link>
            </div>
        </main>
    );

}
