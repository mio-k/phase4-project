class UsersController < ApplicationController
    before_action :authorize, only: [:show]
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:userid] = user.id 
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password"}, status: :unauthorized
        end
    end
    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end
    def index
        users = User.all
        render json: users, include: :dog, :items
    end
    def update
        user = find_user
        user.update(user_params)
        render json: user
    end

    private
    def authorize
        return render json: { error: "not authorized"}, status: :unauthorized unless session.include? :user_id
    end
    def find_user
        User.find(params[:id])
    end
    def user_params
        params.permit(:firstname, :lastname, :username, :password_digest)
    end
end
