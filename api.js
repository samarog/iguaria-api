import express from "express";
import { recipes } from "./recipes.js";
import helmet from 'helmet';
import cors from 'cors';

// core
const port = 4000;
const app = express();

// security
app.use(helmet());
app.use(cors()); 

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET BY ID
app.get("/recipes/:id", (req, res) => {
  const recipeById = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipeById) return res.status(404).json({ error: "Recipe not found" });
  res.json(recipeById);
});

// GET BY INGREDIENTS
app.get("/recipes", (req, res) => {
  const ingredientQuery = req.query.ingredient;

  if (!ingredientQuery) {
    return res.json(recipes);
  }

  const allIngredients = ingredientQuery.split(",").map((i) => i.trim().toLowerCase());

  const matchingRecipes = recipes.filter((recipe) =>
    allIngredients.every((ingredient) =>
      recipe.ingredients.some((i) => i.toLowerCase() === ingredient)
    )
  );

  if (matchingRecipes.length === 0) {
    return res.status(404).json({ error: "No recipes with those ingredients" });
  }

  res.json(matchingRecipes);
});

//  ERROR HANDLING

app.use((err, req, res, next) => {
  console.error(err.stack || err); 

  const status = err.status && Number.isInteger(err.status)
    ? err.status
    : 500;

  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

// PORT

app.listen(port, () => {
  console.log("API running on port: " + port);
});