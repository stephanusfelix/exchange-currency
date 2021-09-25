import React from "react";
import axios from "axios";
import Table from "../component/Table";
import "../style/Main.scss";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "cf103d4590b3c9d2bcf24af9cb2080de",
      query: "CAD,IDR,JPY,CHF,USD",
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://api.exchangeratesapi.io/v1/latest?access_key=${this.state.id}&symbols=${this.state.query}`
      )
      .then((res) => {
        this.setState({
          data: res.data.rates,
          loading: false,
        });
      });
  }
  render() {
    return (
      <div className="Main">
        {this.state.loading ? (
          <>Loading... </>
        ) : (
          <Table data={this.state.data} />
        )}
      </div>
    );
  }
}

export default Main;
