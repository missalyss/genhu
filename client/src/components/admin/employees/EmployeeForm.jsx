import React from "react";

class EmployeeForm extends React.Component {
  state = { first_name: "", last_name: "", bio: "", title: "", email: "", phone: "", other: "", role: "", image: ""};

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        first_name: this.props.firstName,
        last_name: this.props.lastName,
        bio: this.props.bio,
        title: this.props.title,
        email: this.props.email,
        phone: this.props.phone,
        other: this.props.other,
        role: this.props.role,
        image: this.props.image
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editEmployee(this.props.id, this.state);
      this.props.editToggle();
    } else {
      this.props.addEmployee({ ...this.state });
    }
    this.setState({first_name: "", last_name: "", bio: "", title: "", email: "", phone: "", other: "", role: "", image: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { first_name, last_name, bio, title, email, phone, other, role, image } = this.state;
    return (
      <div className='form-cont'>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            name="first_name"
            value={first_name}
            placeholder="First Name"
            required
            onChange={this.handleChange}
          />
          <label>Last Name:</label>
          <input
            name="last_name"
            value={last_name}
            placeholder="Last Name"
            required
            onChange={this.handleChange}
          />
          <label>Phone:</label>
          <input
            name="phone"
            value={phone}
            placeholder="Phone"
            required
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            name="email"
            value={email}
            placeholder="Email"
            type='email'
            required
            onChange={this.handleChange}
          />
          <label>Bio:</label>
          <input
            name="bio"
            value={bio}
            placeholder="Bio"
            required
            onChange={this.handleChange}
          />
          <label>Title:</label>
          <input
            name="title"
            value={title}
            placeholder="Title"
            required
            onChange={this.handleChange}
          />
          <label>Role:</label>
          <select
            name='role'
            value={ role }
            onChange={this.handleChange}
          >
            <option></option>
            <option value='staff'>Staff</option>
            <option value='director'>Director</option>
            <option value='volunteer'>Volunteer</option>
          </select>
          <label>Image:</label>
          <input
            name="image"
            value={image}
            placeholder="Add URL"
            onChange={this.handleChange}
          />
          <label>Other:</label>
          <input
            name="other"
            value={other}
            placeholder="Other"
            onChange={this.handleChange}
          />
          <div className="button-cont-stat">
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
