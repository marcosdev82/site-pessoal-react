import { createRoot } from "react-dom/client";
import Servicos from "./index";

describe('Teste de renderização dos serviços', () => {
    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<Servicos />);
    });
});
