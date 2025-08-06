# 🍽 Recipe Hub – A Simple Recipe Directory

Recipe Hub is a minimal, modern recipe browsing app built using the **Next.js App Router**. It is designed to showcase recipes by category and dynamically render individual recipe pages using nested routes and metadata.

## 🚀 Features

- ✅ App Router with file-based routing
- ✅ Nested dynamic routes (`/[category]/[slug]`)
- ✅ Section-specific layouts (for recipes)
- ✅ Static and dynamic metadata (SEO-friendly pages)
- ✅ Custom 404 handling
- ✅ Private folders for utilities and dummy data
- ✅ File colocation (styles and components near routes)
- ✅ Route group for `/favorites` 
- ✅ Clean, mobile-friendly UI with Tailwind CSS

## 📂 Folder Structure

```
/app
  ├─ layout.tsx                 
  ├─ page.tsx            
  ├─ [category]/
  │   └─ [slug]/
  │       └─ page.tsx
  ├─ favorites/
  │   └─ page.tsx

/hooks
  └─ useFavorites.ts

/public
  └─ images/               

/_lib
  └─ recipes.ts
```


## 💡 Ideas for Next Steps
- [ ] Add a real CMS (like Sanity or Strapi)  
- [ ] Add search or filtering  
- [x] Save favorites with localStorage  
- [ ] Add cooking instructions  
- [x] Deploy on Vercel  
