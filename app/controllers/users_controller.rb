class UsersController < ApplicationController
    before_action :authorize
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:userid] = user.id 
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password"}, status: :unauthorized
        end
    end

    private
    def authorize
        return render json: { error: "not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
