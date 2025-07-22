# 🍽 Recipe Hub – A Simple Recipe Directory

Recipe Hub is a minimal, modern recipe browsing app built using the **Next.js App Router**. It is designed to showcase recipes by category and dynamically render individual recipe pages using nested routes and metadata.

---

## 🚀 Features

- ✅ App Router with file-based routing
- ✅ Nested dynamic routes (`/recipes/[category]/[slug]`)
- ✅ Section-specific layouts (for recipes)
- ✅ Static and dynamic metadata (SEO-friendly pages)
- ✅ Custom 404 handling
- ✅ Private folders for utilities and dummy data
- ✅ File colocation (styles and components near routes)
- ✅ Route group for `/favorites` (hidden from navigation)
- ✅ Responsive images with Next.js `<Image />`

---

## 📂 Folder Structure
/app
├─ layout.tsx # Root layout
├─ page.tsx # Homepage
├─ recipes/ # Recipes section
│ ├─ layout.tsx
│ ├─ page.tsx
│ └─ [category]/[slug]/page.tsx
├─ (private)/favorites/ # Route group (not in nav)
└─ page.tsx
/public
└─ images/ # Static images
/lib
└─ recipes.ts # Dummy recipe data

## Ideas for Next Steps
-[] Add a real CMS (like Sanity or Strapi)
-[] Add search or filtering
-[] Save favorites with localStorage
-[] Add cooking instructions
-[] Deploy on Vercel