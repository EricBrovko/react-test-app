import React, { Component } from 'react';
import '../styles/registrationForm.css';


class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Form is submitted. Email is: ', this.state.email);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text"
               placeholder="Email"
               value={this.state.email}
               onChange={this.handleEmailChange}
               className="email-field"
        />
        <button className="submit-btn">Save</button>
      </form>
    );
  }
}

export default RegistrationForm;
