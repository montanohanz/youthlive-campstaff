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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input name="name_first" type="text" value={this.state.name_first} onChange={this.handleInputChange} />
        </label>
        <label>
          Last Name:
          <input name="name_last" type="text" value={this.state.name_last} onChange={this.handleInputChange} />
        </label>
        <label>
          Email:
          <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <label>
          Contact:
          <input name="contact" type="text" value={this.state.contact} onChange={this.handleInputChange} />
        </label>
        <label>
          Birthday:
          <input name="bday" type="text" value={this.state.bday} onChange={this.handleInputChange} />
        </label>
        <label>
          Emergency Contact Name:
          <input name="em_name" type="text" value={this.state.em_name} onChange={this.handleInputChange} />
        </label>
        <label>
          Emergency Contact Number:
          <input name="em_contact" type="text" value={this.state.em_contact} onChange={this.handleInputChange} />
        </label>
        <label>
          Relation:
          <input name="em_relation" type="text" value={this.state.em_relation} onChange={this.handleInputChange} />
        </label>
        <label>
          Allergies:
          <input name="" type="text" value={this.state.allergies} onChange={this.handleInputChange} />
        </label>
        <label>
          YGroup Leader:
          <input name="ygroup" type="text" value={this.state.ygroup} onChange={this.handleInputChange} />
        </label>
        <label>
          Sponsor:
          <input name="sponsor" type="text" value={this.state.sponsor} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}