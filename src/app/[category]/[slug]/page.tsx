import { notFound } from "next/navigation";
import Image from "next/image";
import { recipes } from "../../../../_lib/recipes";

interface Props {
    params: {
        category: string;
        slug: string;
    };
}

export default async function RecipePage({ params }: Props) {
    const { category, slug } = params;

    const recipe = recipes.find(
        (r) => r.category === category && r.slug === slug
    );

    if (!recipe) return notFound();

    return (
        <div className="max-w-3xl md:mx-auto mx-2 px-6 py-10 my-4 bg-white rounded-xl shadow-md">
            {/* Header Image */}
            <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
                <Image
                    src={recipe.imageHeader}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Title & Description */}
            <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-gray-700 mb-6">{recipe.description}</p>

            {/* Ingredients */}
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
                {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Back Link */}
            <div className="mt-10">
                <a href="/" className="text-orange-600 hover:underline">
                    ← Back to homepage
                </a>
            </div>
        </div>
    );
}
