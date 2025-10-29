// scripts/snap.js
// Este script controla a execução do react-snap no build

const isCI = process.env.CI === 'true'; // GitHub Actions define automaticamente CI=true

if (isCI) {
  console.log("⏭️ Pulando react-snap no ambiente CI (GitHub Actions)");
  process.exit(0);
}

(async () => {
  try {
    const { run } = await import('react-snap');
    console.log("⚙️ Executando react-snap localmente...");
    await run();
    console.log("✅ react-snap concluído com sucesso!");
  } catch (error) {
    console.warn("⚠️ Erro ao executar react-snap (ignorando):", error.message);
  }
})();
