import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Route path='/' exact component={StreamList}></Route> */}
        {/* <Route path='/stream/new' component={Stream}></Route> */}
        {/* <Route path='/stream/new' component={StreamCreate}></Route> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
