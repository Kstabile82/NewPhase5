class UsersController < ApplicationController
rescue ActiveRecord::RecordInvalid => invalid
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    before_action :authorize
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users 
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 200
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: 200
            # render json: user, include: ['rescues']
        else
            render json: { message: "Not logged in" }, status: :unauthorized
        end
    end

    def update
       user = User.find(params[:id])
       user(id: session[:user_id])
        if user
            updatedUser = user.update(user_params)
            render json: user
        else
            render json: { message: "Not logged in" }, status: :unauthorized
        end
    end

    def destroy
        find_user(params[:id])
        user.destroy
        session[:user_id] = nil
    end

    private 
    def user_params
        params.permit(:name, :password, :password_confirmation, :location, :userrescues)
        # params.permit(:name, :password, :password_confirmation, userrescues)
    end

    def find_user
        user = User.find(params[:id])
    end

    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end set this up so its contingent upon admin status
end
