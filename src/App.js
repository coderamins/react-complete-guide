import React, { Component } from "react";

import Layout from './components/Layout/Layout';
import BurgerBuildser from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuildser/>
        </Layout>
      </div>
    );
  }
}

export default App;
