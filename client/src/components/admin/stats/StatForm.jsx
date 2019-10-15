import React from 'react';

class StatForm extends React.Component {
  state = { name: '', value: '', priority: ''};

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editStat(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.addStat({...this.state});
    }
    this.setState({name: '', value: '', priority: ''})
  }
  
  handleChange = (e) => {
    const { name, value} = e.target;
    this.setState({[name]: value})

  }

  

  render() {
    const {name, value, priority} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            name='name'
            value={name}
            placeholder='Name'
            required
            onChange={this.handleChange}
            />
            <label>Value:</label>
            <input
            name='value'
            value={value}
            placeholder='Value'
            required
            onChange={this.handleChange}
            />
            <label>Priority:</label>
            <input
            name='priority'
            value={priority}
            placeholder='Priority'
            required
            onChange={this.handleChange}
            /><button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}



export default StatForm;