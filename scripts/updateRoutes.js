import fs from "fs";
import axios from "axios";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const USE_MOCK = true; // altere para false para usar a API real

async function fetchCategories() {
  if (USE_MOCK) {
    console.log("⚙️ Usando mock de categorias...");
    return ["tecnologia", "javascript", "react", "design", "carreira"];
  }

  const response = await axios.get("https://marcostavares.dev.br/wp/wp-json/wpmt/v2/categories");
  return response.data.map(category => category.slug);
}

async function updateRoutes() {
  try {
    const categories = await fetchCategories();

    pkg.reactSnap = {
      ...pkg.reactSnap,
      include: [
        "/",
        "/blog",
        ...categories.map(c => `/blog/category/${c}`)
      ]
    };

    fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2));
    console.log("✅ Rotas do react-snap atualizadas!");
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
  }
}

updateRoutes();
