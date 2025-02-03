const Sitemap = require("react-router-sitemap").default;


new Sitemap([
  "/",
  "/servicos",
  "/contato",
])
.build("https://marcostavares.dev.br/")
.save("./public/sitemap.xml");
