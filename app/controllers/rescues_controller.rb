class RescuesController < ApplicationController

    def index
        rescues = Rescue.all
        render json: rescues
    end

    def create      
        resc = Rescue.create!(rescue_params)
        render json: resc, status: :created
    end

    private
    def rescue_params
        params.permit(:name, :location)
    end

end
