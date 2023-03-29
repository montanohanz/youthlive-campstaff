import React from "react";

export default class Hs2023Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_first: '',
      name_last: '',
      email: '',
      contact: '',
      bday: '',
      em_name: '',
      em_contact: '',
      em_relation: '',
      allergies: '',
      ygroup: '',
      sponsor: '',
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name_first + ""  + this.state.name_last);
    event.preventDefault();
    setSubmitting(true);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input name="name_first" />
          </label>
        </fieldset>
      </form>
    );
  }
}