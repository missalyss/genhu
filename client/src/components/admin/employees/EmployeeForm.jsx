import React from "react";

class EmployeeForm extends React.Component {
  state = { firstName: "", lastName: "", bio: "", title: "", email: "", phone: "", other: "", role: "", image: ""};

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        bio: this.props.bio,
        title: this.props.title,
        email: this.props.email,
        phone: this.props.email,
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
    this.setState({ name: "", value: "", });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, bio, title, email, phone, other, role, image } = this.state;
    return (
      <div className='form-cont'>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            name="firstName"
            value={firstName}
            placeholder="First Name"
            required
            onChange={this.handleChange}
          />
          <label>Last Name:</label>
          <input
            name="lastName"
            value={lastName}
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
            <option value='staff'>Staff</option>
            <option value='director'>Director</option>
            <option value='volunteer'>Volunteer</option>
          </select>
          <label>Image:</label>
          <input
            name="image"
            value={image}
            placeholder="Add URL"
            required
            onChange={this.handleChange}
          />
          <label>Other:</label>
          <input
            name="other"
            value={other}
            placeholder="Other"
            required
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
