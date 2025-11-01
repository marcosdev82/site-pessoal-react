import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("⚙️ Executando react-snap localmente...");

try {
  const reactSnapPath = path.resolve(__dirname, "../node_modules/react-snap/bin/react-snap.js");

  execSync(`node "${reactSnapPath}"`, { stdio: "inherit" });


  // Executa react-snap diretamente via Node
  execSync(`node "${reactSnapPath}"`, {
    stdio: "inherit", // Mostra os logs em tempo real
  });

  console.log("✅ react-snap concluído com sucesso!");
} catch (error) {
  console.error("❌ Erro ao executar react-snap:");
  console.error(error.message);
  process.exit(1);
}
