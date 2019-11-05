class Api::EmployeesController < ApplicationController
  def index
    render json: Employee.all 
  end
  
  def directors
    render json: Employee.where(role: 'director')
  end

  def staff
    render json: Employee.where(role: 'staff')
  end

  def volunteers
    render json: Employee.where(role: 'volunteer')
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
    image = params[:image]
    ep = employee_params;
    
    if image
      ext = File.extname(image.tempfile)
      cloud_image = Cloudinary::Uploader.upload(image, public_id: image.original_filename, secure: true)
      ep[:image] = cloud_image['secure_url']
    end

    if employee.update(ep)
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
    params.permit(:first_name, :last_name, :phone, :email, :bio, :title, :role, :image, :other)
  end
end
