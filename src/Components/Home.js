import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap';

export default class Dashboard extends Component {
  state = {
    currentUser: null
  }
  componentDidMount() {
    this.setCurrentUser()
  }
  setCurrentUser = () => {
    const user = localStorage.getItem("currentUser");
    this.setState({ currentUser: JSON.parse(user) })
  }
  render() {
    const { currentUser } = this.state;
    return (
      <React.Fragment >
        <div className="container">
          <h1 className="text-center mt-4">Dashboard</h1>
          {currentUser && (
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <div className="card card-body">
                  <ul>
                    <li><b>First Name:</b> {currentUser.firstName}</li>
                    <li><b>Last Name:</b> {currentUser.lastName}</li>
                    <li><b>Email:</b> {currentUser.email}</li>
                    <li><b>PhoneNumber:</b> {currentUser.phoneNumber}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          <br></br>
               <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Restaurant Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Restaurant 1</td>
            <td>info</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Restaurant 2</td>
            <td>info</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Restaurant 3</td>
            <td>info</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Restaurant 4</td>
            <td>info</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Restaurant 5</td>
            <td>info</td>
          </tr>
          
        </tbody>
      </Table>
        </div>
      </React.Fragment>
    )
  }
}
