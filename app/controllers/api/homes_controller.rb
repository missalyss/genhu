class Api::HomesController < ApplicationController

  def index
    render json: Home.all
    # binding.pry
  end
  
  def orphanages
    render json: Home.where(role: 'orphanage').all
    # binding.pry
  end
  
  def centers
    render json: Home.where(role: 'center').all
    # binding.pry
  end

  def create
    home = Home.new(home_params)
    if home.save
      render json: home
    else
      render json: { errors: home.errors }, status: :unprocessable_entity 
    end
  end

  def update
   home = Home.find(params[:id])
    if home.update(home_params)
      render json: home
    else
      render json: { errors: home.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Home.find(params[:id]).destroy
    render json: { message: 'Home deleted' }
  end

  private

  def home_params
    params.require(:home).permit(:name, :role, :sheltered_children, :victims, :orphans, :volunteers, :director, :sponsor)
  end

end
