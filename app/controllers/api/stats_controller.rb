class Api::StatsController < ApplicationController
  def index
    render json: Stat.all
  end

  def create
    stat = Stat.new(stat_params)
    if stat.save
      render json: stat
    else
      render json: { errors: stat.errors }, status: :unprocessable_entity 
    end
  end

  def update
    stat = Stat.find(params[:id])
    if stat.update(stat_params)
      render json: stat
    else
      render json: { errors: stat.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Stat.find(params[:id]).destroy
    render json: { message: 'Stat deleted' }
  end

  private

  def stat_params
    params.require(:stat).permit(:name, :value, :priority)
  end
end
