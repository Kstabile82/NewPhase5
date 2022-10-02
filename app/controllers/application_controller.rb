class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue from ActiveRecord::RecordNotFound, with: :render_not_found_response

    private
    def render_not_found_response
    render json: { errors: invalid.record.errors }, status: :not_found
    end
end
