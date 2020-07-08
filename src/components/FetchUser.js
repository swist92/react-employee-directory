import React, { Component } from "react";
import Moment from "moment";

class FetchUser extends Component {
  state = {
    loading: true,
    results: [],
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=20&nat=us";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ results: data.results, loading: false });
    console.log(data);
  }

  render() {
    return (
      <div>
        {/* {this.state.loading || !this.state.employees.length ? (
          <div> Loading </div>
        ) : ( */}
        <div>
          {/* {this.state.employees.map((employee) => (
              <div>
                key={employee.login.uuid} */}
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">image</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">dob</th>
              </tr>
            </thead>
            <tbody>
              {this.state.results.map(
                ({ picture, name, email, phone, dob }) => (
                  <tr>
                    <td>
                      {/* <th scope="row">1</th> */}
                      <img src={picture.thumbnail} alt="profilepic" />
                    </td>
                    <td>{name.first + " " + name.last}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{Moment(dob.date).format("MM/DD/YYYY")}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
// }
// };

// employees.state.sort (.reverse) <- TODO

export default FetchUser;
