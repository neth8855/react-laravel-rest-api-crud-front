import React, { Component } from "react";

class MyForm extends Component {
  state = {
    form: { first_name: "", last_name: "", email: "", isEdit: false },
    btnName: "Save",
    btnClass: "ui primary button submit-button",
  };

  isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmpty(this.props.customer)) {
      this.setState({
        form: { ...this.props.customer, isEdit: true },
        btnName: "Update",
        btnClass: "ui orange button submit-button",
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.formValidation()) {
      this.props.onFormSubmit(this.state.form);
    }

    //clear form
    this.clearFormFields();
  };

  formValidation = () => {
    if (document.getElementsByName("first_name")[0].value === "") {
      alert("Ender First Name");
      return false;
    }

    if (document.getElementsByName("last_name")[0].value === "") {
      alert("Ender Last Name");
      return false;
    }

    if (document.getElementsByName("email")[0].value === "") {
      alert("Ender email");
      return false;
    }

    return true;
  };

  clearFormFields = () => {
    // Change form state
    this.setState({
      form: { first_name: "", last_name: "", email: "", isEdit: false },
      btnName: "Save",
      btnClass: "ui primary button submit-button",
    });

    // clear form fields
    document.querySelector(".form").reset();
  };

  onAddNew = (event) => {
    event.preventDefault();

    this.clearFormFields();
  };

  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="four wide field">
            <label> First Name </label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="four wide field">
            <label> Last Name </label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.form.last_name}
            />
          </div>
          <div className="four wide field">
            <label> Last Name </label>
            <input
              type="email"
              name="email"
              placeholder="email@mail.com"
              onChange={this.handleChange}
              value={this.state.form.email}
            />
          </div>
          <div className="two wide field">
            <button className={this.state.btnClass} onClick={this.onFormSubmit}>
              {this.state.btnName}
            </button>
          </div>
          <div className="two wide field">
            <button
              className="ui success button submit-button"
              onClick={this.onAddNew}
            >
              Add New
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default MyForm;
