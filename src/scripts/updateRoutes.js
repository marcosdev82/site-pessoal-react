import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

// Exemplo de rotas dinâmicas (você pode buscar de uma API real)
const categories = ["node", "react", "javascript", "php"];

pkg.reactSnap = {
  ...pkg.reactSnap,
  include: [
    "/",
    "/blog",
    ...categories.map((c) => `/blog/category/${c}`)
  ]
};

fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2));
console.log("✅ Rotas do react-snap atualizadas!");
