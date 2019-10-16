import React from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import {AdminTitle} from "../Styles";
import Employee from "./Employee";

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
    })
  }

  deleteEmployee = (id) => {
    axios.delete(`/api/employees/${id}`).then(res => {
      const { employees } = this.state;
      this.setState({ employees: employees.filter(e => e.id !== id) });
    });
  };

  renderEmployees() {
    const { employees } = this.state;

    return(
      <div>
        { employees.map(employee => (
          <Employee 
            key={ employee.id }
            { ...employee }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div style={{padding: '5em'}}>
        <AdminTitle>Employees Page</AdminTitle>
        <div>
          <button onClick={this.toggle}>
            Add New Employee
          </button>
        </div>
        {this.state.toggleForm ? (
          <div> <EmployeeForm addEmployee={this.addEmployee} /> </div>
        ) : (
          <div></div>
        )}
        {/* {this.renderEmployees()} */}
      </div>
    );
  }
}

export default Employees;