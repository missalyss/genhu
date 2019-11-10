import React from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import {AdminTitle} from "../Styles";
import Show from "./Show";
import './Employees.css'
import { Link } from 'react-router-dom';

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

  addEmployee = (employee) => {
    console.log(employee)
    let data = new FormData();
    Object.keys(employee).forEach(key => {
      if(!employee[key] || employee[key] === ''){
        return;
      }
      data.append(key, employee[key])
    });
    axios.post("/api/employees", data).then(res => {
      const { employees, } = this.state;
      this.setState({ employees: [...employees, res.data] });
      // this.setState({ employees: [...employees, res.data], staff: [...staff, res.data], volunteers: [...volunteers, res.data], directors: [...directors, res.data] });
      // would need to pass staff, volunteers, and directors in the const as well
      this.toggle();
    });
  };

  toggle = () => {
    const { toggleForm } = this.state;
    this.setState({ toggleForm: !toggleForm });
  };

  editEmployee = (id, employee) => {
    console.log(employee)
    let data = new FormData();
    Object.keys(employee).forEach(key => data.append(key, employee[key]));
    axios.put(`api/employees/${id}`, data).then(res => {
      const employees = this.state.employees.map(employee => {
        if (employee.id === id) {
          return res.data;
        } else {
          return employee;
        }
      });
      this.setState({ employees });
    })  
  }

  deleteEmployee = (id) => {
    axios.delete(`/api/employees/${id}`).then(res => {
      const { employees } = this.state;
      this.setState({ employees: employees.filter(e => e.id !== id) });
    });
  };

  renderShow() {
    const volunteers = this.state.employees.filter(e => e.role === 'volunteer');
    const directors = this.state.employees.filter(e => e.role === 'director');
    const staff = this.state.employees.filter(e => e.role === 'staff');

    return(
      <div>
        <h1 className='employee-title'>Staff</h1>
        <div className='employees-container'>
        { staff.map(s => (
          <div key={ s.id } className='employee-box'>
          <Show
            key={ s.id }
            { ...s }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
        </div>

        <h1 className='employee-title'>Volunteers</h1>
        <div className='employees-container'>
        { volunteers.map(v => (
          <div key={ v.id } className='employee-box'>
          <Show
            key={ v.id }
            { ...v }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
        </div>

        <h1 className='employee-title'>Directors</h1>
        <div className='employees-container'>
        { directors.map(d => (
          <div key={ d.id } className='employee-box'>
          <Show
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

  render() {
    return (
      <div style={{padding: '5em'}} className='employee-edit-page'>
        <div className='employee-title'><AdminTitle>Employees Page</AdminTitle></div>
        <div className='emp-btn-flex'>
        <div className='employee-buttons'>
        <div className = 'add-button'>
          <button onClick={this.toggle} >
            Add New Employee
          </button>
        </div>
        <Link to='/admin'>
          <button className="back-button" onClick={this.toggle} >
            Back
          </button>
         </Link>
         </div>
        </div>
        {this.state.toggleForm ? (
          <div> <EmployeeForm addEmployee={this.addEmployee} /> </div>
        ) : (
          <div></div>
        )}
        {this.renderShow()}
      </div>
    );
  }
}

export default Employees;