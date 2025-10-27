import { Suspense, useEffect, useState } from "react";
import { Aside } from "./styles";
import Terms from "../terms";
import { TermsProvider } from "../../contexts/TermsContext";

const Sidebar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
      const footer = document.querySelector("footer") as HTMLElement | null;

      if (sidebar && footer) {
        const sidebarHeight = sidebar.offsetHeight;
        const footerTop = footer.getBoundingClientRect().top;

        if (footerTop <= sidebarHeight + 20) {
          setIsAtFooter(true);
        } else {
          setIsAtFooter(false);
        }
      }

      setIsFixed(window.scrollY > 160);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Aside>
      <div
        className="sidebar"
        style={{
          position: isAtFooter ? "absolute" : isFixed ? "fixed" : "relative",
          top: isAtFooter ? "auto" : isFixed ? "100px" : "initial",
          bottom: isAtFooter ? "0" : "auto",
          transition: "0.3s",
        }}
      >
        <TermsProvider>
          <Suspense fallback={<p>Carregando categorias...</p>}>
            <Terms />
          </Suspense>
        </TermsProvider>
      </div>
    </Aside>
  );
};

export default Sidebar;
