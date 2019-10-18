import React from "react";

class HomeForm extends React.Component {
  state = { name: '', role: '', sheltered_children: '', victims: '', orphans: '', volunteers: '', 
director: '', sponsor: ''  };

  componentDidMount() {
    if (this.props.id) {
      const { deleteHome, editHome, editToggle, ...rest } = this.props 
      this.setState({
        ...rest
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editHome(this.props.id, this.state);
      this.props.editToggle();
    } else {
      this.props.addHome({ ...this.state });
      this.props.toggle();
    }
    this.setState({name: '', role: '', sheltered_children: '', victims: '', orphans: '', volunteers: '', 
    director: '', sponsor: '' });
    // this.props.renderHomes();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, role, sheltered_children, victims, orphans, volunteers, director, sponsor } = this.state;
    return (
      <div className='form-cont'>
        <form onSubmit={this.handleSubmit}>
          <label>Home Name:</label>
          <input
            name="name"
            value={name}
            placeholder="Name"
            required
            onChange={this.handleChange}
          />
          <label>Home Role:</label>
          <select
            required
            name='role'
            onChange={this.handleChange}
            value={role}
          >
            <option value='' name=''></option>
            <option value='orphanage' name='orphanage'>Orphanage</option>
            <option value='center' name='center'>Drop-In Center</option>
          </select>
          <label>Sheltered Children:</label>
          <input
            name="sheltered_children"
            value={sheltered_children}
            placeholder="How many children?"
            required
            onChange={this.handleChange}
          />
          <label>Victims of Armed Conflict:</label>
          <input
            name="victims"
            value={victims}
            placeholder='Number of victims'
            required
            onChange={this.handleChange}
          />
          <label>Orphans:</label>
          <input
            name="orphans"
            value={orphans}
            placeholder="Percent of orphans"
            required
            onChange={this.handleChange}
          />
          <label>Regular Volunteers:</label>
          <input
            name="volunteers"
            value={volunteers}
            placeholder="Name"
            required
            onChange={this.handleChange}
          />
          <label>Director:</label>
          <input
            name="director"
            value={director}
            placeholder="Name"
            required
            onChange={this.handleChange}
          />
          <label>Home Sponsor:</label>
          <input
            name="sponsor"
            value={sponsor}
            placeholder="Name of sponson"
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

export default HomeForm;
