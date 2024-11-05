import { createRoot } from "react-dom/client";
import Home from "./index";

describe('Teste de renderização da home', () => {
    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<Home />);
    });
});
