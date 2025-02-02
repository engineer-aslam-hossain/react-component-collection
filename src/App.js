import "./App.scss";
import Container from "./components/Container";

import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";

// import config file
import { config } from "./config";

// react router dom
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        {config &&
          config.map((c, i) => {
            return (
              <ContainerCard
                title={c.title}
                component={c.component}
                slug={c.slug}
                author={c.author}
                gh_handle={c.github_handle}
                key={i}
              />
            );
          })}

        <Routes>
          <Route
            path={`/`}
            element={
              <>
                <svg
                  width="113"
                  height="124"
                  viewBox="0 0 113 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h"
                >
                  <path
                    d="M0.846191 49.8003L0.846202 38.2416L0.846964 37.5231H13.2913L13.2913 49.8001H2.10096L0.846191 49.8003Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13.2913 29.2604L13.2913 37.5231H25.7357L25.7357 86.6309H13.2913V91.5501L13.2906 98.908H24.5256L25.7357 98.9078V99.6507L25.735 106.835L25.7357 123.462H38.18V86.6308H50.6244V74.3542L75.5131 74.3539V111.185H87.9575V98.9078H97.7151L100.401 98.908L100.402 86.6309H105.388L112.463 86.6311L112.846 86.6309V74.3539L100.402 74.3539L100.402 86.6309L87.9575 86.6308L87.9575 0.692383L75.5131 0.692383V12.9693L63.0687 12.9693V25.2462H50.6244V28.9521L50.6237 36.4003L50.6244 37.5231H52.3251L63.0679 37.5234L63.0687 25.2462L75.3832 25.2462L75.5124 25.2464L75.5124 37.3024L75.5131 37.5231V44.1068L75.5124 51.0645L75.5131 62.077H50.6244V74.3542L38.18 74.3539V12.9693L25.7357 12.9693L25.735 17.3027L25.7357 25.2462H13.2913V29.2604Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </>
            }
          ></Route>
          {config.map((r, i) => {
            return (
              <Route
                path={`/${r.slug}-by-${r.github_handle}`}
                element={r.component}
                key={i}
              ></Route>
            );
          })}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
