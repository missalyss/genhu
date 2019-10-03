class Api::EmployeesController < ApplicationController
  def index
    render json: Employee.all
  end

  def create
    employee = Employee.new(employee_params)
    if employee.save
      render json: employee
    else
      render json: { errors: employee.errors }, status: :unprocessable_entity 
    end
  end

  def update
    employee = Employee.find(params[:id])
    if employee.update
      render json: employee
    else
      render json: { errors: employee.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Employee.find(params[:id]).destroy
    render json: { message: 'Employee deleted' }
  end

  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :phone, :email, :bio, :title, :role, :image, :other)
  end
end
