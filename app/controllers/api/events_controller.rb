class Api::EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render json: { errors: event.errors }, status: :unprocessable_entity 
    end
  end

  def update
    event = Event.find(params[:id])
    if event.update
      render json: event
    else
      render json: { errors: event.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Event.find(params[:id]).destroy
    render json: { message: 'Event deleted' }
  end

  private

  def event_params
    params.require(:event).permit(:location, :cost, :start_date, :end_date, :number_of_seats, :description)
  end
end
