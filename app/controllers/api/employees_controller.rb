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
    employee.first_name = params[:first_name] ? params[:first_name] : employee.first_name
    employee.last_name = params[:last_name] ? params[:last_name] : employee.last_name
    employee.phone = params[:phone] ? params[:phone] : employee.phone
    employee.email = params[:email] ? params[:email] : employee.email
    employee.bio = params[:bio] ? params[:bio] : employee.bio
    employee.title = params[:title] ? params[:title] : employee.title
    employee.role = params[:role] ? params[:role] : employee.role
    employee.other = params[:other] ? params[:other] : employee.other
    image = params[:image]
    
    if image 
      begin
        ext = File.extname(image.tempfile)
        cloud_image = Cloudinary::Uploader.upload(image, public_id: image.original_filename, secure: true)
        employee[:image] = cloud_image['secure_url']
      # rescue => e
      #   render json: { errors: e }, status: 422
      end
    end

    if employee.save!
      render json: employee
    else
      render json: { errors: employee.errors }, status: :unprocessable_entity
    end
  end

  def update
    employee = Employee.find(params[:id])
    employee.first_name = params[:first_name] ? params[:first_name] : employee.first_name
    employee.last_name = params[:last_name] ? params[:last_name] : employee.last_name
    employee.phone = params[:phone] ? params[:phone] : employee.phone
    employee.email = params[:email] ? params[:email] : employee.email
    employee.bio = params[:bio] ? params[:bio] : employee.bio
    employee.title = params[:title] ? params[:title] : employee.title
    employee.role = params[:role] ? params[:role] : employee.role
    employee.other = params[:other] ? params[:other] : employee.other
    image = params[:image]
    
    if image && image != ''
      begin
        ext = File.extname(image.tempfile)
        cloud_image = Cloudinary::Uploader.upload(image, public_id: image.original_filename, secure: true)
        employee[:image] = cloud_image['secure_url']
      # rescue => e
      #   render json: { errors: e }, status: 422
      rescue
        
      end
    end

    if employee.save!
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
