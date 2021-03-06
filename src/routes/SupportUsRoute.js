import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "/src/components/modules/Header";
import PageBody from "/src/components/common/PageBody";
import Footer from "/src/components/modules/Footer";

export default class SupportUsRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <PageBody>
          <br />
          <h1>SUPPORT US</h1>
        </PageBody>
        <Footer />
      </div>
    );
  }
}
