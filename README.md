# Product & Inventory Dashboard

React.js assignment — component-based Product Catalog & Inventory Dashboard with `useState`, controlled forms, add/delete, and live search filtering by name or category.

## Features

- Add a product through a controlled form, with inline validation (all fields required, no negative price or quantity, quantity must be a whole number)
- Delete a product (with a confirmation prompt)
- Live search by product name or category
- Category dropdown filter (works together with search)
- Navbar summary: products in catalog, total inventory value, and matching count while filtering
- Low-stock badge when quantity is below 20

## Run locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Push to GitHub

```bash
cd product-dashboard
git init
git add .
git commit -m "Initial commit: Product & Inventory Dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<your-repo-name>` with your actual GitHub username and the repo you create on github.com (create it first as empty, no README, no .gitignore — those are already here).
