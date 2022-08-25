import React, { Component } from "react";
import Customer from "./Customer";

class CustomerList extends Component {
  onDelete = (id) => {
    this.props.onDelete(id);
  };

  onEdit = (data) => {
    this.props.onEdit(data);
  };

  render() {
    const customers = this.props.customers;
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ width: "50px", textAlign: "center" }}>#</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <Customer
                key={customer.id}
                customer={customer}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CustomerList;
