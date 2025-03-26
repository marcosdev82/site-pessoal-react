import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você procura não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

export default NotFound;
