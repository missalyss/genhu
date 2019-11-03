class Api::HomesController < ApplicationController

  def index
    render json: Home.all
    # binding.pry
  end
  
  def orphanages
    # binding.pry
    render json: Home.where(role: 'orphanage').all
  end
  
  def centers
    render json: Home.where(role: 'center').all
    # binding.pry
  end

  def show
    render json: Home.find(params[:id])
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
    params.require(:home).permit(:name, :role, :sheltered_children, :victims, :orphans, :volunteers, :director, :sponsor, :description)
  end

end
