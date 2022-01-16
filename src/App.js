import styled from "styled-components/macro";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
