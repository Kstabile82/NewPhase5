class InformationsController < ApplicationController

    def show
     info = Information.where(rescue_id: params[:rescue_id])
     render json: info, status: 200
    end

    def create
        info = Information.create(infoParams)
        render json: info, status: 200
    end

    def destroy
        info = Information.find(params[:id])
        info.destroy
    end

    def update
        info = Information.find(params[:id])
        updatedInfo = info.update(infoParams)
        render json: updatedInfo
    end

    private 

    def infoParams
        params.permit(:rescue_id, :title, :text)
    end

end
