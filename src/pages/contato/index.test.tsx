import { createRoot } from "react-dom/client";
import Contato from "./index";

describe('Teste de renderização do contato', () => {
    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<Contato />);
    });
});
