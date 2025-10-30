import { spawn } from "child_process";
import path from "path";

console.log("⚙️ Executando react-snap localmente...");

// Corrige caminho para Windows e macOS/Linux
const isWindows = process.platform === "win32";
const cmd = isWindows ? "npx.cmd" : "npx";

const snap = spawn(cmd, ["react-snap"], {
  stdio: "inherit",
  cwd: path.resolve(), // garante execução no diretório do projeto
});

snap.on("error", (err) => {
  console.error("❌ Erro ao executar react-snap:", err);
});

snap.on("close", (code) => {
  if (code !== 0) {
    console.error(`❌ react-snap falhou com o código ${code}`);
    process.exit(1);
  } else {
    console.log("✅ react-snap finalizado com sucesso!");
  }
});
