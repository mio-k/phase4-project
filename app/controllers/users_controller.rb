class UsersController < ApplicationController
    before_action :authorize, only: [:authenticate]
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def authenticate
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def show
        user = find_user
        render json: user
    end

    def index
        users = User.all
        render json: users, include: :dog
    end


    private
    def authorize
        return render json: { error: "not authorized"}, status: :unauthorized unless session.include? :user_id
    end
    def find_user
        User.find(params[:id])
    end
    def user_params
        params.permit(:firstname, :lastname, :username, :password) # pass1234 => 23ej2iodm893md34i9cn3ucin34ic
    end
    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found 
    end
    def render_unprocessable_entity(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end
end
