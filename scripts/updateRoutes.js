import fs from "fs";
import axios from "axios";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

// Função para buscar categorias do WordPress
async function fetchCategories() {
    const response = await axios.get("https://marcostavares.dev.br/wp/wp-json/wp/v2/categories");
    return response.data.map(category => category.slug); // Retorna apenas os slugs das categorias
}

// Função principal para atualizar as rotas
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

// Executa a atualização das rotas
updateRoutes();