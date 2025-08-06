"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    const toggleFavorite = (slug: string, e: React.MouseEvent) => {
        e.preventDefault();
        setFavorites((prev) => {
            const updated = prev.includes(slug)
                ? prev.filter((s) => s !== slug)
                : [...prev, slug];
            localStorage.setItem("favorites", JSON.stringify(updated));
            return updated;
        });
    };

    return { favorites, toggleFavorite };
}
