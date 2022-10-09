class UserrescuesController < ApplicationController
    before_action :authorize
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

    def showalluserstoadmin
            # ur = Userrescue.find_by(params[:rescue_id][:user_id])
            ur = Userrescue.find_by(rescue_id: params[:rescue_id], user_id: params[:user_id])
            if ur.status === "Admin"
                userrescues = Userrescue.where(rescue_id: ur.rescue_id)
                # userrescues = Userrescue.where(:rescue_id = ur.rescue_id)
                render json: userrescues, status: 200
            end
    end

    private

    def userrescue_params
        params.permit(:user_id, :rescue_id, :status, :user, :rescue)
    end

end
