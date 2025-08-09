# 🍽️ Iguaria API

A simple REST API for browsing and retrieving recipes, built with Node.js and Express.

## Features
- Get all recipes
- Get a recipe by ID
- Filter recipes by ingredients
- Secure HTTP headers (Helmet)
- Cross-origin request support (CORS)

---

## Installation

```bash
git clone https://github.com/samarog/iguaria-api.git
cd iguaria-api
npm install
```

---

## Usage

Start the server:

```bash
node api.js
```

The API will be running at:
```
http://localhost:4000
```

---

## API Endpoints

### Get All Recipes
```
GET /recipes
```
**Query Parameters (optional):**
- `ingredient` — Comma-separated list of ingredients

Example:
```
GET /recipes?ingredient=eggs,bacon
```

---

### Get Recipe by ID
```
GET /recipes/:id
```

Example:
```
GET /recipes/1
```

---

## Security
- **Helmet** for HTTP header security
- **CORS** for cross-origin support

---

## Project Structure
```
api.js           # Express server and routes
recipes.js       # Recipe dataset
package.json     # Dependencies and scripts
```

---

## License
ISC License © 2025 samarog