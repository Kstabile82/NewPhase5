class UserrescuesController < ApplicationController
    before_action :authorize, only: :show
    skip_before_action :authorize, only: :create

    def create
        uR = Userrescue.create!(userrescue_params)
        render json: uR, status: 200 
    end

    def destroy
        uR = Userrescue.find(params[:id])
        uR.destroy
        head :no_content
    end

    private

    def userrescue_params
        params.permit(:user_id, :rescue_id, :status, :user, :rescue)
    end

end
