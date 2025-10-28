import { Link, useLocation } from "react-router-dom";
import { Nav } from "./styles";

function Breadcrumb() {
  const location = useLocation();
  
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Nav aria-label="breadcrumb" style={{ margin: "1rem 0" }}>
      <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} style={{ marginLeft: "8px" }}>
              <span style={{ margin: "0 4px" }}>{">"}</span>
              {isLast ? (
                <span style={{ fontWeight: "bold" }}>{decodeURIComponent(name)}</span>
              ) : (
                <Link to={routeTo}>{decodeURIComponent(name)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </Nav>
  );
}

export default Breadcrumb;
