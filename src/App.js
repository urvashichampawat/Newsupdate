import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        {/*<Fragment>*/}
        <NavBar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        {/* above code for thin loading bar under navbar just like in youtube*/}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="General"
                pageSize={pageSize}
                country="in"
                category="General"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          >
            {" "}
          </Route>
          {/* <Route exact path="/business"> <News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" /> </Route>*/}
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="General"
                pageSize={pageSize}
                country="in"
                category="General"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Sports"
                pageSize={pageSize}
                country="in"
                category="Sports"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          >
            {" "}
          </Route>
        </Routes>
        {/* </Fragment> */}
      </Router>
    </div>
  );
};
export default App;
