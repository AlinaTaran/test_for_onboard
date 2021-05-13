import React, { Component } from "react";
import axios from "axios";
// import { connect } from "react-redux";

import Container from "./components/Container";
import Reports from "./components/Reports";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import SubTitle from "./components/SubTitle";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(`https://stage.onboardlms.io/notification/get/MAkTQaSNeZI6`)
      .then((res) => {
        const data = res.data.notifications;
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <Title />
        <Wrapper>
          <SubTitle />
          {data && <Reports data={data} />}
        </Wrapper>
      </Container>
    );
  }
}

export default App;
