import fs from "fs";
import path from "path";

interface RouteConfig {
  include: string[];
}

export function updateRoutes(categories: { slug: string }[]) {
  const configPath = path.resolve(process.cwd(), "react-snap.config.json");

  const staticRoutes = ["/", "/blog"]; // rotas fixas
  const dynamicCategoryRoutes = categories.map(
    (cat) => `/blog/category/${cat.slug}`
  );

  const finalRoutes = [...staticRoutes, ...dynamicCategoryRoutes];

  const config: RouteConfig = { include: finalRoutes };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log("✅ Rotas do react-snap atualizadas com base nas categorias!");
}
