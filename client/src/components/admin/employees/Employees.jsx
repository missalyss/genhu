import React from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import {AdminTitle} from "../Styles";
import Staff from "./Staff";
import Volunteers from "./Volunteers";
import Directors from "./Directors";
import './Employees.css'

class Employees extends React.Component {
  state = { employees: [], volunteers: [], directors: [], staff: [], toggleForm: false };

  componentDidMount() {
    axios
      .get("/api/employees")
      .then(res => {
        this.setState({ employees: res.data });
      })
      axios
        .get("/api/volunteers")
        .then(res => {
          this.setState({ volunteers: res.data });
        })
      axios
        .get("/api/directors")
        .then(res => {
          this.setState({ directors: res.data });
        })
      axios
        .get("/api/staff")
        .then(res => {
          this.setState({ staff: res.data });
        })
      .catch(err => {
        console.log(err);
      });

  }

  addEmployee = employee => {
    axios.post("/api/employees", employee).then(res => {
      const { employees } = this.state;
      this.setState({ employees: [...employees, res.data] });
      window.location.href = '/admin_employee'
    });
  };

  toggle = () => {
    const { toggleForm } = this.state;
    this.setState({ toggleForm: !toggleForm });
  };

  editEmployee = (id, employee) => {
    axios.put(`api/employees/${id}`, { employee }).then(res => {
      const { employees } = this.state.employees.map(employee => {
        if (employee.id === id) return res.data;
          return employee;
      });
      this.setState({ employees });
      window.location.href = '/admin_employee'
    })
  }

  deleteEmployee = (id) => {
    axios.delete(`/api/employees/${id}`).then(res => {
      const { employees } = this.state;
      this.setState({ employees: employees.filter(e => e.id !== id) });
    });
    window.location.href = '/admin_employee'
  };

  renderStaff() {
    const { staff } = this.state;

    return(
      <div>
        <h1 className='employee-title'>Staff</h1>
        <div className='employees-container'>
        { staff.map(s => (
          <div className='employee-box'>
          <Staff
         
            key={ s.id }
            { ...s }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
        </div>
      </div>
    );
  }

  renderDirectors() {
    const { directors } = this.state;

    return(
        <div>
          <h1 className='employee-title'>Directors</h1>
        <div className='employees-container'>
        { directors.map(d => (
          <div className='employee-box'>
          <Directors
            key={ d.id }
            { ...d }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
      </div>
      </div>
    );
  }

  renderVolunteers() {
    const { volunteers } = this.state;

    return(
      <div>
        <h1 className='employee-title'>Volunteers</h1>
        <div className='employees-container'>
        { volunteers.map(v => (
          <div className='employee-box'>
          <Volunteers
            key={ v.id }
            { ...v }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
        </div>
      </div>
      
    );
  }

  render() {
    return (
      <div style={{padding: '5em'}}>
        <div className='employee-title'><AdminTitle><h1>Employees Page</h1></AdminTitle></div>
        <div className = 'add-button'>
          <button onClick={this.toggle} >
            Add New Employee
          </button>
        </div>
        {this.state.toggleForm ? (
          <div> <EmployeeForm addEmployee={this.addEmployee} /> </div>
        ) : (
          <div></div>
        )}
        {this.renderStaff()}
        {this.renderVolunteers()}
        {this.renderDirectors()}
      </div>
    );
  }
}

export default Employees;