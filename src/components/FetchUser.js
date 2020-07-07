import React, { Component } from "react";

class FetchUser extends Component {
  state = {
    loading: true,
    employees: [],
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=200&nat=us";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ employees: data.results, loading: false });
    console.log(data);
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.employees.length ? (
          <div> Loading </div>
        ) : (
          <div>
            {this.state.employees.map((employee) => (
              <div>
                key={employee.login.uuid}
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="Image">image</th>
                      <th scope="col">F</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td><img src={employee.picture.thumbnail} alt="profilepic"/></td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>PN</td>
                      <td>{employee.dob.date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

// employees.state.sort (.reverse) <- TODO

export default FetchUser;
